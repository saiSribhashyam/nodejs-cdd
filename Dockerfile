FROM node:alphine
COPY ./ ./
RUN npm install 
EXPOSE 8090
CMD["npm","start"]
