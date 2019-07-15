<template>
  <div>
    <div class="searchContainer">
      <div class="searchInput searchText" v-if="!inputFlag" @click="showSearchInput">输入城市名或拼音</div>
      <input
        type="text"
        class="searchInput inputDetail"
        v-else
        v-focus
        @blur.prevent="showSearchInput"
        v-model="keyWord"
      />
    </div>
    <div class="searchPannel" ref="searchPannel" v-show="keyWord">
      <ul>
        <li class="list-item border-bottom" :key="item.id" v-for="item of list">{{item.name}}</li>
        <li class="list-item border-bottom" v-show="hasNoData">暂无相关城市</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "CitySearch",
  components: {},
  directives: {
    focus: {
      // 指令的定义
      inserted: function(el) {
        el.focus();
      }
    }
  },
  props: {
    cityList: Object
  },
  data() {
    return {
      inputFlag: false,
      keyWord: "",
      list: [],
      timer: null
    };
  },
  computed:{
    hasNoData(){
      return !this.list.length
    }
  },
  methods: {
    showSearchInput() {
      this.inputFlag = !this.inputFlag;
      this.keyWord=""
    }
  },
  watch: {
    keyWord() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cityList) {
          this.cityList[i].forEach(value => {
            if (
              value.name.indexOf(this.keyWord) > -1 ||
              value.spell.indexOf(this.keyWord) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  },
  mounted() {
    this.inputFlag = false;
    this.scroll = new Bscroll(this.$refs["searchPannel"]);
  }
};
</script>

<style scoped lang='stylus'>
@import '~styles/varibles.styl'
.searchContainer
  background $themColor
  display flex
  .searchInput
    background #fff
    margin 10px 30px
    height 50px
    line-height 50px
    color #6c6c6c
    border-radius 5px
    flex 1
  .searchText
    text-align center
  .inputDetail
    box-sizing border-box
    padding 0 10px
.searchPannel
  position absolute
  top 156px
  left 0
  right 0
  bottom 0
  overflow hidden
  background #eee
  z-index 100
  .list-item
    background #ffffff
    line-height 50px
    font-size 26px
    padding-left 40px
</style>
