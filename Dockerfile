# Crie um dockerfile para esse projeto rode o docker-compose up -d

FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

RUN docker-compose up -d

COPY . .

EXPOSE 3000

CMD ["npm", "start"]