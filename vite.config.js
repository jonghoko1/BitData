import { defineConfig } from 'vite';
import { resolve } from 'path';

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
        faq: resolve(__dirname, 'src/pages/service/faq/faq.html'),                    // 자주 묻는 질문 페이지
        exit: resolve(__dirname, 'src/pages/service/exit/exit.html'),                 // 탈퇴 페이지
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'styles/[name].[ext]';               // CSS 파일은 styles 폴더에 저장
          }
          return 'assets/[name].[ext]';                 // 기타 자산 파일은 assets 폴더에 저장
        },
        chunkFileNames: 'scripts/[name].js',             // JS 파일은 scripts 폴더에 저장
      }
    }
  }
});
