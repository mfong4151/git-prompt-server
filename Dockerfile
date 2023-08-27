FROM node:16-alpine3.17 AS builder

WORKDIR /APP

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .


RUN npm run build


RUN npm run build
RUN npx prisma generate
RUN npx prisma db push

EXPOSE 3000

CMD ["npm", "run", "start"]