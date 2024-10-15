import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

// 현재 파일의 디렉토리 경로를 가져옵니다.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 'dist' 폴더 내의 정적 파일들을 서빙
app.use(express.static(path.join(__dirname, 'dist')));

// 경로에 따라 특정 HTML 파일 서빙
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get('/notice', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'notice.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'src/pages/main/login/login.html'));
});

app.get('/join', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'src/pages/main/join/join.html'));
});

app.get('/onboarding', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'src/pages/main/onboarding/onboarding.html'));
});

app.get('/collect', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'src/pages/main/collect/collect.html'));
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'src/pages/service/dashboard/dashboard.html'));
});

app.get('/settings', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'src/pages/service/settings/settings.html'));
});

app.get('/faq', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'src/pages/service/faq/faq.html'));
});

app.get('/history', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'src/pages/service/history/history.html'));
});

app.get('/exit', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'src/pages/service/exit/exit.html'));
});

// 서버 실행
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
