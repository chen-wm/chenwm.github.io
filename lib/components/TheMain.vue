<template>
  <TransitionFadeSlide>
    <div
      :key="showAside"
      class="container clearfix"
      :class="containerClass"
    >
      <main class="main">
        <!--        <div class="container-box">-->
        <!--          <div class="demo-item" v-for="item in infoList" :key="item.desc" @click="handleGo(item.path)">-->
        <!--            <span class="desc" :href="item.path">{{ `${item.desc}` }}</span>-->
        <!--            <img :src="item.address" class="imgs"/>-->
        <!--          </div>-->
        <!--        </div>-->
        <TransitionFadeSlide>
          <component
            :is="layout"
            :key="$page.path"
          />
        </TransitionFadeSlide>
      </main>

      <aside class="aside">
        <InfoCard class="main-div" />
        <!--        <PostNavCard-->
        <!--          v-if="$page.type === 'post'"-->
        <!--          class="main-div"-->
        <!--        />-->
      </aside>
    </div>
  </TransitionFadeSlide>
</template>

<script>
import TransitionFadeSlide from '@theme/components/TransitionFadeSlide.vue'
import PostNavCard from '@theme/components/PostNavCard.vue'
import InfoCard from '@theme/components/InfoCard.vue'
import DemoCard from '@theme/components/DemoCard.vue'

export default {
  name: 'TheMain',
  components: {
    TransitionFadeSlide,
    InfoCard,
    PostNavCard,
    DemoCard,
  },
  data () {
    return {
      infoList: [
        {
          desc: '华人168平台',
          path: 'https://us168.com/#/',
          address: require('/docs/.vuepress/public/assets/img/logo.png'),
          color: '#fde5e7',
        },
      ],
    }
  },
  computed: {
    layout () {
      const layout = this.$page.frontmatter.layout
      if (layout && (this.$vuepress.getLayoutAsyncComponent(layout) || this.$vuepress.getVueComponent(layout))) {
        return layout
      }

      if (!this.$page.path) {
        return 'NotFound'
      }

      return 'Home'
    },

    showAside () {
      if ('aside' in this.$page.frontmatter) {
        return this.$page.frontmatter.aside
      }
      return true
    },

    containerClass () {
      return {
        'show-aside': this.showAside,
      }
    },
  },
  methods: {
    handleGo (path) {
      window.open(path, '_blank')
    },
  },
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/variables'

//.container-box{
//  .demo-item {
//    background: #fde5e7;
//    width: calc(33% - 40px);
//    display flex
//    justify-content space-between
//    padding 0 20px
//    border-radius 7px
//    align-items center
//    .desc{
//      white-space nowrap
//    }
//    .imgs{
//      height 100%
//      width 100%
//    }
//  }
//}
.container
  position relative
  margin 1rem auto
  .aside
    position relative
  @media (max-width $MQMobile - 1px)
    margin 0.5rem auto
  &:not(.show-aside)
    .main
      width 100%

    .aside
      display none
  &.show-aside
    @media (min-width $MQWide)
      .main
        width 75%
      .aside
        width 25%
    @media (max-width $MQWide - 1px) and (min-width $MQMobile)
      .main
        width 70%
      .aside
        width 30%
    @media (min-width $MQMobile)
      .main
        float left
      .aside
        float left
        padding-left 1rem
    @media (max-width $MQMobile - 1px)
      .main
        width 100%
      .aside
        display none
</style>
