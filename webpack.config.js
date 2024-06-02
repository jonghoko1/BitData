const path = require('path');

module.exports = {
  entry: './src/js/main.js',  // 프로젝트의 진입 파일 경로
  output: {
    filename: 'bundle.js',  // 출력 파일명
    path: path.resolve(__dirname, 'dist')  // 출력 디렉토리
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Babel을 사용하여 ES6 코드를 ES5로 변환
        },
      },
    ],
  },
};
