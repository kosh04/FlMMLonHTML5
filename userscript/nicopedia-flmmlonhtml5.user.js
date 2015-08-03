// ==UserScript==
// @name        Nicopedia-FlMMLonHTML5
// @namespace   https://github.com/kosh04/FlMMLonHTML5
// @version     0.20150804
// @description ニコニコ大百科のピコカキコプレーヤーをFlMMLonHTML5に置き換える (デバッグ用)
// @updateURL   https://github.com/kosh04/FlMMLonHTML5/raw/feature-userscript/userscript/nicopedia-flmmlonhtml5.user.js
// @grant       GM_getResourceText
// @match       http://dic.nicovideo.jp/*
// @resource    flmmlworker.js  https://rawgit.com/kosh04/FlMMLonHTML5/feature-userscript/project/flmmlworker-raw.js
// @author      kosh (mono)
// ==/UserScript==

"use strict";

function loadScript(src) {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = src;
    document.head.appendChild(s);
}

loadScript("https://rawgit.com/kosh04/FlMMLonHTML5/feature-userscript/project/flmmlonhtml5-raw.js");
loadScript("https://rawgit.com/kosh04/FlMMLonHTML5/feature-userscript/project/flmmlplayer-raw.js");

var code = GM_getResourceText("flmmlworker.js");
var blob = new Blob([code], { type: "text/javascript" });
var workerURL = URL.createObjectURL(blob);

var pikoList = document.querySelectorAll("[id^=piko]");

[].forEach.call(pikoList, function(piko) {
    if (!piko.id.match(/^piko\d+/)) return;
    var mml_id = piko.id.substring(4); // "piko777" -> "777"
    var code = "new FlMMLPlayer(%s).show(this);".replace("%s", JSON.stringify({
      mmlURL: "/mml/" + mml_id,
      height: "1.65em",
      underground: true,
      workerURL: workerURL
    }));
    var imgPikoplayer = piko.children.item(0);
    imgPikoplayer.setAttribute("onclick", code);
});

