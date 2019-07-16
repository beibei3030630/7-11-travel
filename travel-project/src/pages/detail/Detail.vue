<template>
  <div>
    <detail-banner :bannerInfo="bannerInfo"></detail-banner>
    <detail-gallery :gallaryImgs="gallaryImgs"></detail-gallery>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :categoryList="categoryList" :isChild="isChild"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from "./components/Banner";
import DetailGallery from "../../common/gallery/Gallery";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";
import axios from "axios";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailGallery,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      categoryList: null,
      gallaryImgs: null,
      bannerInfo: {},
      isChild: false,
      lastId: 0
    };
  },
  methods: {
    getDetailData(data) {
      const detailRes = data.data;
      if (detailRes.ret && detailRes.data) {
        this.categoryList = detailRes.data.categoryList;
        this.gallaryImgs = detailRes.data.gallaryImgs;
        this.bannerInfo = {
          bannerImg: detailRes.data.bannerImg,
          sightName: detailRes.data.sightName,
          bannerImgNum: detailRes.data.gallaryImgs.length
        };
      }
    }
  },
  mounted() {},
  async activated() {
    const currentId = this.$route.params.id;
    if (this.lastId != currentId) {
      this.lastId = currentId;
      const detailData = await axios.get("/api/detail.json", {
        params: {
          id: this.$route.params.id
        }
      });
      this.getDetailData(detailData);
    }
  }
};
</script>

<style scoped lang='stylus'>
.content
  background #eee
  min-height 1600px
</style>
