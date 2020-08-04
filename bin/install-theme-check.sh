php -d memory_limit=1024M "$(which wp)" package install anhskohbo/wp-cli-themecheck --allow-root
wp  --allow-root core install --url=http://localhost:8080 --title=SandboxSite --admin_user=admin --admin_password=admin --admin_email=admin@admin.com
wp plugin install theme-check --activate --allow-root
wp --allow-root theme install /var/www/html/wp-content/neve.zip
wp themecheck --theme=neve --no-interactive --allow-root
