#!/usr/bin/env bash
# Updates starter sites JSON files from endpoints.

OB_DIR=../onboarding;
SLUGS=($(wp themeisle-si list --field=slug --allow-root));
URLS=($(wp themeisle-si list --field=url --allow-root));

# Iterate through the SLUGS and URL list and update the JSON files.
for ((i=0; i<${#SLUGS[@]}; ++i)); do
    SLUG=${SLUGS[i]}; URL=${URLS[i]};
    # Main demo has different url, because... why not?!
    if [[ ${SLUGS[i]} == 'neve-main' ]]; then
      URL='https://demo.themeisle.com/neve-onboarding/';
    fi
    if [[ ! -d "${OB_DIR}/${SLUG}" ]]; then
      echo "SKIPPING: The ${SLUG} demo has no local data. You can add the empty folder for it and update again to get the JSON.";
      continue;
    fi;
    echo "UPDATING: ${SLUG} JSON file.";
    wget -q -O "${OB_DIR}/${SLUG}/data.json" "${URL}wp-json/ti-demo-data/data"
done
