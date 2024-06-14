# Tauri + React + Typescript

This template should help get you started developing with Tauri, React and Typescript in Vite.

## 教材
[この記事](https://zenn.dev/kumassy/books/6e518fe09a86b2)

## 注意
1. `invoke()`メソッドはTauri APIであるから、ブラウザからではなく、アプリで確認すること。
2. `command`群は`src-tauri\src\lib.rs`に実装すること（？）
3. `Tauri API`からimportするメソッドについては[公式DOC](https://v2.tauri.app/reference/javascript/api/)をちゃんと読むこと
（v1からパスが移動されてる）
4. [Tauri V1とV2の差分](https://v2.tauri.app/start/migrate/from-tauri-1/)
5. `allowlist`の概念が消え`permission`になった
   `src-tauri\capabilities\default.json`を編集する
   `corgo.toml`への該当ライブラリの追加と`yarn add`しておくのも忘れないこと
   [参考](https://v2.tauri.app/start/migrate/from-tauri-1/#migrate-permissions)

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
