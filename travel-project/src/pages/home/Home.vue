<template>
  <div>
    <home-header :city="selectedCityName||dataList.city"></home-header>
    <home-swiper :swiperList="dataList.swiperList"></home-swiper>
    <home-icons :iconList="dataList.iconList"></home-icons>
    <home-recommend :recommendList="dataList.recommendList" :tagList="dataList.tagList"></home-recommend>
    <home-weekend :weekendList="dataList.weekendList"></home-weekend>
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
      selectedCityName: ""
    };
  },
  mounted() {
    this.getHomeInfo();
    this.changeSelectedCity();
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/index.json").then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      var res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.dataList = {
          city: data.city,
          iconList: data.iconList,
          recommendList: data.recommendList,
          swiperList: data.swiperList,
          tagList: data.tagList,
          weekendList: data.weekendList
        };
      }
    },
    changeSelectedCity() {
      this.selectedCityName = this.$route.query.cityName;
    }
  }
};
</script>

<style lang="stylus" scoped></style>
