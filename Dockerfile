# Production environment
FROM node:14.2.0-alpine as prod
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
# Optimized installation for production
RUN npm install --only=production \
  && npm cache clean --force
COPY . .
CMD [ "node", "bot.js" ]

# Development environment
FROM prod as dev
ENV NODE_ENV=development
RUN npm install --only=development
CMD [ "./node_modules/nodemon/bin/nodemon.js", "bot.js" ]