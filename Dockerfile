#FROM node:12.19.0

#WORKDIR /app

#COPY . /app

#RUN useradd -ms /bin/bash frozendig

#RUN chown frozendig /app

#RUN npm install

#USER frozendig

#CMD npm start

#EXPOSE 3000

# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]