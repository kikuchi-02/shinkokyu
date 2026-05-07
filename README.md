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

## 配布用にビルド (Electron Forge)

`electron-forge` を使って `.app` と配布用 `.zip` を作成できます。

```bash
# .appバンドルだけ生成 (out/深呼吸 4-7-8-darwin-*/)
npm run package

# .app + .zip まで生成 (out/make/zip/darwin/...)
npm run make
```

ビルド成果物は `out/` 配下に出力されます(gitignore済み)。
配布物のZIPを展開すると `深呼吸 4-7-8.app` が出てくるので、`/Applications` にドラッグしてください。

> DMG maker (`appdmg`) はネイティブモジュール (`fs-xattr`等) のビルドが
> Node 22+ で不安定なため除外しています。署名なし配布ならZIPで十分です。
> 署名・公証(notarization)は未設定で、配布相手のMacでは「開発元未確認」の警告が出ます。
> Apple Developer証明書がある場合は `forge.config.js` の
> `packagerConfig.osxSign` / `osxNotarize` を追加してください。

### アイコン

`assets/icon.icns` を置くと自動でアイコンとして使われます。作り方は
[`assets/README.md`](./assets/README.md) を参照してください。

## 構成

- `package.json` — Electron + Forgeの依存とスクリプト
- `forge.config.js` — Electron Forgeのビルド設定 (DMG / ZIP maker)
- `main.js` — `BrowserWindow` 生成 (frame無し・transparent・alwaysOnTop)
- `preload.js` — レンダラから `quit` を呼ぶための安全なブリッジ
- `index.html` — 単一画面UI (4-7-8タイミング、円が拡大縮小)
- `assets/` — アイコンなど配布用リソース
