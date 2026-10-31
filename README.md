# Reactポケモン図鑑

このリポジトリは、一覧・詳細・画面遷移の動作や実装を確認するための完成見本です。授業では[ポケモン図鑑の教材サイト](https://react-pokemon-zukan-doc.vercel.app/)に従い、自分のGitHubリポジトリでアプリを制作します。

これから授業の制作を始める場合は、[GitHubリポジトリの作成](https://react-pokemon-zukan-doc.vercel.app/docs/section-04-github-repository)と[Viteプロジェクトのセットアップ](https://react-pokemon-zukan-doc.vercel.app/docs/section-05-vite-project-setup)へ進んでください。このREADMEのクローン手順は、完成見本を手元で動かして調べる場合に使います。

## 授業教材との違い

授業教材と完成見本では、一部の設定が異なります。自分の制作途中のアプリへ設定ファイルを丸ごとコピーせず、授業教材の該当手順に合わせてください。

| 項目 | 授業教材 | この完成見本 |
| --- | --- | --- |
| Node.jsとパッケージ管理 | Node.js 24系とnpmを使います。 | 同じくNode.js 24系とnpmを使います。自動検証と公開用のワークフローも24系です。 |
| Tailwind CSS | バージョン4と`@tailwindcss/vite`を使います。 | バージョン3とPostCSSを使い、`tailwind.config.js`と`postcss.config.js`で設定します。 |
| React・Viteの設定 | 自分のViteプロジェクトを作成したときの`package.json`と設定を使います。 | React 18・Vite 5の構成を維持しています。教材へ設定ファイルを移すためのテンプレートではありません。 |
| クエリキー | 配列を定義し、`apiQueryKeys.pokemon.list`や`apiQueryKeys.pokemon.detail(id)`を`queryKey`へ渡します。 | `query-key-factory`を使い、`apiQueryKeys.pokemon.list().queryKey`や`apiQueryKeys.pokemon.detail(id).queryKey`を渡します。 |
| GitHub Pagesでの画面遷移 | 公開手順でHashRouterへ切り替え、`/#/pokemon/1`のようなURLを使います。 | BrowserRouterを使い、`/pokemon/1`のようなURLを扱います。直接アクセス時は`public/404.html`と`index.html`で経路を復元します。 |
| 参照するコード | 手順に沿って必要な部分を順番に実装します。 | 一覧・詳細・データ取得などが実装済みです。ファイルの役割や処理のつながりを調べるために参照します。 |

[公開手順](https://react-pokemon-zukan-doc.vercel.app/docs/section-14-github-pages-deploy)で案内するHashRouterと、この完成見本の404対応は、同じ設定ではありません。完成見本では両方の方式を重ねず、既存のBrowserRouterと404対応を維持しています。

## コードを読む順番

まず`src/components/PokemonCard.tsx`で、Propsの`pokemon`が名前の表示と詳細へのリンクに使われることを確認します。次に`src/pages/PokemonList.tsx`の`queryFn`から`src/api/pokemonWithJapaneseName.ts`へ進み、取得結果が`data.pages`を通ってカードへ届く流れを追います。詳細は`src/pages/PokemonDetail.tsx`のURLのIDから、`src/api/pokemonDetail.ts`の返り値と画面表示を対応させます。

再試行、前後移動の索引、スケルトン、タイプラベルの文字色計算は、動作を支える補助処理です。初めて読むときは、それぞれの目的と入出力を確認できれば十分です。計算式やすべての条件分岐を理解してから授業を進める必要はありません。

自分の制作に取り入れるときは、[API](https://react-pokemon-zukan-doc.vercel.app/docs/section-09-pokeapi-usage) → [Queryの設定](https://react-pokemon-zukan-doc.vercel.app/docs/section-10-tanstack-query) → [一覧](https://react-pokemon-zukan-doc.vercel.app/docs/section-11-pokemon-list-screen) → [詳細](https://react-pokemon-zukan-doc.vercel.app/docs/section-12-pokemon-detail-screen)の作業順を使います。各章に新規作成・追記・置換の場所があります。クエリキーは定義と呼び出しが組なので、教材の定義と見本の`.queryKey`呼び出しを混ぜないようにします。

## 実際のReactアプリ

https://wangchangdog.github.io/react-pokemon-zukan/

## 概要

**Reactポケモン図鑑**は、ReactとTypeScriptを使用して開発されたポケモン図鑑アプリケーションです。本アプリは[PokeAPI](https://pokeapi.co/docs/v2)を利用してポケモンのデータを取得し、ユーザーがポケモンを一覧表示、詳細閲覧ができる機能を提供します。レスポンシブデザインを採用し、モバイルファーストで設計されています。

## 目次

- [Reactポケモン図鑑](#reactポケモン図鑑)
  - [概要](#概要)
  - [授業教材との違い](#授業教材との違い)
  - [コードを読む順番](#コードを読む順番)
  - [目次](#目次)
  - [特徴](#特徴)
  - [技術スタック](#技術スタック)
  - [デモ](#デモ)
  - [インストール方法](#インストール方法)
    - [前提条件](#前提条件)
    - [手順](#手順)
  - [使用方法](#使用方法)
  - [プロジェクト構成](#プロジェクト構成)
  - [貢献方法](#貢献方法)
  - [お問い合わせ](#お問い合わせ)

## 特徴

- **ポケモン一覧表示**: ポケモンの図鑑番号と日本語名をカード形式で一覧表示。
- **詳細画面**: 選択したポケモンの詳細情報（種族値、説明文など）を閲覧可能。
- **レスポンシブデザイン**: モバイルデバイスからデスクトップまで、様々な画面サイズに対応。
- **パフォーマンス最適化**: TanStack Queryを使用した効率的なデータフェッチングとキャッシング。

## 技術スタック

- **フロントエンド**:
  - [React](https://reactjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Vite](https://vitejs.dev/)
  - [React Router](https://reactrouter.com/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [TanStack Query](https://tanstack.com/query/latest)
  - [query-key-factory](https://github.com/lukemorales/query-key-factory)

- **API**:
  - [PokeAPI](https://pokeapi.co/docs/v2)

## デモ

[ポケモン図鑑デモサイト](https://wangchangdog.github.io/react-pokemon-zukan/)

<img width="301" alt="スクリーンショット 2024-10-05 1 18 37" src="https://github.com/user-attachments/assets/4325c964-2a5c-439e-8fdf-4352fafc1e1c">
<img width="301" alt="スクリーンショット 2024-10-05 1 19 10" src="https://github.com/user-attachments/assets/e882772f-31a0-41bf-bd31-c8339efe1b88">


## インストール方法

以下は完成見本を手元で動かすための手順です。授業用の自分のリポジトリで制作する場合は、冒頭の教材リンクから進めます。

### 前提条件

- **Node.js**: バージョン24系（24.x）
- **Git**: バージョン2以上

### 手順

1. **リポジトリのクローン**

   ````bash
   git clone https://github.com/wangchangdog/react-pokemon-zukan.git
   cd react-pokemon-zukan
   ````

2. **依存関係のインストール**

   ````bash
   npm install
   ````

3. **開発サーバーの起動**

   ````bash
   npm run dev
   ````

4. **ブラウザで確認**

   ターミナルに表示された`Local`のURLをブラウザで開きます。通常は`http://localhost:5173`です。別のポート番号が表示された場合は、その番号を使います。

次回からは`react-pokemon-zukan`フォルダで`npm run dev`を実行します。すでにクローンしたリポジトリやViteプロジェクトを作り直す必要はありません。停止するときは、開発サーバーを実行しているターミナルでCtrl+Cを押します。

### 公開用ビルドの確認

`npm run build`が成功したら、`npm run preview`を実行し、表示されたURLを開きます。公開先と同じ`/react-pokemon-zukan/`の配下で、一覧と詳細への移動、詳細URLの再読み込みを確認します。GitHub Pagesにおける404ページからの経路復元は、公開後にも確認します。

## 使用方法

1. **ポケモン一覧の閲覧**

   アプリケーションを開くと、ポケモンの一覧が表示されます。各ポケモンカードには図鑑番号と日本語名が表示されています。画面下までスクロールすると続きを読み込みます。

2. **詳細情報の確認**

   任意のポケモンカードをクリックすると、そのポケモンの詳細情報ページに移動します。詳細ページでは種族値や説明文など、より詳しい情報が確認できます。

3. **前後のポケモンへ移動**

   詳細ページ下部の「前へ」「次へ」リンクから、一覧にある前後のポケモンへ移動できます。先頭では「前へ」、末尾では「次へ」を表示しません。別フォルムなどでAPIの番号に間隔があっても、実在する項目へ移動します。

4. **読み込みに失敗した場合**

   接続を確認して「再読み込み」を押します。続きを取得できなかった場合も、読み込み済みの一覧は残り、「続きを再読み込み」からやり直せます。不正なURLや存在しない番号では、表示されるリンクから一覧へ戻れます。

## プロジェクト構成

````
react-pokemon-zukan/
├── public/
│   ├── 404.html
│   └── favicon.svg
├── src/
│   ├── api/
│   │   ├── common.type.ts
│   │   ├── pokemon.ts
│   │   ├── pokemon.type.ts
│   │   ├── pokemonDetail.ts
│   │   ├── pokemonSpecies.ts
│   │   └── pokemonWithJapaneseName.ts
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── PokemonCard.tsx
│   │   └── PokemonTypeLabel.tsx
│   ├── pages/
│   │   ├── PokemonList.tsx
│   │   └── PokemonDetail.tsx
│   ├── App.tsx
│   ├── config.ts
│   ├── queryKeys.ts
│   ├── main.tsx
│   └── index.css
├── .gitignore
├── package.json
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── README.md
````

## 貢献方法

1. **フォークする**

   リポジトリをフォークしてください。

2. **ブランチを作成する**

   ````bash
   git checkout -b feature/新機能
   ````

3. **変更をコミットする**

   ````bash
   git commit -m "新機能の追加"
   ````

4. **プッシュする**

   ````bash
   git push origin feature/新機能
   ````

5. **プルリクエストを作成する**

   GitHub上でプルリクエストを作成してください。

## お問い合わせ

質問やフィードバックがございましたら、[issues](https://github.com/wangchangdog/react-pokemon-zukan/issues)にてご連絡ください。
