<template>
  <div
    class="post-nav-card"
    :style="style"
  >
    <!--    <div class="titleColor">Project case</div>-->
    <!--    <div class="demo-item" v-for="item in infoList" :key="item.desc">-->
    <!--      <a class="desc" :href="item.path">{{ `${item.desc}` }}</a>-->
    <!--      <img :src="item.address" class="imgs"/>-->
    <!--    </div>-->
  </div>
</template>

<script>
import throttle from 'lodash.throttle'
import debounce from 'lodash.debounce'
export default {
  name: 'PostNavCard',

  components: {
  },

  data () {
    return {
      fixed: false,
      infoList: [
        {
          desc: '华人168平台',
          path: 'https://us168.com/#/',
          address: require('/docs/.vuepress/public/assets/img/project1.jpg'),
          color: '#fde5e7',
        },
      ],
      width: 0,
      scrollListener: throttle(() => {
        this.fixed = this.infoCardDom.getBoundingClientRect().bottom < this.navbarHeight
      }, 100),
      resizeListener: debounce(() => {
        this.width = this.getWidth()
      }, 100),
    }
  },

  computed: {
    style () {
      return {
        position: this.fixed ? 'fixed' : 'relative',
        top: this.fixed ? `${this.navbarHeight}px` : 0,
        width: `${this.width}px`,
      }
    },

    infoCardDom () {
      return document.querySelector('#app .info-card')
    },

    navbarHeight () {
      return document.querySelector('.navbar').clientHeight
    },

    showContents () {
      return this.$page.headers && this.$page.headers.filter(h => h.level === 2).length > 0
    },

    showComments () {
      return this.$themeConfig.comments !== false && this.$frontmatter.vssue !== false && (
        this.$frontmatter['vssue-id'] || this.$frontmatter['vssue-title'] || this.$frontmatter.title
      )
    },
  },

  mounted () {
    this.width = this.getWidth()

    window.addEventListener('scroll', this.scrollListener)
    window.addEventListener('resize', this.resizeListener)
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.scrollListener)
    window.removeEventListener('resize', this.resizeListener)
  },

  methods: {
    getWidth () {
      return this.infoCardDom.clientWidth
    },
  },
}
</script>

<style lang="stylus">
@require '~@theme/styles/variables'

.post-nav-card
  padding 1rem
  color $grayTextColor
  word-break break-all
  line-height 160%
  .titleColor
    text-align center;
    font-weight bold;
    background-clip: text;
    color: transparent;
    background-image: linear-gradient(120deg, #30cfd0 0%, #ebbba7 50%, #a3bded 80%);
  .demo-item
    margin 20px 0;
    background #c0f1d5
    .imgs
      width 100%;
      height 100%;
      border-radius 5px;
      border 1px transparent
    .desc
      margin-top 10px;
      text-align center
      display: inline-block;
      width: 100%;
  .icon
    fill $grayTextColor
  .post-nav-toc > ul
    word-break normal
    margin 0.5rem 0
    padding-left 2rem
    max-height calc(100vh - 16rem)
    // separate overflow to be compatible with Safari
    overflow-x hidden
    overflow-y auto
    scrollbar-width thin
    &::-webkit-scrollbar
      width 3px
    &::-webkit-scrollbar-track
      background-color $borderColor
    &::-webkit-scrollbar-thumb
      background-color $lightTextColor
    ul
      padding-left 0.8rem
  .post-nav-comments a
    color $grayTextColor
    &:hover
      text-decoration underline
</style>
