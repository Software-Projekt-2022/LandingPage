FROM node:18-alpine3.14 AS development

ENV CI=true
ENV PORT=3000

WORKDIR /landingpage_frontend
COPY package.json /landingpage_frontend/package.json
COPY package-lock.json /landingpage_frontend/package-lock.json
COPY ./ /landingpage_frontend

RUN npm ci

CMD [ "npm", "start" ]

FROM development AS builder

RUN npm run build

FROM nginx:1.13-alpine

COPY --from=builder /landingpage_frontend/build /usr/share/nginx/html