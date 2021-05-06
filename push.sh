#!/bin/bash
baseball=$(
  cd $(dirname $0) || exit
  pwd
)
cd "$baseball" || exit
#npm run build
remark=$(date +"%Y-%m-%d %H:%M:%S")
read -e "\033[20;1H\033[1;4;32m david use echo say \033[0m Hello World \n": note

git add .
git commit -m "${note} ${remark}"
git push
