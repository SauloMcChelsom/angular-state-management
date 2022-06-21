# syntax=docker/dockerfile:1
FROM node:16.15.1-alpine
WORKDIR /app
COPY . .
RUN npm install -g @angular/cli@12.1.0 && npm install -g typescript@4.3.2
RUN npm i 
CMD ["node", "server.js"]
EXPOSE 4200