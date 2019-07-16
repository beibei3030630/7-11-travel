<template>
  <div class="galleryContainer" v-show="this.$store.state.galleryShow" @click="changeGallery">
    <div class="imgContainer">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item,index) of gallaryImgs" :key="index">
          <img :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  name: "Gallery",
  props: {
    gallaryImgs: Array
  },
  components: {},
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        },
        loop: true
      }
    };
  },
  methods: {
    changeGallery() {
      this.changeGallery;
    },
    ...mapMutations(["changeGallery"])
  }
};
</script>

<style scoped lang='stylus'>
.imgContainer >>> .swiper-container
  overflow inherit
.galleryContainer
  display flex
  flex-direction column
  justify-content center
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  background #000
  z-index 99
  .imgContainer
    width 100%
    height 0
    padding-bottom 100%
    img
      width 100%
    .swiper-pagination
      color #fff
      position absolute
      bottom -100px
</style>
