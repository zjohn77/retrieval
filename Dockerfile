FROM node:8.14.0-alpine
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD npm run demo2