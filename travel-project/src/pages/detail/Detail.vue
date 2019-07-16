<template>
  <div>
    <detail-banner :bannerInfo="bannerInfo"></detail-banner>
    <detail-gallery :gallaryImgs="gallaryImgs"></detail-gallery>
  </div>
</template>

<script>
import DetailBanner from "./components/Banner";
import DetailGallery from "../../common/gallery/Gallery";
import axios from "axios";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailGallery
  },
  data() {
    return {
      categoryList: null,
      gallaryImgs: null,
      bannerInfo: {}
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
          bannerImgNum:detailRes.data.gallaryImgs.length
        };
      }
    }
  },
  async mounted() {
    const detailData = await axios.get("/api/detail.json");
    this.getDetailData(detailData);
  }
};
</script>

<style scoped lang='stylus'></style>
