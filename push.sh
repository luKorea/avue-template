#!/bin/bash
baseball=$(
  cd $(dirname $0) || exit
  pwd
)
cd "$baseball" || exit
npm run build
git add .
remark=$(date +"%Y-%m-%d %H:%M:%S")
git commit -m "korea avue template ${remark}"
git pull origin master
git push origin master
