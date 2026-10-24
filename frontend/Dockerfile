FROM node:22-alpine

WORKDIR /app

# Copy dependency files first, leverage caching
COPY package*.json ./
RUN npm install

# Copy the rest of the code (at runtime, Compose will mount the local directory to override, for hot reload)
COPY . .

# Expose Vite default port
EXPOSE 5173

# Critical: --host must be added, otherwise Vite inside container will only listen on 127.0.0.1, host machine won't be able to access
CMD ["npm", "run", "dev", "--", "--host"]
