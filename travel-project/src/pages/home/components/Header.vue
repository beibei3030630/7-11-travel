<template>
  <div class="headerContaier">
    <div class="headerLeft">
      <i class="iconfont returnIcon"></i>
    </div>
    <div class="headerInput">
      <i class="iconfont searchIcon"></i>
      输入城市景点/游玩主题
    </div>
    <router-link :to="{path:'/city'}">
      <div class="headerRight">
        {{this.$store.state.city}}
        <i class="iconfont arrowIcon"></i>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.headerContaier
  background-color $themColor
  display flex
  flex-direction row
  align-items center
  height $headerHeight
  color #fff
  .headerLeft
    width 64px
    float left
    .returnIcon:before
      content '\e60c'
      margin-left 20px
      font-size 35px
  .headerInput
    flex 1
    background-color #fff
    border-radius 10px
    height 64px
    line-height 64px
    margin-left 20px
    color #aaa
    text-indent 0.5em
    .searchIcon:before
      content '\e735'
      font-size 40px
      position relative
      top 7px
  .headerRight
    float right
    text-align center
    color #fff
    margin 0 10px
    .arrowIcon:before
      content '\e64a'
      font-size 15px
</style>
