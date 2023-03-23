# syntax=docker/dockerfile:1
FROM node:18-alpine as base

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

FROM base as prod
ENV SERVER_PORT=8000
ENV NODE_ENV=production
RUN npm ci --production
COPY . .
CMD [ "node", "server.js" ]