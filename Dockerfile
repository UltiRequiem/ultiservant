FROM node:alpine
WORKDIR /ultiservant
COPY package.json .
RUN yarn install
COPY . .
RUN yarn build 
CMD [ "yarn", "start" ]
