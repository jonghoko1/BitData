module.exports = {
    apps: [
      {
        name: "bitdata",         // 애플리케이션 이름
        script: "./app.js",      // 실행할 스크립트 파일
        instances: 1,            // 인스턴스 개수 (0이면 클러스터 모드로 CPU 코어 수만큼 생성)
        exec_mode: "fork",       // 실행 모드 (fork 또는 cluster)
        watch: true,             // 파일 변경 감지 후 자동 재시작
        env: {
          NODE_ENV: "development",  // 개발 환경 설정
          PORT: 3000,
        },
        env_production: {
          NODE_ENV: "production",   // 프로덕션 환경 설정
          PORT: 8000,
        }
      }
    ]
  };