# Build Angular application
FROM node:18 AS build

# WorkDir
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install Angular dependencies
RUN npm install

# Copy all
COPY . .

# Build Angular production version
RUN npm run build --prod

# Application via Nginx
FROM nginx:alpine

# Copy all files
COPY --from=build /app/dist/angular/browser /usr/share/nginx/html

# Copy Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Port of application
EXPOSE 4200

# Execute Nginx
CMD ["nginx", "-g", "daemon off;"]