FROM node:18-alpine3.14

WORKDIR /landingpage_backend
COPY package.json /landingpage_backend/package.json
COPY ./ /landingpage_backend

EXPOSE 4000

RUN npm install

CMD ["node", "src/server.js"]