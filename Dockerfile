FROM node:20-slim AS build
WORKDIR /app
COPY package*.json ./
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    gcc \
    g++ \
  && npm install --verbose \
  && apt-get remove --purge -y \
    python3 \
    make \
    gcc \
    g++ \
  && apt-get autoremove -y \
  && rm -rf /var/lib/apt/lists/*

COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

# FROM node:20-slim AS production
# WORKDIR /app
# COPY --from=build /app /app
# EXPOSE 3000
# CMD ["npm", "start"]