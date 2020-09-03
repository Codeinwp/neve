bash /var/www/html/bin/envs/default/start.sh
wp --allow-root plugin is-installed classic-editor && wp --allow-root plugin update classic-editor ||  wp --allow-root plugin install classic-editor
