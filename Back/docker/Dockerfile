FROM node:carbon

# Create app directory 
WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install

COPY . .

EXPOSE 1234

CMD [ "node", "app.js" ]