# Template of TypeScript

TypeScript,Sass,ESLint,Prettier in Vite

# Require 必要要件

node v12.22.0, v14.18.1, v14.20.0, v16.17.0

# Usage 使い方

`cd vite-project`

`npm run dev`

`npm run build`

## Other その他

コードの検証と整形の為に、以下設定お願いします。

- VSCode の拡張機能の「ESLint」と「Prettier」をインストール

- Prettier をファイル保存時に走らせる以下設定をお願いします。

VSCode 設定（`cmd+,` `ctrl+,` ）にて、

1.defaultformatter を、「null」から「esbenp.prettier-vscode」に変更。
2.Format On Save に、チェックを入れる（全体適用したくないなら、「フォルダー」タブでディレクトリ選択する）。
[https://zenn.dev/k_kazukiiiiii/articles/670ebae0005872](https://zenn.dev/k_kazukiiiiii/articles/670ebae0005872)
