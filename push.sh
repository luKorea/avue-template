#!/bin/bash
baseball=$(
  cd $(dirname $0) || exit
  pwd
)
cd "$baseball" || exit
#npm run build
remark=$(date +"%Y-%m-%d %H:%M:%S")
read -p 'Please input the modified content of this version': note
git add .
git commit -m "${note} ${remark}"
git push
