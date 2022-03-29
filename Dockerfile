FROM node:16-alpine

WORKDIR /srv/api

COPY . .

RUN npm i
RUN npm run package

EXPOSE 8080

ENTRYPOINT [ "npm", "start" ]
