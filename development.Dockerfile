FROM node:18.14.1-alpine

ENV IS_DOCKER=1

COPY . /app
WORKDIR /app

RUN npm ci
ENTRYPOINT npm run serve
