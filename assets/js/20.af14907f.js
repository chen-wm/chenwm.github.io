(window.webpackJsonp = window.webpackJsonp || []).push([[20], { 306: function (s, t, a) { 'use strict'; a.r(t); var r = a(2); var e = Object(r.a)({}, function () { var s = this; var t = s._self._c; return t('ContentSlotsDistributor', { attrs: { 'slot-key': s.$parent.slotKey } }, [t('h4', { attrs: { id: '记录第一次部署github-demo配置github-pages的踩坑过程' } }, [t('a', { staticClass: 'header-anchor', attrs: { href: '#记录第一次部署github-demo配置github-pages的踩坑过程' } }, [s._v('#')]), s._v(' 记录第一次部署github demo配置github pages的踩坑过程 🤐')]), s._v(' '), t('h3', { attrs: { id: '一、新建vuepress项目' } }, [t('a', { staticClass: 'header-anchor', attrs: { href: '#一、新建vuepress项目' } }, [s._v('#')]), s._v(' 一、新建vuepress项目')]), s._v(' '), t('p', [t('a', { attrs: { href: 'https://www.vuepress.cn/', target: '_blank', rel: 'noopener noreferrer' } }, [s._v('vuepress构建'), t('OutboundLink')], 1)]), s._v(' '), t('div', { staticClass: 'language-js extra-class' }, [t('pre', { pre: !0, attrs: { class: 'language-js' } }, [t('code', [s._v('mkdir blog '), t('span', { pre: !0, attrs: { class: 'token operator' } }, [s._v('&&')]), s._v(' cd blog\nnpm install vuepress vuepress'), t('span', { pre: !0, attrs: { class: 'token operator' } }, [s._v('-')]), s._v('theme'), t('span', { pre: !0, attrs: { class: 'token operator' } }, [s._v('-')]), s._v('meteorlxy\n创建 '), t('span', { pre: !0, attrs: { class: 'token template-string' } }, [t('span', { pre: !0, attrs: { class: 'token template-punctuation string' } }, [s._v('`')]), t('span', { pre: !0, attrs: { class: 'token string' } }, [s._v('src/_posts')]), t('span', { pre: !0, attrs: { class: 'token template-punctuation string' } }, [s._v('`')])]), s._v(' 文件夹和 Vuepress 配置文件，项目结构大致为：\n'), t('span', { pre: !0, attrs: { class: 'token constant' } }, [s._v('BLOG')]), s._v(' '), t('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [s._v('project')]), t('span', { pre: !0, attrs: { class: 'token operator' } }, [s._v(':')]), s._v(' \n├── src # Blog 源文件目录\n│   ├── '), t('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('.')]), s._v('vuepress # Vuepress 目录\n│   │   └── config'), t('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('.')]), s._v('js # Vuepress 配置文件\n│   └── _posts # 博客文件夹\n│       ├── xxx'), t('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('.')]), s._v('md\n│       '), t('span', { pre: !0, attrs: { class: 'token operator' } }, [s._v('...')]), s._v('\n└── '), t('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('package')]), t('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('.')]), s._v('json\n')])])]), t('p', [s._v('具体配置参照'), t('a', { attrs: { href: 'https://www.vuepress.cn/', target: '_blank', rel: 'noopener noreferrer' } }, [s._v('vuepress官网'), t('OutboundLink')], 1), s._v(' '), t('br')]), s._v(' '), t('h3', { attrs: { id: '二、github配置origin-repo' } }, [t('a', { staticClass: 'header-anchor', attrs: { href: '#二、github配置origin-repo' } }, [s._v('#')]), s._v(' 二、github配置origin repo')]), s._v(' '), t('h4', { attrs: { id: '_1-创建仓库-如下图' } }, [t('a', { staticClass: 'header-anchor', attrs: { href: '#_1-创建仓库-如下图' } }, [s._v('#')]), s._v(' 1.创建仓库，如下图')]), s._v(' '), t('img', { attrs: { src: s.$withBase('/assets/img/repo1.jpg'), alt: 'repo1' } }), s._v(' '), t('br'), s._v(' '), t('h4', { attrs: { id: '_2-关联origin-repo-如下图' } }, [t('a', { staticClass: 'header-anchor', attrs: { href: '#_2-关联origin-repo-如下图' } }, [s._v('#')]), s._v(' 2.关联origin repo，如下图')]), s._v(' '), t('img', { attrs: { src: s.$withBase('/assets/img/repo2.jpg'), alt: 'repo1' } }), s._v(' '), t('br'), s._v(' '), t('h3', { attrs: { id: '三、构建自动化脚本' } }, [t('a', { staticClass: 'header-anchor', attrs: { href: '#三、构建自动化脚本' } }, [s._v('#')]), s._v(' 三、构建自动化脚本')]), s._v(' '), t('div', { staticClass: 'language-js extra-class' }, [t('pre', { pre: !0, attrs: { class: 'language-js' } }, [t('code', [t('span', { pre: !0, attrs: { class: 'token constant' } }, [s._v('BLOG')]), s._v(' '), t('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [s._v('project')]), t('span', { pre: !0, attrs: { class: 'token operator' } }, [s._v(':')]), s._v('\n├── src # Blog 源文件目录\n│   ├── '), t('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('.')]), s._v('vuepress # Vuepress 目录\n│   │   └── config'), t('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('.')]), s._v('js # Vuepress 配置文件\n│   └── _posts # 博客文件夹\n│       ├── xxx'), t('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('.')]), s._v('md\n│       '), t('span', { pre: !0, attrs: { class: 'token operator' } }, [s._v('...')]), s._v('\n└── '), t('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('package')]), t('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('.')]), s._v('json\n└── deploy'), t('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('.')]), s._v('sh '), t('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('//新增脚本')]), s._v('\n')])])]), t('div', { staticClass: 'custom-block tip' }, [t('p', { staticClass: 'custom-block-title' }, [s._v('TIP')]), s._v(' '), t('h4', { attrs: { id: '_1-新增deploy-sh脚本' } }, [t('a', { staticClass: 'header-anchor', attrs: { href: '#_1-新增deploy-sh脚本' } }, [s._v('#')]), s._v(' 1.新增deploy.sh脚本')]), s._v(' '), t('h4', { attrs: { id: '_2-packjson新增打包命令' } }, [t('a', { staticClass: 'header-anchor', attrs: { href: '#_2-packjson新增打包命令' } }, [s._v('#')]), s._v(' 2.packjson新增打包命令')]), s._v(' '), t('h4', { attrs: { id: '_3-git-bash-执行脚本-repo仓库将新增gh-pages分支以存放打包后的dist文件夹-用于github-pages部署分支' } }, [t('a', { staticClass: 'header-anchor', attrs: { href: '#_3-git-bash-执行脚本-repo仓库将新增gh-pages分支以存放打包后的dist文件夹-用于github-pages部署分支' } }, [s._v('#')]), s._v(' 3.git bash 执行脚本，repo仓库将新增gh-pages分支以存放打包后的dist文件夹，用于github pages部署分支')])]), s._v(' '), t('div', { staticClass: 'language-js extra-class' }, [t('pre', { pre: !0, attrs: { class: 'language-js' } }, [t('code', [t('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('//deploy.sh')]), s._v('\n#'), t('span', { pre: !0, attrs: { class: 'token operator' } }, [s._v('!')]), t('span', { pre: !0, attrs: { class: 'token operator' } }, [s._v('/')]), s._v('usr'), t('span', { pre: !0, attrs: { class: 'token operator' } }, [s._v('/')]), s._v('bin'), t('span', { pre: !0, attrs: { class: 'token operator' } }, [s._v('/')]), s._v('env sh\n# 确保脚本抛出遇到的错误\nset '), t('span', { pre: !0, attrs: { class: 'token operator' } }, [s._v('-')]), s._v('e\n\nnpm run build\ngit add docs'), t('span', { pre: !0, attrs: { class: 'token operator' } }, [s._v('/')]), t('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('.')]), s._v('vuepress'), t('span', { pre: !0, attrs: { class: 'token operator' } }, [s._v('/')]), s._v('dist\ngit commit '), t('span', { pre: !0, attrs: { class: 'token operator' } }, [s._v('-')]), s._v('m '), t('span', { pre: !0, attrs: { class: 'token string' } }, [s._v("'commitmsg'")]), s._v('\ngit push\ngit subtree push '), t('span', { pre: !0, attrs: { class: 'token operator' } }, [s._v('--')]), s._v('prefix docs'), t('span', { pre: !0, attrs: { class: 'token operator' } }, [s._v('/')]), t('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('.')]), s._v('vuepress'), t('span', { pre: !0, attrs: { class: 'token operator' } }, [s._v('/')]), s._v('dist origin gh'), t('span', { pre: !0, attrs: { class: 'token operator' } }, [s._v('-')]), s._v('pages\n\n')])])]), t('img', { attrs: { src: s.$withBase('/assets/img/sh.jpg'), alt: 'sh' } }), s._v(' '), t('img', { attrs: { src: s.$withBase('/assets/img/sh2.jpg'), alt: 'sh2' } }), s._v(' '), t('h3', { attrs: { id: '四、如图操作-等待actions部署完毕即可访问' } }, [t('a', { staticClass: 'header-anchor', attrs: { href: '#四、如图操作-等待actions部署完毕即可访问' } }, [s._v('#')]), s._v(' 四、如图操作，等待actions部署完毕即可访问')]), s._v(' '), t('img', { attrs: { src: s.$withBase('/assets/img/sh3.jpg'), alt: 'sh3' } }), s._v(' '), t('br')]) }, [], !1, null, null, null); t.default = e.exports } }])
