// vite.config.js
import { defineConfig } from 'vite';
import { join, resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',  // 빌드 결과물 저장 폴더
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),                         // 메인 페이지
        notice: resolve(__dirname, 'notice.html'),                      // 공지 페이지
        login: resolve(__dirname, 'src/pages/main/login/login.html'),   // 로그인 페이지
        join: resolve(__dirname, 'src/pages/main/join/join.html'),      // 회원가입 페이지
      }
    }
  }
});
