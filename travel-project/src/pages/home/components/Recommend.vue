<template>
  <div class="mainContainer">
    <div class="subtitle">热销推荐</div>
    <home-scroll :tagList="tagList"></home-scroll>
    <ul class="recommendList">
      <router-link
        class="recommendContainer border-bottom"
        v-for="item of recommendList"
        :key="item.id"
        tag="li"
        :to="'/detail/'+item.id"
      >
        <img :src="item.imgUrl" class="coverImg" />
        <div class="contentContainer">
          <p class="title">{{item.title}}</p>
          <p class="description">{{item.description}}</p>
          <p class="priceContainer">
            <span class="price">
              ￥
              <em>{{item.price}}</em>
            </span>起
          </p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import HomeScroll from "./Scroll";
export default {
  name: "HomeRecommend",
  props: {
    recommendList: Array,
    tagList: Array
  },
  components: {
    HomeScroll
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
  }
};
</script>

<style scoped lang='stylus'>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.mainContainer
  width 100%
  .subtitle
    background-color $subTitleColor
    width 100%
    height 60px
    line-height 60px
    padding-left 40px
  .recommendContainer
    height 150px
    display flex
    flex-direction row
    align-items center
    padding-left 30px
    padding-right 80px
    .coverImg
      width 120px
      height 120px
    .contentContainer
      min-width 0
      margin-left 30px
      height 85%
      display flex
      flex-direction column
      justify-content space-between
      .title
        font-weight bold
        ellipsis()
      .description
        ellipsis()
        color #aaa
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
        position relative
        bottom 5px
      .priceContainer
        color #e0e0e0
        font-size 24px
        .price
          color #f85836
          em
            font-size 32px
            font-weight bold
            margin-right 10px
</style>
