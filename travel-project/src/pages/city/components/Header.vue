<template>
  <div class="header">
    <router-link to="/">
      <div class="iconContainer">
        <i class="iconfont arrowLeftIcon"></i>
      </div>
    </router-link>城市选择
  </div>
</template>

<script>
export default {
  name: "CityHeader",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang='stylus'>
@import '~styles/varibles.styl'
.header
  position relative
  background $themColor
  height $headerHeight
  line-height $headerHeight
  color #ffffff
  overflow hidden
  text-align center
  font-size 32px
  .iconContainer
    position absolute
    top 0
    left 0
    width 60px
    color #fff
    .arrowLeftIcon:before
      font-size 40px
      content '\e60c'
</style>
