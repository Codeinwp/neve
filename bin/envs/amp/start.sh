wp --allow-root plugin is-installed amp && wp --allow-root plugin update amp ||  wp --allow-root plugin install amp
wp --allow-root plugin activate amp
wp menu create sample-menu --allow-root
wp menu location assign sample-menu primary --allow-root
wp menu item add-post sample-menu 1 --title="Parent menu" --allow-root
wp menu item add-post sample-menu 1 --title="Submenu Item" --allow-root  --parent-id="$(wp menu item list sample-menu --allow-root --format=ids)"
wp --allow-root option patch update amp-options theme_support 'transitional'
