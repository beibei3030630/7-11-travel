<template>
  <div class="searchContainer">
    <div class="searchInput searchText" v-if="!inputFlag" @click="showSearchInput">输入城市名或拼音</div>
    <input type="text" class="searchInput inputDetail" v-else v-focus @blur.prevent="showSearchInput" />
  </div>
</template>

<script>
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
  data() {
    return {
      inputFlag: false
    };
  },
  methods: {
    showSearchInput() {
      this.inputFlag = !this.inputFlag;
    }
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
</style>
