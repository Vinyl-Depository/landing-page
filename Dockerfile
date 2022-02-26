FROM node:14-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY package.json ./

RUN yarn install --immutable --immutable-cache --check-cache

COPY ./ .

RUN yarn build

CMD ["yarn", "run", "start"]
