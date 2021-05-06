#!/bin/bash
baseball=$(
  cd $(dirname $0) || exit
  pwd
)
cd "$baseball" || exit
#npm run build
git add .
remark=$(date +"%Y-%m-%d %H:%M:%S")
echo '请输入本次版本修改的内容'
read note
git commit -m "${note} ${remark}"
git push
