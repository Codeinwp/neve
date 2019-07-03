#!/usr/bin/env bash

if [ $# -lt 1 ]; then
	echo "usage: $0 <starter-site-slug> | --all"
	exit 1
fi

export DOCKER_FILE=docker-compose.travis.yml
export starters=(
	neve-main
	neve-main-gutenberg
	neve-restaurant
	neve-charity
	neve-vet-center
	neve-doctors
	neve-energy-panels
	neve-lawyers
	neve-freelancer
	neve-shop
	neve-zelle
)
export will_import=false

# Check if we're redoing all refs.
if [[ $1 == "--all" ]]; then
	will_import=true
fi

# Check if the starter site exists.
for item in "${starters[@]}"; do
	if [[ $1 == "$item" ]]; then
		will_import=true
	fi
done

# Break if it's not importable
if [[ ${will_import} == false ]]; then
		echo "Starter Site: $1 is not valid."
		exit 1;
fi

# Bring up the site container
docker-compose -f $DOCKER_FILE up -d
sleep 10
docker-compose -f $DOCKER_FILE run --rm cli wp core install --url=http://localhost:8055 --title=SandboxSite --admin_user=admin --admin_email=admin@admin.com
docker-compose -f $DOCKER_FILE run --rm -u root cli chmod 0777 -R /var/www/html
docker-compose -f $DOCKER_FILE run --rm cli wp theme activate neve


generateRefs() {
	# Empty the site, activate the theme and import the requested starter site.
	docker-compose -f $DOCKER_FILE run --rm cli wp site empty --yes
	docker-compose -f $DOCKER_FILE run --rm cli wp theme mod remove --all
	docker-compose -f $DOCKER_FILE run --rm cli wp themeisle-si list
	docker-compose -f $DOCKER_FILE run --rm cli wp themeisle-si import $1

	# Silently curl the home url to make sure that CSS is generated.
	curl -s 'http://localhost:8055' >  /dev/null

	# Run the references and approve them.
	npm run backstop:reference -- --filter=$1\$
	npm run backstop:approve -- --filter=$1\$ || export BUILD_EXIT=1
}

# Parse call args.
while [ ! $# -eq 0 ]
do
	case "$1" in
		--all | -a)
				for item in "${starters[@]}"; do
					generateRefs $item;
				done;
			exit
			;;
	*)
	generateRefs $1
	;;
	esac
	shift
done

# Bring down the site container.
docker-compose -f $DOCKER_FILE down
# Bring down the backstop container.
cd backstop && docker-compose down

exit $BUILD_EXIT
