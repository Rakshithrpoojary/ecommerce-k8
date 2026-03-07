FROM node:18-alpine
WORKDIR /app

COPY package*.json .
RUN npm ci --omit=dev
RUN addgroup -S nodejs && adduser -S nodejs -G nodejs
USER nodejs
COPY . .

EXPOSE 4000
CMD ["node", "index.js"]
