<template>
  <div class="listContainer" ref="wrapper">
    <div>
      <div class="area">
        <div class="subtitle border-topbottom">您的位置</div>
        <div class="contentContainer">
          <div class="tag tagSelected">{{currentCity}}</div>
        </div>
      </div>
      <div class="area">
        <div class="subtitle border-topbottom">热门城市</div>
        <div class="contentContainer">
          <div class="tag" v-for="item of hotCity" :key="item.id">
            <router-link :to="{path:'/',query:{cityName:item.name}}">
              <span class="tagText">{{item.name}}</span>
            </router-link>
          </div>
        </div>
      </div>
      <div class="area" v-for="(cityArr,firstWord,index) of cityList" :key="index" :ref="firstWord">
        <div class="subtitle border-topbottom">{{firstWord}}</div>
        <ul>
          <li class="listItem" v-for="item of cityArr" :key="item.id">
            <router-link :to="{path:'/',query:{cityName:item.name}}">
              <span class="listItemText">{{item.name}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "CityList",
  props: {
    hotCity: Array,
    cityList: Object,
    currentCity: String,
    handleWord: String
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper);
    console.log(this.$refs)
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  watch: {
    handleWord() {
     if(this.handleWord){
       this.scroll.scrollToElement(this.$refs[this.handleWord][0])
     }
    }
  }
};
</script>

<style scoped lang='stylus'>
@import '~styles/varibles.styl'
.border-topbottom:before
  border-color #d7d7d7
.border-topbottom:after
  border-color #d7d7d7
.listContainer
  overflow hidden
  position absolute
  top 156px
  left 0
  right 0
  bottom 0
  .area
    width 100%
    .subtitle
      background #eee
      height 40px
      line-height 40px
      padding-left 30px
      font-size 12px
    .contentContainer
      padding 10px 80px 10px 20px
      display flex
      flex-flow row wrap
      justify-content space-between
      .tag
        color $darkColorText
        margin 8px 5px
        border 1px solid #d7d7d7
        font-size 10px
        width 29%
        text-align center
        line-height 45px
        border-radius 8px
        .tagText
          width 100%
          height 100%
          display block
          color #000
      .tagSelected
        color $themColor
        border 1px solid $themColor
    .listItem
      padding 15px 20px
      border-top 1px solid #d7d7d7
      .listItemText
        color $darkColorText
        display block
        height 100%
        width 100%
    .listItem:first-child
      border-top none
</style>
