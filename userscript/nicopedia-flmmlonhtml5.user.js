// ==UserScript==
// @name        Nicopedia-FlMMLonHTML5
// @namespace   https://github.com/kosh04/FlMMLonHTML5
// @version     0.20150616
// @description ニコニコ大百科のピコカキコプレーヤーを試験的にFlMMLonHTML5に置き換えます
// @updateURL   https://github.com/kosh04/FlMMLonHTML5/raw/feature-userscript/userscript/nicopedia-flmmlonhtml5.user.js
// @grant       GM_getResourceText
// @match       http://dic.nicovideo.jp/*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @resource    flmmlworker.js  https://rawgit.com/kosh04/FlMMLonHTML5/feature-userscript/project/flmmlworker-raw.js
// @author      kosh (mono)
// ==/UserScript==

/*
## Before
<div id="piko777">
  <img src="/img/pikoplayer.png" onclick="HororeChuchuParero.MMLPlayer.show_player('piko777', 777)">
</div>

## After
<div id="piko777">
  <div class="pikoplayer">
    <!-- player body -->
  </div>
</div>
*/

function loadScript(src) {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = src;
    document.head.appendChild(s);
}

loadScript("https://rawgit.com/kosh04/FlMMLonHTML5/feature-userscript/project/flmmlonhtml5-raw.js");
loadScript("https://rawgit.com/kosh04/FlMMLonHTML5/feature-userscript/project/flmmlplayer-raw.js");

(function($) {
    "use strict";

    var code = GM_getResourceText("flmmlworker.js");
    var blob = new Blob([code], { type: "text/javascript" });
    var workerURL = URL.createObjectURL(blob);

    $("[id^=piko]").each(function() {
        var $piko = $(this);
        var mml_id = $piko.attr("id").substring(4); // "piko777" -> "777"
        $piko.children("img")
             .removeAttr("onclick")
             .on("click", function() {
                 var player = new FlMMLPlayer({
                     mmlURL: "/mml/" + mml_id,
                     workerURL: workerURL
                 }).show(this);
             });
    });
})(jQuery);
