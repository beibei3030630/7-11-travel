<template>
  <div class="mainContainer">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="iconsContainer">
          <div class="icon" v-for="item of page" :key="item.id">
            <img :src="item.imgUrl" />
            <span>{{item.text}}</span>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    iconList: Array
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
  computed: {
    pages() {
      const pages = [];
      const pageMaxNum = 8;
      const iconList = this.iconList;
      if (!iconList) return;
      iconList.forEach((item, index) => {
        const pageNum = Math.floor(index / pageMaxNum);
        if (!pages[pageNum]) {
          pages[pageNum] = [];
        }
        pages[pageNum].push(item);
      });
      return pages;
    }
  },
  methods: {}
};
</script>
 
<style scoped lang='stylus'>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.mainContainer>>>.swiper-pagination
  position relative
  top 0
.mainContainer>>>.swiper-pagination-bullet-active
  background $themColor
.iconsContainer
  width 100%
  height 300px
  display flex
  flex-flow row wrap
  .icon
    width 25%
    height 50%
    display flex
    flex-direction column
    align-items center
    justify-content center
    img
      height 80px
      width 80px
      margin-bottom 10px
    span
      color $darkColorText
      font-size 10px
      width 70%
      text-align center
      ellipsis()
</style>
