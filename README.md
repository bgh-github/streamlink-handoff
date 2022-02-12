# Streamlink Handoff

Streamlink Handoff is a Firefox browser companion extension for [Streamlink](https://streamlink.github.io). The extension adds a context menu (right-click) option, providing a way to conveniently pass supported video URLs to Streamlink for playback.

Available from [addons.mozilla.org](https://addons.mozilla.org/firefox/addon/streamlink-handoff/)

> :warning: After installing the extension, the native messaging host setup [outlined here](#first-time-setup) **must** be performed for it to work correctly  

Absolutely no data is collected by this extension.

## Screenshots

**Context menu**

<kbd>![image](/img/context-menu.png?raw=true)</kbd>

> :information_source: pictured above, the context menu includes a standard 'Livestream' launch item along with the [seekable-friendly](https://github.com/streamlink/streamlink/issues/134) 'VOD (HLS Passthrough)' alternate playback option


**Extension preferences**

<kbd>![image](/img/options.png?raw=true)</kbd>

## Requirements

* [Streamlink](https://streamlink.github.io/install.html) installed and available from PATH
* [VLC media player](https://www.videolan.org/vlc/#download) or [mpv](https://mpv.io/installation/)
* Native messaging host configuration - [see here](#first-time-setup)
* And, of course, Firefox!

## Native Messaging Host

The so-called 'native messaging host' is the local app/program/binary that interfaces with the browser extension.

For Streamlink Handoff, a major goal here was to create the most generic and simple reference implementations possible, with little to no external dependencies.

On Linux this is acheieved through a Bash shell script, and on Windows a PowerShell script called via a Batch file wrapper.

By keeping the native messaging host programs lean and constructing Streamlink parameters entirely within the extension, any future updates should be made far simpler.

### First Time Setup

Expand the sections below for pre-canned native messaging host scripted setup commands specific to your platform. The related components will be created in user-based (user home/profile) locations.

If curious, you're encouraged to inspect the commands before running them.

<details>
  <summary>Linux - Bash</summary>
  
  Simply copy/paste the below script block into your terminal and execute.
  
  This should create two Streamlink Handoff files (.json and .sh) under `$HOME/.mozilla/native-messaging-hosts`.

  ```bash
  host_dir=$HOME/.mozilla/native-messaging-hosts
  mkdir --parents $host_dir

  host_name=streamlink_handoff_host
  host_program=streamlink-handoff.sh

  # manifest
  cat > $host_dir/$host_name.json << EOF
  {
    "name": "$host_name",
    "description": "Streamlink Handoff Native Messaging Host - Linux",
    "path": "$host_dir/$host_program",
    "type": "stdio",
    "allowed_extensions": ["streamlink-handoff@bgh.io"]
  }
  EOF

  # host program
  cat > $host_dir/$host_program << 'EOF'
  #!/bin/bash

  if [ $STREAMLINK_HANDOFF_HOST_LOGGING = 1 ]
  then
    exec >> /tmp/"$(date --iso-8601)"_streamlink-handoff-host.log 2>&1
    set -o xtrace
    date
  fi

  message_byte_length=$(od --address-radix=n --read-bytes=4 --format=dL | tr --delete " ")

  message=$(od --address-radix=n --read-bytes="$message_byte_length" --format=x1 | xxd --plain --revert)
  message=$(echo $message | sed --expression='s/^"//' --expression='s/"$//')

  streamlink $message
  EOF

  chmod u+x $host_dir/$host_program
  ```
</details>

<details>
  <summary>Windows - PowerShell</summary>
  
  Copying/pasting commands directly into a PowerShell console can be hit and miss, so it's instead recommended you copy the below script block into a new PowerShell ISE file and run (Ctrl + a to select all > F8 to run selection).

  This should create a registry entry in addition to three Streamlink Handoff files (.json, .bat and .ps1) under `%APPDATA%\streamlink-handoff`.

  ```powershell
  # Manifest
  $HostFolderPath = Join-Path -Path $Env:APPDATA -ChildPath streamlink-handoff
  If (-Not (Test-Path -Path $HostFolderPath)) {New-Item -Path $HostFolderPath -ItemType Directory}

  $HostName = "streamlink_handoff_host"
  $HostProgram = "streamlink-handoff.bat"

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

  # Program(s)
  $BatchFileContent = "powershell -ExecutionPolicy Bypass -File `"$(Join-Path -Path $HostFolderPath -ChildPath streamlink-handoff.ps1)`""
  Set-Content -Path (Join-Path -Path $HostFolderPath -ChildPath $HostProgram) -Value $BatchFileContent -Force

  $PSFileContent = @'
  If ($Env:STREAMLINK_HANDOFF_HOST_LOGGING -Eq 1)
  {
      Start-Transcript -Path (Join-Path -Path $Env:Temp -ChildPath ((Get-Date -Format yyyy-MM-dd) + "_streamlink-handoff-host.log")) -IncludeInvocationHeader -Append
      Get-Date
  }

  $BinaryReader = New-Object -TypeName System.IO.BinaryReader([System.Console]::OpenStandardInput())

  $MessageByteLength = $BinaryReader.ReadInt32()
  Write-Output -InputObject "Message byte length: $MessageByteLength"

  $Message = [System.Text.Encoding]::UTF8.GetString($BinaryReader.ReadBytes($MessageByteLength))
  $Message = $Message.Trim('"')
  Write-Output -InputObject "Message: $Message"

  Start-Process -FilePath streamlink -ArgumentList $Message
  '@

  Set-Content -Path (Join-Path -Path $HostFolderPath streamlink-handoff.ps1) -Value $PSFileContent -Force
  ```
</details>

## Troubleshooting

Review [requirements](#requirements). Though not specifically mentioned, it's assumed relatively recent versions of the following are installed

* Firefox
* On Linux - core utilities, namely `od` and `xxd`
* On Windows - testing occurs against Windows PowerShell 5.1 ([installed by default](https://docs.microsoft.com/powershell/scripting/windows-powershell/install/windows-powershell-system-requirements#windows-powershell-51) on Windows 10+)

An important early troubleshooting step is to check that Streamlink can successfully launch a video from the command line (with any chosen options) independent of Streamlink Handoff. For example, a simple (default) command, `streamlink twitch.tv/monstercat best`. If this fails, the broader problem will need to be addressed before retrying the extension.

If Firefox is open in Private Browsing mode, Streamlink Handoff must be [allowed to run in Private Windows](https://support.mozilla.org/kb/extensions-private-browsing).

You can try rerunning the first time [native messaging host setup](#first-time-setup) for your platform to reapply configuration.

The Streamlink Handoff native messaging host configurations provided above will also log their execution if an environment variable `STREAMLINK_HANDOFF_HOST_LOGGING=1` is set. Log files are output to `/tmp` on Linux and `%TEMP%` on Windows.

## Motivation

Streamlink Handoff came about from wanting to create something I would personally use and find useful.

As a user of the excellent [Streamlink Twitch GUI](https://streamlink.github.io/streamlink-twitch-gui/) application, it was dissapointing that changes and limitations of Twitch's new API resulted in downscaling of the app's functionality, along with making authentication mandatory.

This was a reminder to the degree third-party applications can be at the mercy of a service's API. Factoring in services that would generally rather funnel users towards their own website or app experience, an open and feature complete API that fosters third-party apps could be seen as at odds. It therefore seems like native first-party websites are the only "sure thing" that can be relied upon long-term for video browsing/discovery.

Now it could be said that Streamlink and indeed Streamlink Handoff are themselves third-party software. The difference, I suppose, is their purpose is to _play_ videos, not browsing and discovery.

So after all that, if the humble web browser was to be my primary video browsing interface, what gives? Ain't nobody got time for manually copy pasting links and crafting Streamlink command lines. And so Streamlink Handoff was born.

Secondary was the challenge and opportunity to gain some small insight into a software development project, from an initial thought bubble through to packaging and distribution.

As a novice programmer at best, I am open to suggestions.

## Future Possibilities

* Improve error handing and logging
* Build and release automation
* Localisation
* Chromium support
* Arch User Repository (AUR) native messaging host configuration package

## Acknowledgements

This extension would not be made possible without the [Streamlink project](https://github.com/streamlink/streamlink)

Extension icon created from a mashup of [Twemoji](https://twemoji.twitter.com) ["raised hand"](https://github.com/twitter/twemoji/blob/master/assets/svg/270b.svg) emoji image and the [Streamlink icon](https://github.com/streamlink/streamlink/blob/master/icon.svg)
