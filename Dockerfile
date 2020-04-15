FROM node:12.16.1-alpine3.11 AS builder

WORKDIR /app
COPY . .

RUN npm install react-scripts -g --silent
RUN yarn install --silent
RUN yarn build --silent

# Serve built react app
FROM node:12.16.1-alpine3.11

RUN yarn global add serve

WORKDIR /app
COPY --from=builder /app/build .

CMD ["serve", "-p", "3000", "-s", "."]doc
