<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id" v-if="showSwiper">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props:{
    swiperList:Array
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true
      }
    };
  },
  mounted() {},
  computed:{
    showSwiper(){
      return this.swiperList.length
    }
  }
};
</script>
 <style lang="stylus" scoped>
 .wrapper>>>.swiper-pagination
  position relative
  top -35px
 .wrapper>>>.swiper-pagination-bullet-active
   background #fff
 .wrapper
   width 100%
   height 0
   overflow hidden
   padding-bottom 31.25%
   .swiper-img
     width 100%
</style>

