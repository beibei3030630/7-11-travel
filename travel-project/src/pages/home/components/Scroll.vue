<template>
  <div class="scrollContainer">
    <div class="scroll">
      <div class="tag" v-for="item of tagList" :key="item.id">{{item.tagContent}}</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props:{
    tagList:Array
  },
  data() {
    return {
      
    };
  },
  methods: {}
};
</script>

<style scoped lang='stylus'>
.scrollContainer
  height 80px
  overflow hidden
  .scroll
    height 120px
    background #f5f5f5
    white-space nowrap
    overflow-x scroll
    overflow-y hidden
    -webkit-overflow-scrolling touch
    min-width 100%
    .tag:first-child
      margin-left 14px
    .tag
      margin 14px 14px 14px 0
      background #ffffff
      height 52px
      line-height 52px
      padding-left 20px
      padding-right 20px
      display inline-block
      vertical-align top
</style>
