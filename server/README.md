# Blog Server

Node.js + Express.js バックエンドサーバー

## セットアップ手順

1. 依存関係のインストール:

```bash
npm install express cors dotenv helmet morgan
npm install -D nodemon
```

2. 環境変数の設定:

```bash
cp env.example .env
# .envファイルを編集してデータベース接続情報を設定
```

3. 開発サーバーの起動:

```bash
npm run dev
```

## プロジェクト構造

```
server/
├── src/
│   ├── server.js          # メインサーバーファイル
│   ├── routes/            # APIルート
│   ├── controllers/       # コントローラー
│   └── middleware/        # ミドルウェア
├── package.json
└── env.example
```
