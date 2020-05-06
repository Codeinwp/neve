#!/usr/bin/env bash

echo "==================================================="
echo "============= Run diffy compare and Github check =="
echo "==================================================="
COMMIT_SHA="$1"
API_KEY="$2"

DIFFY_HOST="https://app.diffy.website"
PROJECT_ID="$3"



echo "============= COMMIT_SHA =========="
echo $COMMIT_SHA

echo "============= PROJECT_ID =========="
echo $PROJECT_ID

RESULT=`curl -s \
-H "Accept: application/json" \
-H "Content-Type:application/json" \
-X POST -d '{"key":"'$API_KEY'"}' $DIFFY_HOST'/api/auth/key' \
| grep token | tr ':' ' ' | tr '}' ' ' |  awk  '{print $2}'`

TOKEN="${RESULT//\"/}"

if [[ -z "$TOKEN" ]]; then
   echo "============= Diffy authorization failed =========="
   echo $RESULT
   exit 1
else
   echo "============= Diffy authorization success ========="
   echo "============= Diffy run compare and Github check =="

DIFF=$(curl -s -X POST "https://app.diffy.website/api/projects/1235/compare" \
-H "accept: application/json" \
-H "Authorization: Bearer $TOKEN" \
-H "Content-Type: application/json" \
-d "{\"env1\":\"baseline\",\"env2\":\"prod\",\"commitSha\":\"$COMMIT_SHA\"}");

re='^[0-9]+$'
if ! [[ $DIFF =~ $re ]] ; then
   echo "============= Diffy compare failed ================"
   echo $DIFF
else
   echo "============= Diffy compare success ==============="
   echo "Diff ID: $DIFF"
fi
fi
echo "==================================================="
exit 0
