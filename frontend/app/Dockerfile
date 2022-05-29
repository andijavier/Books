# Stage 1: Compile and Build angular app

# Use official node image as the base image
FROM node:16.13.0-alpine as build-stage

ARG API_BASE_URL
ENV VITE_APP_BASE_URL=$API_BASE_URL

# Set the working directory
WORKDIR /frontend

# Copy package.json
COPY package*.json ./

# Install all the dependencies
RUN npm install

# Add the source code to app
COPY . .

# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:stable-alpine as production-stage
COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

COPY --from=build-stage /frontend/dist /usr/share/nginx/html/

EXPOSE 8080