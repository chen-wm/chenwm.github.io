---
category: Vue
date: 2022-11-30
title: 终端执行git commit脚本

---
:::tip
### 由于经常要提交代码，想到vben admin中有个npm run commit的脚本，看了下shell测试了一下效果:thinking:
:::
### 脚本分别执行几个步骤：
1. 获取并拉取所在分支
2. 添加改动文件至git暂存区
3. 填入序号选择commit规范类型
4. 输入commit信息生成为(git类型): commit信息
5. 推送代码
### 首先在项目下package.json文件下新增命令
```js
  "scripts": {
    "serve": "vue-cli-service serve",
    "prod": "vue-cli-service serve --mode production",
    "commit": "bash deploy/git.sh",
    "build": "vue-cli-service build",
    "build:development": "vue-cli-service build --mode development",
    "build:fat": "vue-cli-service build --mode fat",
    "build:pro": "vue-cli-service build --mode production",
    "lint": "vue-cli-service lint",
    "preview": "node build/index.js --preview"
  }

```
### "commit": "bash deploy/git.sh" 此项命令默认执行deploy文件夹下git.sh脚本
:::tip
### 接下来就是编写git脚本文件，如下
:::
```shell

// deploy.sh
result=`git branch | grep "*"` # 获取分支名
curBranch=${result:2} # 去除多余的*
git pull origin "$curBranch"
git add .
#read -p "输入git规范类型: " type
options=("feat" "fix" "style" "perf" "refactor" "test")
PS3='请输入序号，以选用此项分支类型: '
select opt in "${options[@]}"
do
    case $opt in
        "feat")
        type="feat"
            break
            ;;
        "fix")
        type="fix"
            break
            ;;
        "style")
        type="style"
            break
            ;;
        "perf")
        type="perf"
            break
            ;;
        "refactor")
        type="refactor"
            break
            ;;
        "test")
        type="test"
            break
            ;;
    esac
    done
read -p "输入commit信息描述: " msg

git commit -m "$type: $msg"
#read -p "输入推送远程分支: " branch
git push
echo "推送成功"

```
