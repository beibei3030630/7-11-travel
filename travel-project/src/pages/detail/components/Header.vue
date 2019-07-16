<template>
  <div>
    <router-link class="backContaienr" tag="div" to="/" v-show="!showHeader">
      <i class="iconfont backIcon"></i>
    </router-link>
    <div class="headerContainer" v-show="showHeader" :style="opacityStyle">
      <router-link class="iconfont backIcon" to="/" tag="i"></router-link>
      <div class="subTitle">大连圣亚海洋世界</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  components: {},
  data() {
    return {
      showHeader: false,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  methods: {
    handleScroll() {
      const currentY = document.documentElement.scrollTop;
      if (currentY > 50) {
        this.showHeader = true;
        let opacityDegree = currentY / 200;
        opacityDegree = opacityDegree > 1 ? 1 : opacityDegree;
        this.opacityStyle = { opacity: opacityDegree };
      } else {
        this.showHeader = false;
      }
    }
  },
  activated() {
    window.addEventListener("scroll", this.handleScroll);
  },
  deactivated() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped lang='stylus'>
@import '~styles/varibles.styl'
.backContaienr
  height 70px
  width 70px
  background rgba(0, 0, 0, 0.4)
  position absolute
  top 20px
  left 20px
  border-radius 50px
  .backIcon:before
    content '\e60c'
    color #fff
    position absolute
    left 8px
    top 15px
    font-size 45px
.headerContainer
  position fixed
  left 0
  right 0
  top 0
  background $themColor
  height 86px
  line-height 86px
  text-align center
  display flex
  justify-content center
  .backIcon:before
    content '\e60c'
    color #fff
    position absolute
    left 15px
    font-size 45px
  .subTitle
    color #ffffff
    font-size 28px
    letter-spacing 2px
</style>
