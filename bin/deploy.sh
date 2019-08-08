#!/usr/bin/env bash
if [ ! -d "dist" ]; then
	exit 1;
fi

git config user.name "selul"
git config user.email "$GITHUB_EMAIL"
git fetch

echo -e " Changes for $BUILD_VERSION: ";

echo -e "$CHANGES";


if ! git rev-parse "v$BUILD_VERSION" >/dev/null 2>&1
    then
	# Send changelog changes to git.
	git checkout "$MASTER_BRANCH"
	git add -v .

	# We use [skip ci] in message to prevent this commit to trigger the build.
	git commit -a -m "ci: Updating changelog for v$BUILD_VERSION [skip ci]" --no-verify
	git push --quiet "https://${GITHUB_TOKEN}@github.com/$UPSTREAM_REPO.git" HEAD:"$MASTER_BRANCH"

	# Tag the new release.
	git tag -a "v$BUILD_VERSION" -m "[AUTO] Release of $BUILD_VERSION ";
	git push --quiet "https://${GITHUB_TOKEN}@github.com/$UPSTREAM_REPO.git"  --tags ;
	sleep 5;

	# Sends the api call for creating the release.
	# We use this as the travis release provider does not offer any way
	# to set the body of the release.
    API_JSON='{"tag_name": "v'$BUILD_VERSION'","target_commitish": "'$MASTER_BRANCH'","name": "v'$BUILD_VERSION'","body": "'$CHANGES'","draft": false,"prerelease": false}';
    curl -s --data  "$API_JSON" "https://api.github.com/repos/$UPSTREAM_REPO/releases?access_token=$GITHUB_TOKEN"  > /dev/null;

    # Send update to the store
    if [ ! -z "$THEMEISLE_ID" ]; then
        STORE_JSON='{"version": "'$BUILD_VERSION'","id": "'$THEMEISLE_ID'","body": ""}';
        echo "$STORE_JSON";
        curl -X POST -H 'Cache-Control: no-cache' -H "Content-Type: application/json" -H "x-themeisle-auth: $THEMEISLE_AUTH"  --data "$STORE_JSON" "$STORE_URL/wp-json/edd-so/v1/update_changelog/" > /dev/null
    fi
fi


if [ -f "themeisle.enc" ]; then

    export DEMO_THEMEISLE_PATH="$DEMO_ROOT/wp-content/themes/$BUILD_NAME";

    openssl aes-256-cbc -K $encrypted_c0a6f152ac27_key -iv $encrypted_c0a6f152ac27_iv -in themeisle.enc -out /tmp/key -d

    if [ -f "/tmp/key" ]; then
       echo -e "key decripted"
    fi

    # Adding the ssh key to the agent.
    eval "$(ssh-agent -s)"
    chmod 600 /tmp/key
    ssh-add /tmp/key

    # Creating the maintenance file.
    echo "<?php \$upgrading = time(); ?>" > .maintenance
    # rsync the maintenance file.
    node_modules/.bin/grunt rsync:start


    # Copy the dist folder.
    node_modules/.bin/grunt rsync:prod

    #Removing the maintenance.
    echo -n > .maintenance
    node_modules/.bin/grunt rsync:end
    rm -rf .maintenance
fi
