FROM node:14
WORKDIR /mysql-express-app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 9229/tcp
CMD npm start