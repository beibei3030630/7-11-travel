<template>
  <div class="listContainer" ref="wrapper">
    <div>
      <div class="area">
        <div class="subtitle border-topbottom">您的位置</div>
        <div class="contentContainer">
          <div class="tag tagSelected">{{this.currentCity}}</div>
        </div>
      </div>
      <div class="area">
        <div class="subtitle border-topbottom">热门城市</div>
        <div class="contentContainer">
          <div @click="changeCity(item.name)" class="tag" v-for="item of hotCity" :key="item.id">
            <span class="tagText">{{item.name}}</span>
          </div>
        </div>
      </div>
      <div class="area" v-for="(cityArr,firstWord,index) of cityList" :key="index" :ref="firstWord">
        <div class="subtitle border-topbottom">{{firstWord}}</div>
        <ul>
          <li
            @click="changeCity(item.name)"
            class="listItem"
            v-for="item of cityArr"
            :key="item.id"
          >
            <span class="itemText">{{item.name}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
import { mapState } from "vuex";
export default {
  name: "CityList",
  props: {
    hotCity: Array,
    cityList: Object,
    handleWord: String
  },
  mounted() {
   this.scroll = new Bscroll(this.$refs.wrapper);
   console.log(this.scroll)
  },
  computed: {
    ...mapState({
      currentCity: "city"
    })
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    changeCity(cityName) {
      this.$store.commit("changeCity", cityName);
      this.$router.push("/");
    }
  },
  watch: {
    handleWord() {
      if (this.handleWord) {
        this.scroll.scrollToElement(this.$refs[this.handleWord][0]);
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
      .itemText
        color $darkColorText
        width 100%
        height 100%
        display block
    .listItem:first-child
      border-top none
</style>
