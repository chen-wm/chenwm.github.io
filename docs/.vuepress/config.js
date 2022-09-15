const path = require('path')
module.exports = {
  title: 'CHEN BLOG',

  description: 'chenweiming of web\'s blog',
  comments: false,
  locales: {
    '/': {
      lang: 'en-US',
    },
  },

  evergreen: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@images': path.resolve('./assets/img'),
      },
    },
  },
  plugins: [
    ['vuepress-plugin-side-anchor'],
    ['@vuepress/nprogress'],
    ['@vuepress/search', {
      searchMaxSuggestions: 10,
    }],
    [
      'dynamic-title',
      {
        showIcon: '/favicon.ico',
        showText: '(/≧▽≦/)咦！又好了！',
        hideIcon: '/failure.ico',
        hideText: '(●—●)喔哟，崩溃啦！',
        recoverTime: 2000,
      },
    ],
    ['homebadge', {
      selector: '.hero',
      repoLink: 'https://github.com/zpfz/vuepress-theme-antdocs',
      badgeLink: 'https://img.shields.io/github/stars/zpfz/vuepress-theme-antdocs?style=social',
      badgeGroup: [
        'https://us168.com/#/',
        'https://img.shields.io/npm/dt/vuepress-theme-antdocs?style=flat-square&color=red',
        'https://img.shields.io/github/license/zpfz/vuepress-theme-antdocs?style=flat-square&color=blue',
        'https://img.shields.io/npm/v/vuepress-theme-antdocs?style=flat-square',
      ],
    }],
    ['vuepress-plugin-reading-time', {
      excludes: ['/about', '/tag/.*'],
    }],
    ['@vuepress/active-header-links'],
    ['one-click-copy', {
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功!', // default is 'Copied successfully!'
      toolTipMessage: 'Copy to clipboard', // default is ''Copy to clipboard'
      duration: 2000, // prompt message display time
    }],
    ['@vuepress/google-analytics', {
      ga: 'UA-132770851-2',
    }],
  ],
  base: '/chenwm.github.io/',
  chainWebpack: (config, isServer) => {
    if (isServer === false) {
      config.optimization.splitChunks({
        maxInitialRequests: 5,
        cacheGroups: {
          vue: {
            test: /[\\/]node_modules[\\/](vue|vue-router|vssue)[\\/]/,
            name: 'vendor.vue',
            chunks: 'all',
          },
          commons: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            name: 'vendor.commons',
            chunks: 'all',
          },
        },
      })
    }
  },

  theme: path.resolve(__dirname, '../../lib'),
  themeConfig: {
    lang: {
      home: '首页',
      posts: '分类',
      category: 'category',
      categories: 'categories',
      allCategories: '全部',
      tag: 'tag',
      tags: 'tags',
      createdAt: '发布时间',
      updatedAt: '最后修改',
      prevPost: '上一篇',
      nextPost: '下一篇',
    },
    // logo: '/assets/img/cat.png',
    personalInfo: {
      nickname: '陈伟铭',
      description: 'web前端开发',
      email: '627891695@qq.com',
      location: 'Fuzhou, China',
      organization: '福州万福网络科技有限公司',
      avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.keaidian.com%2Fuploads%2Fallimg%2F190610%2F10194333_6.gif&refer=http%3A%2F%2Fwww.keaidian.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661592740&t=e38749f33aeadb174d52cbcc41525466',

      sns: {
        github: {
          account: 'chenweiming',
          link: 'https://github.com/',
        },
        gitlab: {
          account: 'chenweiming',
          link: 'http://gitlab.us168168.com/chenwm',
        },
        csdn: {
          account: 'chenweiming',
          link: 'https://blog.csdn.net/weixin_45894503?spm=1000.2115.3001.5343',
        },
      },
    },

    header: {
      background: {
        url: './assets/img/bg3.jpg',
        useGeo: true,
      },
      showTitle: true,
    },

    footer: {
      poweredBy: true,
      poweredByTheme: true,
      custom: 'Copyright 2022-present <a href="https://github.com/chen-wm"' +
        ' target="_blank">chenweiming</a> | MIT License',
    },

    infoCard: {
      headerBackground: {
        // url: '/assets/img/header-image-01.jpg',
        useGeo: true,
      },
    },

    lastUpdated: true,

    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Tags', link: '/posts/', exact: false },
      { text: 'Custom Pages', link: '/custom-pages/', exact: false },
      { text: 'Github', link: 'https://github.com/chen-wm' },
    ],

    // Enable smooth scrolling or not
    smoothScroll: false,

    // Configs for vuepress-plugin-zooming
    zooming: {
      // @see https://vuepress.github.io/en/plugins/zooming
    },

    comments: {
      owner: 'chenweiming',
      repo: 'vuepress-theme-meteorlxy',
      clientId: 'cbda894952ba70c00666',
      clientSecret: '1ade785ca693bf3092be5e5338720d5ee43672b7',
      autoCreateIssue: false,
    },

    pagination: {
      perPage: 10,
    },
  },
}
