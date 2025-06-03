# FROM node:14.17.5
# WORKDIR usr/src/app
# COPY package.json ./
# RUN npm install
# COPY . .
# CMD ["node","app.js"]
# EXPOSE 3005

FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files first for caching
COPY package*.json ./

# Install dependencies inside container
RUN npm install

# Copy the rest of the app (excluding node_modules due to .dockerignore)
COPY . .

# Expose the app port
EXPOSE 3005

# Run the app
CMD ["node", "app.js"]
