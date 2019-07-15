import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import actions from "./actions";
import mutations from "./mutations";
Vue.use(Vuex); //Vuex是个插件，如果Vue要使用插件都要使用use

export default new Vuex.Store({
  state,
  getters:{
    newCityName(state){
      return state.city=state.city+" "+state.city
    }
  },
  actions,
  mutations
});
