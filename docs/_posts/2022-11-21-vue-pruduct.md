---
category: Vue
date: 2022-11-21
title: MacOS Ventura 13 node环境变量失效

---

::: tip
brew升级node时不生效
:::

### 问题原因
Mac在过往版本通过`source ~/.bash_profile`在该文件中export出node环境变量，在新版本中不会生效。

### 解决
Mac在新版本中终端是zsh文件，之前开发时在zsh文件中写入了node14变量，因此使用brew更新node被此文件变量覆盖，node -v一直为14版本。<br/>
要使用新的node版本，只需将终端执行`open .zshrc `
```ts
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```
写入nvm变量，使用`nvm install 16`安装16版本即可升级完成
