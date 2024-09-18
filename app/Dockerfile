# Utiliser une image de base Node.js
FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install && npm install -g nodemon
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
