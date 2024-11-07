# 빌드 스테이지
FROM node:22-alpine AS builder

WORKDIR /usr/src/app

# 의존성 설치
COPY package*.json ./
RUN npm ci

# 소스 코드 복사 및 빌드
COPY . .
RUN npm run build

# 실행 스테이지
FROM node:22-alpine

WORKDIR /usr/src/app

# PM2 설치
RUN npm install -g pm2

# 모든 파일 복사
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/app.js ./
COPY --from=builder /usr/src/app/ecosystem.config.cjs ./
COPY --from=builder /usr/src/app/package*.json ./

# 의존성 설치 (배포용 모듈만 설치)
RUN npm ci --only=production

# pm2-runtime으로 실행 
CMD ["pm2-runtime", "start", "ecosystem.config.cjs", "--env", "production"]

# 애플리케이션 실행
RUN npm run start