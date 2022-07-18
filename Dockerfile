FROM node:alpine3.16 as builder

WORKDIR /app

COPY package*.json ./

RUN npm i -g @nestjs/cli node-gyp
RUN npm install

COPY . .

RUN npm run prisma:generate
RUN npm run build

CMD ["npm", "run", "start:dev"]