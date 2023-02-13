# Streamlink Handoff

<img src="/extension/icon.svg" width="100%" height="130">

Streamlink Handoff is a Firefox browser companion extension for [Streamlink](https://streamlink.github.io). It adds a context menu (right-click) option, providing a way to conveniently pass supported video URLs to Streamlink for playback.

[<img src="/img/get-the-addon-fx-apr-2020.svg" height="50">](https://addons.mozilla.org/firefox/addon/streamlink-handoff/)

> :warning: After installing the extension, the first-time native messaging host setup [explained here](#first-time-setup) **must** be performed for it to work correctly

Streamlink Handoff respects your privacy and does not collect any data.

## In Action

**Context menu**

<kbd>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/bgh-github/streamlink-handoff/main/img/context-menu-dark.png">
    <img src="https://raw.githubusercontent.com/bgh-github/streamlink-handoff/main/img/context-menu.png">
  </picture>
</kbd>
<br/>
<br/>

> :information_source: The context menu includes three main items
> * Standard 'Livestream' Streamlink behaviour
> * [Seekable-friendly](https://github.com/streamlink/streamlink/issues/134) 'VOD (Passthrough)' where the player handles stream transport
> * The 'Copy Command' item allows copying the full Streamlink command line string to the clipboard for either of the above, _without_ launching the stream

**Extension preferences**

<kbd>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/bgh-github/streamlink-handoff/main/img/options-dark.png">
    <img src="https://raw.githubusercontent.com/bgh-github/streamlink-handoff/main/img/options.png">
  </picture>
</kbd>

## Requirements

* [Streamlink](https://streamlink.github.io/install.html) installed and available from PATH
* [VLC media player](https://www.videolan.org/vlc/#download) or [mpv](https://mpv.io/installation/)
* Native messaging host configuration - [see here](#first-time-setup)
* And, of course, Firefox!

## Native Messaging Host

Under the modern WebExtensions API model, what's referred to as [native messaging](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Native_messaging) is the way extensions can communicate with programs running outside the browser sandbox.

An important part to this is the so-called native messaging 'host', which can be thought of as the local app/program/binary that an extension implementing native messaging exchanges messages with.

Some applications may directly integrate their own native messaging host capabilities (KeePassXC being [one](https://keepassxc.org/docs/KeePassXC_UserGuide.html#_setup_browser_integration) [example](https://addons.mozilla.org/firefox/addon/keepassxc-browser/)). In the case of Streamlink Handoff, an intermediary host program script - for which first time manifest and host program setup actions are provided below - can act as conduit between the browser extension and Streamlink whereby:

> A Streamlink Handoff browser extension action is invoked, per [manifest definition](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Native_messaging#app_manifest) sends message to -> host program script -> which in turn calls Streamlink, relaying on the video URL and any other playback preferences

For Streamlink Handoff, a major goal was to create the most generic and minimal host reference implementations possible, with little to no external dependencies.

On Linux this is achieved through a shell script, and on Windows a PowerShell script called via a Batch file wrapper.

By keeping the native messaging host programs lean and constructing Streamlink parameters entirely within the extension, any future updates should be made far simpler.

### First Time Setup

Expand the sections below for pre-canned native messaging host scripted setup commands specific to your platform. The related components will be created in user-based (user home/profile) locations.

If curious, you're encouraged to inspect the commands before running them.

<details>
  <summary>Linux - Shell</summary>

  Simply copy/paste the below script block into your terminal and execute.

  This should create two Streamlink Handoff files (.json and .sh) under `$HOME/.mozilla/native-messaging-hosts`.

  ```bash
  host_dir="${HOME}/.mozilla/native-messaging-hosts"
  mkdir --parents "${host_dir}"

  host_name=streamlink_handoff_host
  host_program=streamlink-handoff.sh

  # manifest
  cat > "${host_dir}/${host_name}.json" << EOF
  {
    "name": "${host_name}",
    "description": "Streamlink Handoff Native Messaging Host - Linux",
    "path": "${host_dir}/${host_program}",
    "type": "stdio",
    "allowed_extensions": ["streamlink-handoff@bgh.io"]
  }
  EOF

  # host program
  cat > "${host_dir}/${host_program}" << 'EOF'
  #!/bin/bash

  message_byte_length="$(od --address-radix=n --read-bytes=4 --format=dL | tr --delete " ")"
  message="$(od --address-radix=n --read-bytes="${message_byte_length}" --format=x1 | xxd --plain --revert)"
  message="$(echo "${message}" | sed --expression='s/^"\(.*\)"$/\1/')"

  streamlink ${message} > /dev/null 2>&1
  EOF

  chmod u+x "${host_dir}/${host_program}"
  ```

</details>

<details>
  <summary>Windows - PowerShell</summary>

  Copying/pasting commands directly into the PowerShell console can be unreliable, so it's a good idea to instead copy the below script block into a new PowerShell ISE file and run (Ctrl + a to select all > F8 to run selection).

  This should create a registry entry in addition to three Streamlink Handoff files (.json, .bat and .ps1) under `%APPDATA%\streamlink-handoff`.

  ```powershell
  $HostFolderPath = Join-Path -Path $Env:APPDATA -ChildPath streamlink-handoff
  If (-Not (Test-Path -Path $HostFolderPath)) {New-Item -Path $HostFolderPath -ItemType Directory}

  $HostName = "streamlink_handoff_host"
  $HostProgram = "streamlink-handoff.bat"

  # Manifest
  $MainifestContent = @"
  {
    "name": "$HostName",
    "description": "Streamlink Handoff Native Messaging Host - Windows",
    "path": "$HostProgram",
    "type": "stdio",
    "allowed_extensions": ["streamlink-handoff@bgh.io"]
  }
  "@

  $ManifestFile = New-Item -Path (Join-Path -Path $HostFolderPath -ChildPath "$HostName.json") -Value $MainifestContent -Force

  $RegKey = "HKCU:\SOFTWARE\Mozilla\NativeMessagingHosts\$HostName"
  If (-Not (Test-Path -Path $RegKey)) {New-Item -Path $RegKey -Force}
  Set-ItemProperty -Path $RegKey -Name "(Default)" -Value $ManifestFile.FullName -Type String -Force

  # Host Program(s)
  $BatchFileContent = "@echo off & powershell -NoProfile -ExecutionPolicy Bypass -File `"$(Join-Path -Path $HostFolderPath -ChildPath streamlink-handoff.ps1)`""
  Set-Content -Path (Join-Path -Path $HostFolderPath -ChildPath $HostProgram) -Value $BatchFileContent -Force

  $PSFileContent = @'
  $BinaryReader = New-Object -TypeName System.IO.BinaryReader([System.Console]::OpenStandardInput())

  $MessageByteLength = $BinaryReader.ReadInt32()
  $Message = [System.Text.Encoding]::UTF8.GetString($BinaryReader.ReadBytes($MessageByteLength))
  $Message = $Message.Trim('"')

  Invoke-CimMethod -ClassName Win32_Process -Arguments @{CommandLine="$((Get-Command -Name streamlink).Source) $Message"} -MethodName Create | Out-Null
  '@

  Set-Content -Path (Join-Path -Path $HostFolderPath streamlink-handoff.ps1) -Value $PSFileContent -Force
  ```

</details>

<details>
  <summary>macOS - Untested</summary>

  I don't currently have the means to test on macOS. The Linux setup and host program shell scripts however should presumably work without too many modifications - be aware of distinct macOS [manifest locations](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#macos).
</details>

## Troubleshooting

Review [requirements](#requirements). Though not specifically mentioned, it's assumed relatively recent versions of the following are installed

* Firefox (for desktop)
* On Linux/(macOS?) - core utilities, namely `od` and `xxd`
* On Windows - tested against Windows PowerShell 5.1 ([installed by default](https://learn.microsoft.com/powershell/scripting/windows-powershell/install/windows-powershell-system-requirements#windows-powershell-51) on Windows 10+)

To avoid unnecessary context menu clutter, the Streamlink Handoff entry is set to display only for hyperlinks matching URLs sourced from Streamlink's [plugins article](https://streamlink.github.io/plugins.html). An example link that can be used for testing is below:

<https://www.twitch.tv/monstercat>

If Firefox is open in Private Browsing mode, Streamlink Handoff must be [allowed to run in Private Windows](https://support.mozilla.org/kb/extensions-private-browsing).

If Streamlink was only just installed prior, Firefox may need to be closed/reopened to reflect updated PATH. If in doubt, reboot.

In cases where the context menu appears but videos won't load, an initial troubleshooting step should be to check that Streamlink can successfully launch a video from the command line independent of Streamlink Handoff. Test using a basic command like `streamlink twitch.tv/monstercat best`, or use the 'Copy Command' option to copy the Streamlink command line string to the clipboard. Any issues when running direct from the command line should be addressed before retrying the extension.

You can also try rerunning the first-time [native messaging host setup](#first-time-setup) for your platform to reapply the latest recommended host configuration.

## Motivation

Streamlink Handoff came about from wanting to create something I would personally use and find useful.

As a user of the excellent [Streamlink Twitch GUI](https://streamlink.github.io/streamlink-twitch-gui/) application, it was disappointing that changes and limitations of Twitch's new API resulted in downscaling of the app's functionality, along with making authentication mandatory.

This was a reminder to the degree third-party applications can be at the mercy of a service's API. Factoring in services that would generally rather funnel users towards their own website or app experience, an open and feature complete API that fosters third-party apps could be seen as at odds. It therefore seems like native first-party websites are the only "sure thing" that can be relied upon long-term for video browsing/discovery.

Now it could be said that Streamlink and indeed Streamlink Handoff are themselves third-party software. The difference, I suppose, is their purpose is to _play_ videos, not browsing and discovery.

So after all that, if the humble web browser was to be my primary video browsing interface, what gives? Ain't nobody got time for manually copy pasting links and crafting Streamlink command lines. And so Streamlink Handoff was born.

Secondary was the challenge and opportunity to gain some small insight into a software development project, from an initial thought bubble through to packaging and distribution.

As a novice programmer at best, I am open to suggestions.

## Future Possibilities

* Build and release automation
* Arch User Repository (AUR) native messaging host configuration package
* Manifest V3
* Improve error handing and logging
* Localisation
* Chromium support

## Acknowledgements

None of this would be possible without the [Streamlink project](https://github.com/streamlink/streamlink)

Extension icon created from a mashup of [Twemoji](https://twemoji.twitter.com) ["raised hand"](https://github.com/twitter/twemoji/blob/master/assets/svg/270b.svg) emoji image and the [Streamlink icon](https://github.com/streamlink/streamlink/blob/master/icon.svg)
