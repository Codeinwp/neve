wp --allow-root plugin is-installed amp && wp --allow-root plugin update amp ||  wp --allow-root plugin install amp
wp --allow-root plugin activate amp
wp --allow-root option patch update amp-options theme_support 'transitional'
