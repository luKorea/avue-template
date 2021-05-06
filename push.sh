#!/bin/bash
baseball=$(
  cd $(dirname $0) || exit
  pwd
)
cd "$baseball" || exit
#npm run build
remark=$(date +"%Y-%m-%d %H:%M:%S")
echo 'Please input the modified content of this version'
read note
git add .
git commit -m "${note} ${remark}"
git push
