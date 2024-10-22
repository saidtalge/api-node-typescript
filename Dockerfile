FROM node:18-alpine

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npx", "ts-node-dev", "src/index.ts"]