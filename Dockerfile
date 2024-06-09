FROM node:21
WORKDIR /portfolio-website/
COPY public/ /portfolio-website/public
COPY src/ /portfolio-website/src
COPY package.json /portfolio-website/
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]