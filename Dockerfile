FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install --force

EXPOSE 5173

CMD npm start