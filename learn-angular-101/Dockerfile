# STAGE 1: Build
FROM node:current-alpine3.18 AS build
ENV NODE_ENV=development
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
RUN npm run build

# STAGE 2: Run
FROM nginx:1.25-alpine3.18
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/learn-angular-101 /usr/share/nginx/html
EXPOSE 80

# docker build -t learnangular101 .
# to run either run the following or use docker-compose up
# docker run -d -p 8080:80 learnangular101
# to stop: docker stop <container-id>
