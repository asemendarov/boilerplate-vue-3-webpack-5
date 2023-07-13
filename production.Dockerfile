FROM node:18.14.1-alpine

ENV IS_DOCKER=1

COPY . /app
WORKDIR /app

RUN npm ci && \
    npm run build

FROM nginx:stable-alpine as prod

COPY --from=0 /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
