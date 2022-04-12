import Vue from 'vue';
import App from './App.vue';
import Reset from './css/reset.css';
import Router from './router/index.js';
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  Reset,
  router,
  Router
}).$mount('#app')
