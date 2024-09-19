# Use an official Node.js image as a parent image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

# Install dependencies
RUN npm install

# Build the React app
RUN npm run build

# Serve the app with a simple HTTP server
RUN npm install -g serve
CMD ["serve", "-s", "build"]

# Expose port 3000 to the outside world
EXPOSE 3000
