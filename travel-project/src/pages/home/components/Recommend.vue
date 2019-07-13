<template>
  <div class="mainContainer">
    <div class="subtitle">热销推荐</div>
    <ul class="recommendList">
      <li class="recommendContainer border-bottom" v-for="item of recommendList" :key="item.id">
        <img
          :src="item.imgUrl"
          class="coverImg"
        />
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
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  components: {},
  data() {
    return {
      recommendList:[
        {
          id:"001",
          imgUrl:"//imgs.qunarzz.com/vs_ceph_vs_tts/6a522d5d-a22d-4f19-bef9-f1cfe4151c0e.jpg_r_480x320x90_84238abb.jpg",
          title:"上海-鹿儿岛 5天邮轮",
          description:"艺术巅峰之船【歌诗达邮轮威尼斯号】上海-鹿儿岛-上海4晚5天邮轮之旅",
          price:"1980"
        },
        {
          id:"002",
          imgUrl:"//imgs.qunarzz.com/p/tts1/1811/d4/ef3424bfb2c1ff02.jpg_r_480x320x90_ecf14db8.jpg",
          title:"上海-广州 4天自由行",
          description:"奢华五星双长隆丨宿长隆酒店+横琴湾酒店✔白虎共进早餐，野生动物园+海洋王国",
          price:"5046"
        },
        {
          id:"003",
          imgUrl:"//imgs.qunarzz.com/vs_ceph_vs_tts/6a522d5d-a22d-4f19-bef9-f1cfe4151c0e.jpg_r_480x320x90_84238abb.jpg",
          title:"上海-澳门 3天自由行",
          description:"推荐！澳门3日2晚喜来登金沙城中心酒店|可升级4天行程/更多特色酒店",
          price:"1440"
        },
        {
          id:"004",
          imgUrl:"//imgs.qunarzz.com/p/tts8/1805/a4/4370fd60a5ef7d02.jpg_r_480x320x90_39c3f4e1.jpg",
          title:"上海-芽庄 6天跟团游",
          description:"近海四星-上海直飞芽庄5或6天：漫步天堂湾，出海一日游，美肤泥浆浴+海洋馆",
          price:"1399"
        }
      ]
    };
  },
  methods: {}
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
