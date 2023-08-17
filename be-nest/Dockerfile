# Use the official Node.js image as the base image
FROM node:19-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port your application listens on
EXPOSE 3000

# Define the command to start your application
CMD [ "npm", "run", "start:prod" ]
