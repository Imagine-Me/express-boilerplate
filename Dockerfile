FROM node:16-alpine

WORKDIR /home/todo-backend

COPY ./package.json .

RUN npm install

RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . .
RUN chown node:node .

USER node

CMD ["npm","run","start"]
