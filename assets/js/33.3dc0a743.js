(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{322:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("brew升级node时不生效")])]),s._v(" "),t("h3",{attrs:{id:"问题原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题原因"}},[s._v("#")]),s._v(" 问题原因")]),s._v(" "),t("p",[s._v("Mac在过往版本通过"),t("code",[s._v("source ~/.bash_profile")]),s._v("在该文件中export出node环境变量，在新版本中不会生效。")]),s._v(" "),t("h3",{attrs:{id:"解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[s._v("#")]),s._v(" 解决")]),s._v(" "),t("p",[s._v("Mac在新版本中终端是zsh文件，之前开发时在zsh文件中写入了node14变量，因此使用brew更新node被此文件变量覆盖，node -v一直为14版本。"),t("br"),s._v("\n要使用新的node版本，只需将终端执行"),t("code",[s._v("open .zshrc")])]),s._v(" "),t("div",{staticClass:"language-ts extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NVM_DIR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$HOME/.nvm"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("s "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$NVM_DIR/nvm.sh"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" \\"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$NVM_DIR/nvm.sh"')]),s._v("  # This loads nvm\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("s "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$NVM_DIR/bash_completion"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" \\"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$NVM_DIR/bash_completion"')]),s._v("  # This loads nvm bash_completion\n")])])]),t("p",[s._v("写入nvm变量，使用"),t("code",[s._v("nvm install 16")]),s._v("安装16版本即可升级完成")])])}),[],!1,null,null,null);t.default=e.exports}}]);