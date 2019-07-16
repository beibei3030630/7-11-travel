<template>
  <div>
    <div class="header">
      <home-header></home-header>
    </div>
    <div class="content" ref="mainContainer">
      <div>
        <home-swiper :swiperList="dataList.swiperList"></home-swiper>
        <home-icons :iconList="dataList.iconList"></home-icons>
        <home-recommend :recommendList="dataList.recommendList" :tagList="dataList.tagList"></home-recommend>
        <home-weekend :weekendList="dataList.weekendList"></home-weekend>
      </div>
    </div>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
import HomeScroll from "./components/Scroll";
import axios from "axios";
import { mapState } from "vuex";
import Bscroll from "better-scroll";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
    HomeScroll
  },
  data() {
    return {
      dataList: {},
      lastSelectedCity: this.city
    };
  },
  mounted() {
    this.getHomeInfo();
    this.scroll = new Bscroll(this.$refs.mainContainer);
  },
  activated() {
    if (this.lastSelectedCity != this.city) {
      this.lastSelectedCity = this.city;
      this.getHomeInfo();
    }
  },
  computed: {
    ...mapState(["city"])
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/index.json?city=" + this.city).then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      var res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.dataList = {
          iconList: data.iconList,
          recommendList: data.recommendList,
          swiperList: data.swiperList,
          tagList: data.tagList,
          weekendList: data.weekendList
        };
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.header
  position fixed
  top 0
  left 0
  right 0
  z-index 99
.content
  position absolute
  top 86px
  left 0
  right 0
  bottom 0
  overflow hidden
</style>
