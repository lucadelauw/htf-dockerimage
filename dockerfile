# Use the official Node.js image as the base
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package.json ./
COPY package-lock.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that the application listens on
EXPOSE 80
ENV PORT 80

# Run the application
ENTRYPOINT ["/bin/sh", "-c"]
CMD ["node app.cjs 42706d3e-502a-4916-9281-88381fa09e61"]