# Use Node.js as the base image
FROM node:20.18.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend source code
COPY . .

# Build the frontend
RUN npm run build

# Use a lightweight web server to serve the build
RUN npm install -g serve

# Expose the frontend port (3000)
EXPOSE 3000

# Serve the built frontend on port 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
