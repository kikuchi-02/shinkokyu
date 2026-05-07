const path = require('path');
const fs = require('fs');

// アイコンが存在する場合のみ参照する(用意するまでは未指定でビルドできるように)
const macIconPath = path.resolve(__dirname, 'assets', 'icon.icns');
const hasMacIcon = fs.existsSync(macIconPath);

module.exports = {
  packagerConfig: {
    // .appバンドル内の表示名(Finderやメニューバーに出る名前)
    name: '深呼吸 4-7-8',
    // .app内部の実行バイナリ名はASCIIにしておく
    executableName: 'breathe-478',
    appBundleId: 'com.tsubasa.breathe-478',
    appCategoryType: 'public.app-category.healthcare-fitness',
    asar: true,
    // assets/icon.icnsを置くと自動でアイコン化される
    ...(hasMacIcon ? { icon: path.resolve(__dirname, 'assets', 'icon') } : {}),
    // 配布物に含めないファイル
    ignore: [
      /^\/\.git($|\/)/,
      /^\/\.gitignore$/,
      /^\/\.vscode($|\/)/,
      /^\/out($|\/)/,
      /^\/assets\/README\.md$/,
      /^\/README\.md$/
    ]
  },
  rebuildConfig: {},
  makers: [
    {
      // Mac用ZIP(.appを同梱)。展開して/Applicationsへドラッグで使える
      name: '@electron-forge/maker-zip',
      platforms: ['darwin']
    }
  ],
  plugins: []
};
