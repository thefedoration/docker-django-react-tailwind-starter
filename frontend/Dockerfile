FROM node

COPY package.json .
RUN npm install

COPY . /app/frontend
WORKDIR /app/frontend

EXPOSE 3000
CMD ["npm", "start"]