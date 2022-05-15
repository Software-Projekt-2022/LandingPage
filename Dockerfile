FROM node

COPY docker-entrypoint.sh /etc/entrypoint.sh

WORKDIR /landingpage_frontend
COPY ./frontend/package.json /landingpage_frontend/package.json
COPY ./frontend /landingpage_frontend

EXPOSE 3000

RUN cd /landingpage_frontend && npm install

WORKDIR /landingpage_backend
COPY ./backend/package.json /landingpage_backend/package.json
COPY ./backend /landingpage_backend

EXPOSE 4000

RUN cd /landingpage_backend && npm install

ENTRYPOINT [ "/etc/entrypoint.sh" ]