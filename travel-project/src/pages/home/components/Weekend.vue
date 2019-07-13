<template>
  <div class="mainContainer">
    <div class="subTitle">周末去哪儿</div>
    <ul>
      <li class="weekendContainer" v-for="item of weekendList" :key="item.id">
        <div class="imgWrapper">
          <img class="coverImg" :src="item.imgUrl" />
        </div>
        <div class="weekendContent">
          <p class="title">{{item.title}}</p>
          <p class="description">{{item.description}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  components: {},
  props:{
    weekendList:Array
  },
  data() {
    return {
      
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
  .subTitle
    background-color $subTitleColor
    width 100%
    height 60px
    line-height 60px
    padding-left 40px
  .weekendContainer
    width 100%
    .imgWrapper
      width 100%
      height 0
      padding-bottom 25.6%
      overflow hidden
      .coverImg
        width 100%
    .weekendContent
      margin 10px 20px
      min-width 0
      .title
        ellipsis()
      .description
        color #d9d9d9
        margin-top 10px
        ellipsis()
</style>
