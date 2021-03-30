  # installs wpReset
  docker-compose -f docker-compose.ci.yml run --rm -u root cli wp --allow-root plugin install wp-reset --activate
  # resets DB
  docker-compose -f docker-compose.ci.yml run --rm -u root cli wp --allow-root reset reset --reactivate-theme --yes
  # initial setup for docker env
  bash bin/envs/init.sh
  # setup for specific env
  docker-compose -f docker-compose.ci.yml run --rm -u root cli sh "/var/www/html/bin/envs/$1/start.sh"
