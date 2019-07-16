<template>
  <div class="bannerContainer" v-show="!this.galleryShow" @click="showGallery">
    <img class="bannerImg" :src="bannerInfo.bannerImg" />
    <div class="mask">
      <div class="title">{{bannerInfo.sightName}}</div>
      <div class="picNum">
        <i class="iconfont picIcon"></i>
        <span>{{bannerInfo.bannerImgNum}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Banner",
  props: {
    bannerInfo: Object
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["galleryShow"])
  },
  methods: {
    showGallery() {
      this.$store.commit("changeGallery");
    }
  }
};
</script>

<style scoped lang='stylus'>
.bannerContainer
  width 100%
  padding-bottom 54.67%
  overflow hidden
  height 0
  position relative
  .bannerImg
    width 100%
  .mask
    width 100%
    background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    position absolute
    bottom 0
    height 50px
    line-height 50px
    display flex
    padding 0 20px
    box-sizing border-box
    justify-content space-between
    .title
      color #fff
    .picNum
      background #333
      color #fff
      border-radius 30px
      padding 0 20px
      text-align center
      .picIcon:before
        content '\e63c'
        color #fff
      span
        padding-left 10px
</style>
