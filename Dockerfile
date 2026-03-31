# Étape 1 : Build de l'app Angular
FROM node:20-alpine AS build
WORKDIR /app
COPY . .
RUN npm install --force
RUN npm run build --configuration=production

# Étape 2 : Serveur Nginx pour les fichiers statiques
FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist/pokemon /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
