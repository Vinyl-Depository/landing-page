FROM node:16-alpine

WORKDIR /app

COPY package.json ./

RUN yarn install --immutable --immutable-cache --check-cache

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

COPY ./ .

RUN yarn build

CMD ["yarn", "start"]
