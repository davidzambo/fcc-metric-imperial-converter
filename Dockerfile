FROM node:8
WORKDIR /app
COPY package.json /app
RUN npm install

COPY . /app
# will rewrite the default 3000 port
ENV PORT 8000

CMD ["npm", "run", "production"]

EXPOSE 9000