#!/bin/bash

set -e 
autotag () {

   git pull --rebase --tags origin main
   BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)
   VERSION=$(git tag -l "v0.1.*" --sort=-v:refname | head -n 1)
#    VERSION=$1
#    #replace . with space so can split into an array
   VERSION_BITS=(${VERSION//./ })

   # #get number parts and increase last one by 1
   VNUM1=${VERSION_BITS[0]}
   VNUM2=${VERSION_BITS[1]}
   VNUM3=${VERSION_BITS[2]}
   VNUM3=$((VNUM3+1))

   # #create new tag
   NEW_TAG="$VNUM1.$VNUM2.$VNUM3"

   git tag -a $NEW_TAG -m $NEW_TAG

   git push --set-upstream origin $BRANCH_NAME -f --follow-tags
}
