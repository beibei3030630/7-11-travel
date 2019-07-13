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
  data() {
    return {
      tagList: [
        {
          id: "001",
          tagContent: "暑期热卖"
        },

        {
          id: "002",
          tagContent: "中秋"
        },
        {
          id: "003",
          tagContent: "国庆"
        },
        {
          id: "004",
          tagContent: "优选商户"
        },
        {
          id: "005",
          tagContent: "玉龙雪山"
        },
        {
          id: "006",
          tagContent: "经典2日游"
        },
        {
          id: "007",
          tagContent: "摄影"
        },
        {
          id: "008",
          tagContent: "无购物团"
        },
        {
          id: "009",
          tagContent: "无自费项目"
        },
        {
          id: "010",
          tagContent: "经典3日游"
        },
      ]
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
