import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js'
import { store } from './store/index.js'
import { css } from './common.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  css
}).$mount('#app')
