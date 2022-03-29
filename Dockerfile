FROM node:16-alpine

LABEL org.opencontainers.image.source="https://github.com/4lch4/Floo-API"

WORKDIR /srv/api

COPY . .

RUN npm i
RUN npm run package

EXPOSE 8080

ENTRYPOINT [ "npm", "start" ]
