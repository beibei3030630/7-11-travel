import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex); //Vuex是个插件，如果Vue要使用插件都要使用use

export default new Vuex.Store({
  state: {
    city: "北京"
  },
  actions: {
      changeCity(context,cityName){
        context.commit('changeCity',cityName)
      }
  },
  mutations: {
    changeCity(state,cityName) {
      state.city = cityName;
    }
  }
});
