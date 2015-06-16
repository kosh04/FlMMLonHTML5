## nicopedia-flmmlonhtml5.user.js

ニコニコ大百科のピコカキコ再生 (シーケンサ本体とプレイヤーUI) を
FlMMLonHTML5 に置き換えて動作させるユーザスクリプトです。

ご利用は自己責任でお願いします。

## 動作環境

- Chrome + Tempermonkey
- Firefox + Greasemonkey
- Opera + Violetmonkey

## インストール

Greasemonkeyをインストールしたブラウザで、[nicopedia-flmmlonhtml5.user.js](https://github.com/kosh04/FlMMLonHTML5/raw/feature-userscript/userscript/nicopedia-flmmlonhtml5.user.js) をクリックしてスクリプトをインストールしてください。

使わなくなったらスクリプトを無効化するか、削除してください。

## 仕様

- ピコカキコを同時に再生できる数は最大６つ (Chrome の仕様？)
  - `Uncaught NotSupportedError: Failed to construct 'AudioContext': The number of hardware contexts provided (6) is greater than or equal to the maximum bound (6).`
