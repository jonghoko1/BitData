const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 8080;

// 빌드된 파일들이 위치한 dist 폴더를 서빙
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});