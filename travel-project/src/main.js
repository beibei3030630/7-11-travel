// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import fastClick from "fastclick";
import "styles/reset.css";
import "styles/border.css";
import "styles/iconfont.css";
import 'swiper/dist/css/swiper.css'
import store from './store/index.js'

Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,//在根实例中，把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  components: { App },
  template: "<App/>"
});
