FROM wordpress:latest
RUN mkdir -p /var/www/html/wp-content/plugins
RUN mkdir -p /var/www/html/wp-content/uploads
RUN chown -R www-data:www-data /var/www
RUN find /var/www/ -type d -exec chmod 0755 {} \;
RUN find /var/www/ -type f -exec chmod 644 {} \;