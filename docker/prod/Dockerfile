# syntax=docker/dockerfile:1
FROM node:16.15.1

RUN apt-get -y update

# Install software 
RUN apt-get install -y git

# show version Node.JS
RUN node -v

# show version NPM
RUN npm -v

# show version git
RUN git --version

# Clone the conf files into the docker container
RUN git clone -b develop https://github.com/SauloMcChelsom/angular-state-management.git app
WORKDIR /app
RUN git pull
RUN npm i
# RUN rm -rf node_modules/
# RUN rm -rf src/
# RUN rm Dockerfile  
# RUN rm angular.json            
# RUN rm package-lock.json  
# RUN rm server.js          
# RUN rm tsconfig.json
# RUN rm README.md          
# RUN rm karma.conf.js  
# RUN rm npm           
# RUN rm package.json       
# RUN rm tsconfig.app.json  
# RUN rm tsconfig.spec.json
RUN pwd
RUN ls
WORKDIR /app/docker/prod
RUN npm install express@4.18.1
RUN pwd
RUN ls
CMD [ "sh", "-c", "node server.js"]
EXPOSE 8080