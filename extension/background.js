const streamlinkUrls = ["*://*.abema.tv/*", "*://*.adultswim.com/*", "*://*.play.afreecatv.com/*", "*://*.antena7.com.do/*", "*://*.atv.pe/*", "*://*.c9n.com.py/*", "*://*.canal10.com.ni/*", "*://*.canal12.com.sv/*", "*://*.chapintv.com/*", "*://*.elnueve.com.ar/*", "*://*.repretel.com/*", "*://*.rts.com.ec/*", "*://*.snt.com.py/*", "*://*.tvc.com.ec/*", "*://*.vtv.com.hn/*", "*://*.17app.co/*", "*://*.daserste.de/*", "*://*.ardmediathek.de/*", "*://*.arte.tv/*", "*://*.atresplayer.com/*", "*://*.bbc.co.uk/iplayer/*", "*://*.bfmtv.com/*", "*://*.01net.com/*", "*://*.live.bigo.tv/*", "*://*.bigoweb.co/*", "*://*.live.bilibili.com/*", "*://*.bloomberg.com/*", "*://*.booyah.live/*", "*://*.btvplus.bg/*", "*://*.cbsnews.com/*", "*://*.armymedia.bg/*", "*://*.bgonair.bg/*", "*://*.bloombergtv.bg/*", "*://*.bnt.bg/*", "*://*.live.bstv.bg/*", "*://*.i.cdn.bg/*", "*://*.nova.bg/*", "*://*.mu-vi.tv/*", "*://*.ceskatelevize.cz/*", "*://*.showtv.com.tr/*", "*://*.haberturk.com/*", "*://*.showmax.com.tr/*", "*://*.showturk.com.tr/*", "*://*.bloomberght.com/*", "*://*.clubbingtv.com/*", "*://*.cnews.fr/*", "*://*.crunchyroll.com/*", "*://*.dailymotion.com/*", "*://*.delfi.lt/*", "*://*.delfi.ee/*", "*://*.delfi.lv/*", "*://*.dw.com/*", "*://*.dlive.tv/*", "*://*.cnnturk.com/*", "*://*.dreamturk.com.tr/*", "*://*.dreamtv.com.tr/*", "*://*.kanald.com.tr/*", "*://*.teve2.com.tr/*", "*://*.eurostartv.com.tr/*", "*://*.kralmuzik.com.tr/*", "*://*.ntv.com.tr/*", "*://*.startv.com.tr/*", "*://*.dr.dk/*", "*://*.earthcam.com/*", "*://*.egame.qq.com/*", "*://*.eltrecetv.com.ar/*", "*://*.euronews.com/*", "*://*.facebook.com/*", "*://*.filmon.com/*", "*://*.fox.com.tr/*", "*://*.funimation.com/*", "*://*.funimationnow.uk/*", "*://*.galatasaray.com/*", "*://*.garena.live/*", "*://*.goltelevision.com/*", "*://*.goodgame.ru/*", "*://*.docs.google.com/*", "*://*.drive.google.com/*", "*://*.replay.gulli.fr/*", "*://*.huajiao.com/*", "*://*.huya.com/*", "*://*.idf1.fr/*", "*://*.player.invintus.com/*", "*://*.fanxing.kugou.com/*", "*://*.live.line.me/*", "*://*.livestream.com/*", "*://*.lrt.lt/*", "*://*.ltv.lsm.lv/*", "*://*.mediaklikk.hu/*", "*://*.m4sport.hu/*", "*://*.mediavitrina.ru/*", "*://*.mildom.com/*", "*://*.mitele.es/*", "*://*.mjunoon.tv/*", "*://*.play.mrt.com.mk/*", "*://*.13tv.co.il/*", "*://*.nbc.com/*", "*://*.nbcnews.com/*", "*://*.nbcsports.com/*", "*://*.nhk.or.jp/nhkworld/*", "*://*.live.nicovideo.jp/*", "*://*.nimo.tv/*", "*://*.nos.nl/*", "*://*.news.now.com/*", "*://*.tv.nrk.no/*", "*://*.radio.nrk.no/*", "*://*.ntv.ru/*", "*://*.ok.ru/*", "*://*.olympicchannel.com/*", "*://*.olympics.com/*", "*://*.1plus1.video/*", "*://*.1tv.ru/*", "*://*.openrec.tv/*", "*://*.tvthek.orf.at/*", "*://*.pandalive.co.kr/*", "*://*.picarto.tv/*", "*://*.piczel.tv/*", "*://*.sketch.pixiv.net/*", "*://*.pluto.tv/*", "*://*.france.tv/*", "*://*.francetvinfo.fr/*", "*://*.live.qq.com/*", "*://*.radiko.jp/*", "*://*.radio.net/*", "*://*.radio.at/*", "*://*.radio.de/*", "*://*.radio.dk/*", "*://*.radio.es/*", "*://*.radio.fr/*", "*://*.radio.it/*", "*://*.radio.pl/*", "*://*.radio.pt/*", "*://*.radio.se/*", "*://*.raiplay.it/*", "*://*.reuters.com/*", "*://*.reuters.tv/*", "*://*.rotana.net/*", "*://*.rtbf.be/auvio/*", "*://*.rtbfradioplayer.be/*", "*://*.rtp.pt/play/*", "*://*.rtve.es/*", "*://*.rtvs.sk/*", "*://*.ruv.is/*", "*://*.play.sbs.co.kr/*", "*://*.schoolism.com/*", "*://*.senate.gov/*", "*://*.showroom-live.com/*", "*://*.sportal.bg/*", "*://*.sportschau.de/*", "*://*.ssh101.com/*", "*://*.watchstadium.com/*", "*://*.steamcommunity.com/*", "*://*.streamable.com/*", "*://*.ott.streann.com/*", "*://*.player.stv.tv/*", "*://*.svtplay.se/*", "*://*.oppetarkiv.se/*", "*://*.srf.ch/*", "*://*.rsi.ch/*", "*://*.teamliquid.net/*", "*://*.tl.net/*", "*://*.telefe.com/*", "*://*.tf1.fr/*", "*://*.lci.fr/*", "*://*.tlctv.com.tr/*", "*://*.atv.com.tr/*", "*://*.a2tv.com.tr/*", "*://*.ahaber.com.tr/*", "*://*.anews.com.tr/*", "*://*.aspor.com.tr/*", "*://*.atvavrupa.tv/*", "*://*.minikacocuk.com.tr/*", "*://*.minikago.com.tr/*", "*://*.sabah.com.tr/*", "*://*.ccma.cat/*", "*://*.tv4play.se/*", "*://*.fotbollskanalen.se/*", "*://*.tv5monde.com/*", "*://*.tivi5mondeplus.com/*", "*://*.tv8.com.tr/*", "*://*.tv360.com.tr/*", "*://*.tv999.bg/*", "*://*.player.tvibo.com/*", "*://*.tviplayer.iol.pt/*", "*://*.tvpstream.vod.tvp.pl/*", "*://*.tvr.by/*", "*://*.tvrplus.ro/*", "*://*.tvtoya.pl/*", "*://*.twitcasting.tv/*", "*://*.twitch.tv/*", "*://*.ustream.tv/*", "*://*.video.ibm.com/*", "*://*.ustvnow.com/*", "*://*.vidio.com/*", "*://*.vimeo.com/*", "*://*.thvli.vn/*", "*://*.vk.com/*", "*://*.vlive.tv/*", "*://*.vrt.be/vrtnu/*", "*://*.vtvgo.vn/*", "*://*.wasd.tv/*", "*://*.web.tv/*", "*://*.welt.de/*", "*://*.network.wwe.com/*", "*://*.youtube.com/*", "*://*.youtu.be/*", "*://*.yupptv.com/*", "*://*.zattoo.com/*", "*://*.zdf.de/*", "*://*.zeenews.india.com/*", "*://*.zengatv.com/*", "*://*.zhanqi.tv/*", "*://*.redbolivision.tv.bo/*", "*://*.mediathek.daserste.de/*", "*://*.players.brightcove.net/*", "*://*.player.theplatform.com/*"];

browser.menus.create
(
  {
    id: "streamlink-handoff",
    title: "Livestream",
    contexts: ["link"],
    targetUrlPatterns: streamlinkUrls
  }
);

browser.menus.create
(
  {
    id: "streamlink-handoff-hls",
    title: "VOD (HLS Passthrough)",
    contexts: ["link"],
    targetUrlPatterns: streamlinkUrls
  }
);

browser.menus.onClicked.addListener(info =>
  {
    browser.storage.local.get()
      .then(storageValues =>
      {
        let linkUrl = info.linkUrl;
        if (storageValues.player) {var player = "--player=" + storageValues.player};
        let quality = storageValues.quality || "best";
        let playerArgs = storageValues.playerArgs;

        let streamlinkArguments = [player, playerArgs, linkUrl, quality].join(" ").trim();

        if (info.menuItemId == "streamlink-handoff")
        {
          browser.runtime.sendNativeMessage("streamlink_handoff_host", streamlinkArguments);
        }

        if (info.menuItemId == "streamlink-handoff-hls")
        {
          streamlinkArguments = ["--player-passthrough=hls", streamlinkArguments].join(" ");
          browser.runtime.sendNativeMessage("streamlink_handoff_host", streamlinkArguments);
        }
      });
  }
);