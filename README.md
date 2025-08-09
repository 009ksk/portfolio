# Keisuke Kubota - Portfolio

フルスタックエンジニアのポートフォリオサイトです。

## 技術スタック

- **フロントエンド**: React 2年
- **言語**: JavaScript/TypeScript 3年、C# 3年、Python 3年
- **バックエンド**: Ruby on Rails 1年
- **インフラ**: AWS 4年

## 開発環境

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- ESLint

## ローカル開発

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

開発サーバーは http://localhost:3000 で起動します。

## ビルド

```bash
# 本番用ビルド
npm run build

# 静的ファイルの確認
npm run start
```

## GitHub Pages へのデプロイ

このプロジェクトは GitHub Pages でのホスティングを想定しています。

### 1. GitHub リポジトリの設定

1. GitHub で新しいリポジトリを作成
2. このプロジェクトをプッシュ

```bash
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

### 2. GitHub Pages の有効化

1. リポジトリの Settings タブに移動
2. Pages セクションで Source を "GitHub Actions" に設定

### 3. 自動デプロイ

main ブランチにプッシュすると、GitHub Actions が自動的にビルドとデプロイを実行します。

## プロジェクト構成

```
src/
├── app/
│   ├── page.tsx          # メインページ
│   └── layout.tsx        # レイアウト
├── components/
│   ├── Hero.tsx          # ヒーローセクション
│   ├── Skills.tsx        # 技術スタック
│   ├── Projects.tsx      # プロジェクト一覧
│   ├── Contact.tsx       # お問い合わせ
│   └── Navigation.tsx    # ナビゲーション
└── data/
    └── portfolio.ts      # データ定義
```

## カスタマイズ

### 技術スタックの更新

`src/data/portfolio.ts` の `skills` 配列を編集してください。

### プロジェクトの追加

`src/data/portfolio.ts` の `projects` 配列に新しいプロジェクトを追加してください。

### スタイルの変更

Tailwind CSS クラスを使用してスタイルをカスタマイズできます。主な色は以下の通りです：

- プライマリ: blue-400, purple-400
- セカンダリ: gray-300, gray-400
- 背景: slate-900, purple-900

## ライセンス

MIT License
