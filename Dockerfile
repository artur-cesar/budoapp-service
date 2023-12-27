FROM node:latest

WORKDIR /usr/src/api

COPY . .
COPY ./.env.production ./.env

RUN npm install --quiet --no-optional --no-found --log-level=error

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:dev"]

