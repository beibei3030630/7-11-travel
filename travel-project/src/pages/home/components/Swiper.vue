<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true
      },
      swiperList: [
        {
          id: "001",
          imgUrl:
            "//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/0677c297245b8a489ee12ab9b165c928.jpg_945x288_600cb364.jpg"
        },
        {
          id: "002",
          imgUrl:
            "//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/3f5ff03fa0c024b930f515e63ae2c702.jpg_945x288_7dff4510.jpg"
        }
      ]
    };
  },
  mounted() {}
};
</script>
 <style lang="stylus" scoped>
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

