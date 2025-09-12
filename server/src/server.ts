import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

// 環境変数の読み込み
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// ミドルウェアの設定
app.use(morgan('combined')); // ログ出力
app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
  })
);
app.use(express.json()); // JSONパース
app.use(express.urlencoded({ extended: true })); // URLエンコードパース

// 基本的なルート
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Blog API Server is running!',
    version: '1.0.0',
    endpoints: {
      posts: '/api/posts',
      comments: '/api/comments',
    },
  });
});

// ヘルスチェック
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// 404ハンドラー
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Route not found' });
});

// エラーハンドラー
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// サーバー起動
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📝 Blog API available at http://localhost:${PORT}`);
  console.log(`🏥 Health check at http://localhost:${PORT}/health`);
});
