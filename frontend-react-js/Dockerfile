FROM node:16.18

ENV PORT=3000

COPY . /frontend-react-js
WORKDIR /frontend-react-js
COPY package.json package-lock.json ./
RUN npm install
EXPOSE ${PORT}
CMD ["npm", "start"]