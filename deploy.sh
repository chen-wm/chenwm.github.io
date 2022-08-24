#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

date=`date +"%Y-%m-%d %H:%M:%S"`
commitmsg='Site updated: '$date
# yarn build
git add -A
git commit -m "$commitmsg"
git config --local user.name chenweiming
git config --local user.email 627891695@qq.com

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:chen-wm/chenwm.github.io.git master
