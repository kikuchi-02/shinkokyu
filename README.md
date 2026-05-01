# 深呼吸 4-7-8 (macOS / Electron)

4-7-8呼吸法のタイミングを取るための、macOSで常に最前面に浮かぶ小さなElectronアプリです。

- **吸う** 4秒 → **止める** 7秒 → **吐く** 8秒
- ウィンドウは枠なし・半透明で、画面右上にfloating表示
- フルスクリーンの他アプリの上にも常時表示されます (`screen-saver`レベル)
- ウィンドウ全体をドラッグで移動できます

## セットアップ

ターミナルでこのフォルダに移動して、依存をインストールします。

```bash
cd "/Users/kikuchi/Documents/Claude/Projects/深呼吸app"
npm install
```

## 起動

```bash
npm start
```

右上に小窓が現れます。「スタート」を押すと呼吸サイクルが始まります。

## 操作

| ボタン | 動作 |
| --- | --- |
| スタート / 一時停止 / 再開 | 呼吸サイクルの開始・停止 |
| リセット | サイクル数とタイマーを初期化 |
| × (右上) | アプリを終了 |

## 配布用にビルドしたい場合

`electron-builder` などを別途追加してください。本リポジトリにはビルド設定は含めていません。

## 構成

- `package.json` — Electronの依存と起動スクリプト
- `main.js` — `BrowserWindow` 生成 (frame無し・transparent・alwaysOnTop)
- `preload.js` — レンダラから `quit` を呼ぶための安全なブリッジ
- `index.html` — 単一画面UI (4-7-8タイミング、円が拡大縮小)
