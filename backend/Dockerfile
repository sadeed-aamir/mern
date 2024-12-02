# Use Node.js as the base image
FROM node:20.18.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Expose the backend port (5000)
EXPOSE 5000

# Command to start the backend
CMD ["npm", "run", "dev"]
