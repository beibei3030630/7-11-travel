<template>
  <div class="alphabetContainer">
    <div
      v-for="item of alphabetList"
      class="word"
      :key="item"
      @click="handleWord"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      :ref="item"
    >{{item}}</div>
  </div>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cityList: Object
  },
  components: {},
  data() {
    return {
      touchFlag: false,
      moving: null,
      startY:0
    };
  },
  computed: {
    alphabetList() {
      const alphabet = [];
      for (var key in this.cityList) {
        alphabet.push(key);
      }
      return alphabet;
    }
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    handleWord(e) {
      const handleWord = e.target.innerText;
      this.$emit("changeWord", handleWord);
    },
    handleTouchStart() {
      this.touchFlag = true;
    },
    handleTouchMove(e) {
      if (this.touchFlag) {
        if (this.moving) {
          clearTimeout(this.moving);
        }
        this.moving = setTimeout(() => {
          const touchY = e.touches[0].clientY - 78;
          const index = Math.floor((touchY - this.startY) / 18);
          if (index >= 0 && index < this.alphabetList.length) {
            this.$emit("changeWord", this.alphabetList[index]);
          }
        }, 16);
      }
    },
    handleTouchEnd() {
      this.touchFlag = false;
    }
  }
};
</script>

<style scoped lang='stylus'>
@import '~styles/varibles.styl'
.alphabetContainer
  z-index 99
  position absolute
  right 20px
  top 156px
  bottom 0
  text-align center
  display flex
  flex-direction column
  justify-content center
  .word
    margin-bottom 8px
    color $themColor
</style>
