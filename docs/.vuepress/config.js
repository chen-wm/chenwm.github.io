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
    lang: 'en-US',
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
        // instagram: {
        //   account: 'meteorlxy.cn',
        //   link: 'https://www.instagram.com/meteorlxy.cn',
        // },
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
        url: '/assets/img/header-image-03.jpg',
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
      { text: 'Category', link: '/posts/', exact: false },
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
