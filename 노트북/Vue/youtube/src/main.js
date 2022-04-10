import Vue from 'vue'
import App from './App.vue'
import Reset from './css/reset.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  Reset
}).$mount('#app')
