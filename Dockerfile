# syntax=docker/dockerfile:1

# Build stage: install dependencies and build the Vite app
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

COPY . .

RUN npm run build

# Production stage: serve the built static files
FROM node:20-alpine AS production

WORKDIR /app

RUN npm install -g serve@14.2.1

COPY --from=build /app/dist ./dist

EXPOSE 5000

CMD ["serve", "-s", "dist", "-l", "5000"]
