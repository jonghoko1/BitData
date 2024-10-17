import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// 환경 변수에서 포트를 읽거나 기본값으로 3000을 사용
const PORT = process.env.PORT || 3000;

// 현재 파일의 디렉토리 경로를 가져옵니다.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 'dist' 폴더 내의 정적 파일들을 서빙
app.use(express.static(path.join(__dirname, 'dist')));

// 경로에 따라 동적으로 HTML 파일 서빙
app.get('/*', (req, res) => {
  const fileName = req.params[0] ? req.params[0] : 'index'; // 기본 경로는 index.html로 설정
  res.sendFile(path.join(__dirname, 'dist', `${fileName}.html`));
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
