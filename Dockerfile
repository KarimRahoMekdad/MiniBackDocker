FROM node:14-alpine

WORKDIR /app

COPY . .

RUN npm install

CMD ["node", "server.js"]

EXPOSE 3000