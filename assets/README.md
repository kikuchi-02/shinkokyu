# assets/

アプリのアイコンなど配布物用のリソースをここに置きます。

## アイコン

`forge.config.js` は次のファイルを自動で参照します(存在すれば)。

- `assets/icon.icns` … macOS の `.app` バンドル用アイコン

### .icns の作り方(macOS の場合)

1. 1024x1024 の PNG を用意して `assets/icon-source.png` などに置く
2. ターミナルで以下を実行(`iconutil` は macOS 標準コマンド):

```bash
mkdir icon.iconset
sips -z 16 16     icon-source.png --out icon.iconset/icon_16x16.png
sips -z 32 32     icon-source.png --out icon.iconset/icon_16x16@2x.png
sips -z 32 32     icon-source.png --out icon.iconset/icon_32x32.png
sips -z 64 64     icon-source.png --out icon.iconset/icon_32x32@2x.png
sips -z 128 128   icon-source.png --out icon.iconset/icon_128x128.png
sips -z 256 256   icon-source.png --out icon.iconset/icon_128x128@2x.png
sips -z 256 256   icon-source.png --out icon.iconset/icon_256x256.png
sips -z 512 512   icon-source.png --out icon.iconset/icon_256x256@2x.png
sips -z 512 512   icon-source.png --out icon.iconset/icon_512x512.png
cp icon-source.png icon.iconset/icon_512x512@2x.png
iconutil -c icns icon.iconset -o icon.icns
rm -rf icon.iconset
```

3. 生成された `icon.icns` を `assets/` に置けば、次回ビルドから反映されます。
