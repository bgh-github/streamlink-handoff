const streamlinkPluginUrls = ["*://*.abema.tv/*", "*://*.adultswim.com/*", "*://*.play.afreecatv.com/*", "*://*.antena7.com.do/*", "*://*.atv.pe/*", "*://*.c9n.com.py/*", "*://*.canal10.com.ni/*", "*://*.canal12.com.sv/*", "*://*.chapintv.com/*", "*://*.elnueve.com.ar/*", "*://*.redbolivision.tv.bo/*", "*://*.repretel.com/*", "*://*.rts.com.ec/*", "*://*.snt.com.py/*", "*://*.tvc.com.ec/*", "*://*.vtv.com.hn/*", "*://*.17app.co/*", "*://*.daserste.de/*", "*://*.ardmediathek.de/*", "*://*.mediathek.daserste.de/*", "*://*.arte.tv/*", "*://*.atresplayer.com/*", "*://*.bbc.co.uk/iplayer/*", "*://*.bfmtv.com/*", "*://*.01net.com/*", "*://*.live.bigo.tv/*", "*://*.bigoweb.co/*", "*://*.live.bilibili.com/*", "*://*.blaze.tv/*", "*://*.bloomberg.com/*", "*://*.booyah.live/*", "*://*.players.brightcove.net/*", "*://*.btvplus.bg/*", "*://*.cbsnews.com/*", "*://*.armymedia.bg/*", "*://*.bgonair.bg/*", "*://*.bloombergtv.bg/*", "*://*.bnt.bg/*", "*://*.live.bstv.bg/*", "*://*.i.cdn.bg/*", "*://*.nova.bg/*", "*://*.mu-vi.tv/*", "*://*.ceskatelevize.cz/*", "*://*.showtv.com.tr/*", "*://*.haberturk.com/*", "*://*.showmax.com.tr/*", "*://*.showturk.com.tr/*", "*://*.bloomberght.com/*", "*://*.clubbingtv.com/*", "*://*.cmmedia.es/*", "*://*.cnews.fr/*", "*://*.crunchyroll.com/*", "*://*.dailymotion.com/*", "*://*.delfi.lt/*", "*://*.delfi.ee/*", "*://*.delfi.lv/*", "*://*.dw.com/*", "*://*.dlive.tv/*", "*://*.cnnturk.com/*", "*://*.dreamturk.com.tr/*", "*://*.dreamtv.com.tr/*", "*://*.kanald.com.tr/*", "*://*.teve2.com.tr/*", "*://*.eurostartv.com.tr/*", "*://*.kralmuzik.com.tr/*", "*://*.ntv.com.tr/*", "*://*.startv.com.tr/*", "*://*.dr.dk/*", "*://*.earthcam.com/*", "*://*.egame.qq.com/*", "*://*.eltrecetv.com.ar/*", "*://*.euronews.com/*", "*://*.facebook.com/*", "*://*.filmon.com/*", "*://*.fox.com.tr/*", "*://*.funimation.com/*", "*://*.funimationnow.uk/*", "*://*.galatasaray.com/*", "*://*.goltelevision.com/*", "*://*.goodgame.ru/*", "*://*.docs.google.com/*", "*://*.drive.google.com/*", "*://*.replay.gulli.fr/*", "*://*.cnbcarabia.com/*", "*://*.media.gov.kw/*", "*://*.rotana.net/*", "*://*.htv.com.vn/*", "*://*.huajiao.com/*", "*://*.huya.com/*", "*://*.idf1.fr/*", "*://*.player.invintus.com/*", "*://*.fanxing.kugou.com/*", "*://*.live.line.me/*", "*://*.livestream.com/*", "*://*.lnk.lt/*", "*://*.lrt.lt/*", "*://*.ltv.lsm.lv/*", "*://*.mdstrm.com/*", "*://*.latina.pe/tvenvivo/*", "*://*.saltillo.multimedios.com/video/*", "*://*.mediaklikk.hu/*", "*://*.m4sport.hu/*", "*://*.mediavitrina.ru/*", "*://*.mildom.com/*", "*://*.mitele.es/*", "*://*.mjunoon.tv/*", "*://*.play.mrt.com.mk/*", "*://*.13tv.co.il/*", "*://*.nbc.com/*", "*://*.nbcnews.com/*", "*://*.nbcsports.com/*", "*://*.nhk.or.jp/nhkworld/*", "*://*.live.nicovideo.jp/*", "*://*.nimo.tv/*", "*://*.nos.nl/*", "*://*.news.now.com/*", "*://*.tv.nrk.no/*", "*://*.radio.nrk.no/*", "*://*.ntv.ru/*", "*://*.ok.ru/*", "*://*.olympicchannel.com/*", "*://*.olympics.com/*", "*://*.1plus1.video/*", "*://*.1tv.ru/*", "*://*.openrec.tv/*", "*://*.tvthek.orf.at/*", "*://*.pandalive.co.kr/*", "*://*.picarto.tv/*", "*://*.piczel.tv/*", "*://*.sketch.pixiv.net/*", "*://*.pluto.tv/*", "*://*.france.tv/*", "*://*.francetvinfo.fr/*", "*://*.live.qq.com/*", "*://*.radiko.jp/*", "*://*.radio.net/*", "*://*.radio.at/*", "*://*.radio.de/*", "*://*.radio.dk/*", "*://*.radio.es/*", "*://*.radio.fr/*", "*://*.radio.it/*", "*://*.radio.pl/*", "*://*.radio.pt/*", "*://*.radio.se/*", "*://*.raiplay.it/*", "*://*.reuters.com/*", "*://*.reuters.tv/*", "*://*.rtbf.be/auvio/*", "*://*.rtbfradioplayer.be/*", "*://*.rtpa.es/*", "*://*.rtp.pt/play/*", "*://*.rtve.es/*", "*://*.rtvs.sk/*", "*://*.ruv.is/*", "*://*.play.sbs.co.kr/*", "*://*.schoolism.com/*", "*://*.showroom-live.com/*", "*://*.sportal.bg/*", "*://*.sportschau.de/*", "*://*.ssh101.com/*", "*://*.watchstadium.com/*", "*://*.steamcommunity.com/*", "*://*.steam.tv/*", "*://*.streamable.com/*", "*://*.ott.streann.com/*", "*://*.centroecuador.ec/*", "*://*.columnaestilos.com/*", "*://*.evtv.online/noticias-de-venezuela/*", "*://*.telecuracao.com/*", "*://*.player.stv.tv/*", "*://*.svtplay.se/*", "*://*.srf.ch/*", "*://*.rsi.ch/*", "*://*.telefe.com/*", "*://*.tf1.fr/*", "*://*.lci.fr/*", "*://*.player.theplatform.com/*", "*://*.trovo.live/*", "*://*.atv.com.tr/*", "*://*.a2tv.com.tr/*", "*://*.ahaber.com.tr/*", "*://*.anews.com.tr/*", "*://*.aspor.com.tr/*", "*://*.atvavrupa.tv/*", "*://*.minikacocuk.com.tr/*", "*://*.minikago.com.tr/*", "*://*.sabah.com.tr/*", "*://*.tv360.com.tr/*", "*://*.ccma.cat/*", "*://*.tv4play.se/*", "*://*.fotbollskanalen.se/*", "*://*.tv5monde.com/*", "*://*.tivi5mondeplus.com/*", "*://*.tv8.com.tr/*", "*://*.tv999.bg/*", "*://*.player.tvibo.com/*", "*://*.tviplayer.iol.pt/*", "*://*.tvpstream.vod.tvp.pl/*", "*://*.tvr.by/*", "*://*.tvrplus.ro/*", "*://*.tvtoya.pl/*", "*://*.twitcasting.tv/*", "*://*.twitch.tv/*", "*://*.useetv.com/*", "*://*.ustream.tv/*", "*://*.video.ibm.com/*", "*://*.ustvnow.com/*", "*://*.vidio.com/*", "*://*.vimeo.com/*", "*://*.thvli.vn/*", "*://*.vk.com/*", "*://*.vlive.tv/*", "*://*.vtvgo.vn/*", "*://*.wasd.tv/*", "*://*.web.tv/*", "*://*.welt.de/*", "*://*.network.wwe.com/*", "*://*.youtube.com/*", "*://*.youtu.be/*", "*://*.yupptv.com/*", "*://*.zattoo.com/*", "*://*.iptv.glattvision.ch/*", "*://*.www.saktv.ch/*", "*://*.www.vtxtv.ch/*", "*://*.mobiltv.quickline.com/*", "*://*.www.quantum-tv.com/*", "*://*.tvonline.ewe.de/*", "*://*.nettv.netcologne.de/*", "*://*.tvplus.m-net.de/*", "*://*.player.waly.tv/*", "*://*.www.1und1.tv/*", "*://*.www.netplus.tv/*", "*://*.www.bbv-tv.net/*", "*://*.www.meinewelt.cc/*", "*://*.zdf.de/*", "*://*.zeenews.india.com/*", "*://*.zengatv.com/*", "*://*.zhanqi.tv/*"];

browser.menus.create({id: "streamlink-handoff", title: "Livestream", contexts: ["link"], targetUrlPatterns: streamlinkPluginUrls});
browser.menus.create({id: "streamlink-handoff-vod", title: "VOD (Passthrough)", contexts: ["link"], targetUrlPatterns: streamlinkPluginUrls});

let copyMenu = browser.menus.create({title: "Copy Command", contexts: ["link"], targetUrlPatterns: streamlinkPluginUrls});
browser.menus.create({id: "streamlink-handoff-copy", title: "Livestream", contexts: ["link"], targetUrlPatterns: streamlinkPluginUrls, parentId: copyMenu});
browser.menus.create({id: "streamlink-handoff-vod-copy", title: "VOD (Passthrough)", contexts: ["link"], targetUrlPatterns: streamlinkPluginUrls, parentId: copyMenu});

const nativeMessagingHostName = "streamlink_handoff_host";

browser.menus.onClicked.addListener(info =>
{
  browser.storage.local.get()
  .then(storageValues =>
  {
    let linkUrl = info.linkUrl;
    if (storageValues.player) {var player = "--player=" + storageValues.player};
    let quality = storageValues.quality || "best";
    let otherArgs = storageValues.otherArgs;

    let streamlinkArguments = [player, otherArgs, linkUrl, quality].join(" ").trim();
    let streamlinkArgumentsVod = ["--player-passthrough=hls,http", streamlinkArguments].join(" ");

    switch (info.menuItemId)
    {
      case "streamlink-handoff":
        browser.runtime.sendNativeMessage(nativeMessagingHostName, streamlinkArguments);
        break;
      case "streamlink-handoff-vod":
        browser.runtime.sendNativeMessage(nativeMessagingHostName, streamlinkArgumentsVod);
        break;
      case "streamlink-handoff-copy":
        navigator.clipboard.writeText("streamlink " + streamlinkArguments);
        break;
      case "streamlink-handoff-vod-copy":
        navigator.clipboard.writeText("streamlink " + streamlinkArgumentsVod);
        break;
    }
  });
});