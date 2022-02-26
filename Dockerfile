FROM node:14-alpine

WORKDIR /app

COPY package.json ./

RUN yarn install --immutable --immutable-cache --check-cache

ENV NODE_ENV=production

COPY ./ .

RUN yarn build

CMD ["yarn", "run", "start"]
