# Usa l'immagine base di Nginx
FROM nginx:alpine

# Copia i file HTML e CSS nella directory di Nginx
COPY dashboard.html /usr/share/nginx/html/index.html
COPY style.css /usr/share/nginx/html/

# Espone la porta 80 per accedere all'applicazione web
EXPOSE 80

# Avvia Nginx
CMD ["nginx", "-g", "daemon off;"]
