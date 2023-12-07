# Use an official Node.js runtime as a base image
FROM node:21

# Set the working directory in the container
WORKDIR /app

RUN git clone https://github.com/cypress-io/cypress-realworld-testing-course-app.git .

COPY package*.json ./

# Install dependencies
RUN npm install

#COPY . /app

# Expose the port that the demo app is running on
EXPOSE 3000

# Start the demo app
CMD npm run dev