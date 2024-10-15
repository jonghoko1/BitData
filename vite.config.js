// vite.config.js
import { defineConfig } from 'vite';
import { join, resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',  // 빌드 결과물 저장 폴더
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),                                       // 메인 페이지
        notice: resolve(__dirname, 'notice.html'),                                    // 공지 페이지
        login: resolve(__dirname, 'src/pages/main/login/login.html'),                 // 로그인 페이지
        join: resolve(__dirname, 'src/pages/main/join/join.html'),                    // 회원가입 페이지
        onboarding: resolve(__dirname, 'src/pages/main/onboarding/onboarding.html'),  // 회원가입 페이지
        collect: resolve(__dirname, 'src/pages/main/collect/collect.html'),           // 데이터 수집 페이지
        history: resolve(__dirname, 'src/pages/service/history/history.html'),        // 거래내역 페이지
        dashboard: resolve(__dirname, 'src/pages/service/dashboard/dashboard.html'),  // 대시보드 페이지
        settings: resolve(__dirname, 'src/pages/service/settings/settings.html'),     // 설정 페이지
      }
    }
  }
});
