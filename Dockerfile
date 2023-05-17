#FROM nginx:1.22.0
#
#COPY build /etc/nginx/html
#COPY conf /etc/nginx

FROM node:18-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi


FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]


## 基础镜像
#FROM node:14.17.0-alpine3.13
#
## 工作目录
#WORKDIR /app
#
## 将 package.json 和 package-lock.json 复制到容器中
#COPY package*.json ./
#
## 安装依赖
#RUN npm install
#
## 将项目代码复制到容器中
#COPY . .
#
## 构建应用
##RUN npm run build
#
## 暴露端口
#EXPOSE 3000
#
## 运行应用
#CMD ["npm", "start"]

# 1. Install dependencies only when needed
#FROM node:14-alpine AS deps
## Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
#RUN apk add --no-cache libc6-compat
#
#WORKDIR /app
#
## Install dependencies based on the preferred package manager
#COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
#RUN \
#  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
#  elif [ -f package-lock.json ]; then npm ci; \
#  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
#  else echo "Lockfile not found." && exit 1; \
#  fi
#
## 2. Rebuild the source code only when needed
#FROM node:14-alpine AS builder
#WORKDIR /app
#COPY --from=deps /app/node_modules ./node_modules
#COPY . .
## This will do the trick, use the corresponding env file for each environment.
#COPY .env.development .env.production
#RUN yarn build
#
## 3. Production image, copy all the files and run next
#FROM node:14-alpine AS runner
#WORKDIR /app
#
#ENV NODE_ENV=production
#
#RUN addgroup -g 1001 -S nodejs
#RUN adduser -S nextjs -u 1001
#
#COPY --from=builder /app/public ./public
#
## Automatically leverage output traces to reduce image size
## https://nextjs.org/docs/advanced-features/output-file-tracing
#COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
#COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
#
#
#USER nextjs
#
#EXPOSE 3000
#
#ENV PORT 3000
#
#CMD ["node", "server.js"]
