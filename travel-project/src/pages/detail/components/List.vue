<template>
  <div class="listContainer">
    <div v-for="item of categoryList">
      <p class="listHeader border-bottom">
        <i v-show="!isChild" class="iconfont ticketIcon"></i>
        <span>{{item.title}}</span>
      </p>
      <div v-if="item.children" class="childrenItem">
        <detail-list :categoryList="item.children" :isChild="isChildData"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailList",
  components: {},
  props: {
    categoryList: Array,
    isChild:Boolean
  },
  data() {
    return {
      isChildData:true
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style scoped lang='stylus'>
@import '~styles/varibles.styl'
.listContainer
  width 100%
  background #fff
  box-sizing border-box
  .listHeader
    height 90px
    line-height 90px
    font-size 35px
    padding-left 20px
    margin-bottom 10px
    .ticketIcon:before
      content '\e633'
      font-size 40px
      color $themColor
    span
      padding-left 20px
  .childrenItem
    padding-left 40px
    width 100%
    box-sizing border-box
</style>
