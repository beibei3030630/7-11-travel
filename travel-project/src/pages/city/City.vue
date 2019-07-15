<template>
  <div>
    <city-header></city-header>
    <city-search :cityList="cityList"></city-search>
    <city-list :hotCity="hotCity" :cityList="cityList" :handleWord="handleWord"></city-list>
    <city-alphabet :cityList="cityList" @changeWord="changeWord"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from "./components/Header.vue";
import CitySearch from "./components/Search.vue";
import CityList from "./components/List.vue";
import CityAlphabet from "./components/Alphabet.vue";
import axios from "axios";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      hotCity: null,
      cityList: null,
      handleWord: ""
    };
  },
  mounted() {
    this.requestCityData();
  },
  methods: {
    async requestCityData() {
      try {
        const res = await axios({
          method: "get",
          url: "/api/city.json"
        });
        const requestData = res.data;
        if (requestData.ret && requestData.data) {
          this.hotCity = requestData.data.hotCities;
          this.cityList = requestData.data.cities;
        }
      } catch (error) {
        console.log(error);
      }
    },
    changeWord(word) {
      this.handleWord = word;
    }
  }
};
</script>

<style scoped lang='stylus'></style>
