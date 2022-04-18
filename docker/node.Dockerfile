FROM node:14
WORKDIR /mysql-express-app
COPY package.json .
RUN npm install
COPY . .
CMD npm start