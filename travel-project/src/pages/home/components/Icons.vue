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
  data() {
    return {
      iconList: [
        {
          id: "001",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/hotel.png",
          text: "机票机票机票机票机票"
        },
        {
          id: "002",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/hotel.png",
          text: "机票"
        },
        {
          id: "003",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/flight.png",
          text: "酒店"
        },
        {
          id: "009",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/package.png",
          text: "景点门票"
        },
        {
          id: "004",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/piao.png",
          text: "火车票"
        },
        {
          id: "005",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/train.png",
          text: "度假"
        },
        {
          id: "006",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/group.png",
          text: "特惠酒店"
        },

        {
          id: "007",
          imgUrl:
            "//s.qunarzz.com/homenode/images/touchheader/bargainflight.png",
          text: "低价机票"
        },
        {
          id: "008",
          imgUrl:
            "//s.qunarzz.com/homenode/images/touchheader/aroundtravel.png",
          text: "周边短途"
        }
      ],
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
      this.iconList.forEach((item, index) => {
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
.mainContainer
  width 100%
  overflow hidden
  height 0
  padding-bottom 45%
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
