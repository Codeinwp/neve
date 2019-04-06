#!/usr/bin/env bash

export BUILD_VERSION
BUILD_VERSION=$(node -pe "require('./package.json').version")
export BUILD_NAME
BUILD_NAME=$(node -pe "require('./package.json').name")


# Build changelog based on commit message description.

CHANGELOG="\n ### v$BUILD_VERSION - $(date +'%Y-%m-%d') \n **Changes:** \n";

# Remove first line from the commit as is it used as commit title.
NORMALIZED_MESSAGE=$(sed "1d"  <<< "$TRAVIS_COMMIT_MESSAGE");

export CHANGES
CHANGES="";
while read -r line; do
   if ! [ -z "$line" ]; then
       line="${line//[$'\r\n']}";
       export CHANGES=$CHANGES'* '$line'\n';
   fi;
done <<< "$NORMALIZED_MESSAGE"

if [ -f "readme.txt" ] && [ -n "$CHANGES"  ]; then
    #Check if we have a Changelog section
    count=$(grep -c '== Changelog ==' "readme.txt")
    if [ "$count" -eq 0 ]; then
        echo -e "Changelog section not found in readme.txt. Exiting..."
    else
        #Check if the current version is already in the changelog file.
        change_log_line=$(grep -n '== Changelog ==' "readme.txt" | awk -F ':' '{print $1}')
        version_line=$(grep -n "= $BUILD_VERSION " "readme.txt" | awk -F ':' '{print $1}')

        if [[ "$change_log_line" -lt "$version_line" ]]; then
                echo -e "Version already mentioned in changelog section in readme.txt. Exiting..."
        else
            #Save the changelog text into readme file.
            sed "/== Changelog ==/a \= $BUILD_VERSION - $(date +'%Y-%m-%d')  = \n\n$CHANGES\n" "readme.txt" > "readme.txt.1"
            mv "readme.txt.1" "readme.txt"
        fi
    fi
fi

if [ -n "$CHANGES" ]; then
	CHANGELOG="$CHANGELOG $CHANGES";
	echo -e "$CHANGELOG $(cat CHANGELOG.md)" > CHANGELOG.md
fi

if [ ! -d "dist" ]; then
	npm run-script deploy
fi

echo "Deployment ready for v$BUILD_VERSION"