# Base on offical Node.js Alpine image
FROM public.ecr.aws/docker/library/node:18.12.1

WORKDIR /usr/app

COPY package.json .
RUN npm install --legacy-peer-deps

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . .

EXPOSE 3002

CMD ["npm", "run", "start"]