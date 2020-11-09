# Use the official image as a parent image.
FROM node:14

# Set the working directory.
WORKDIR /usr/src/app

# Copy the file from your host to your current location.
COPY package.json ./
COPY tsconfig.json ./
COPY yarn.lock ./

# Run the command inside your image filesystem.
RUN yarn

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .
COPY .env.production .env

RUN yarn build

ENV NODE_ENV production

# Add metadata to the image to describe which port the container is listening on at runtime.
EXPOSE 8080

# Run the specified command within the container.
CMD [ "node", "dist/index.js" ]
USER node
