FROM node:21-alpine

WORKDIR /frontend

COPY package*.json ./

RUN npm install && npm install react-scripts@latest

COPY . .

EXPOSE 3000

CMD ["npm", "start"]