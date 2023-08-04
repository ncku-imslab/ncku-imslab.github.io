FROM node:18-alpine as build-stage
# For Linux server
#FROM --platform=linux/amd64 node:18-alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine as production-stage
#FROM --platform=linux/amd64 nginx:stable-alpine as production-stage

COPY --from=build-stage /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
