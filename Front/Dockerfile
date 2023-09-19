FROM node:16 AS builder

RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY tsconfig.json ./
COPY public public
COPY src src
CMD ["npm", "start"]