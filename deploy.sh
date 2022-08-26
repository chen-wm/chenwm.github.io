#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

npm run build
git add docs/.vuepress/dist
git commit -m 'feat: commitmsg' --no-verify
git push
git subtree push --prefix docs/.vuepress/dist origin gh-pages
