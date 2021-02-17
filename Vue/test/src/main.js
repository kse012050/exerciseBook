import Vue from 'vue'
import App from './App.vue'
import { router } from './routers/index.js'
import { resetCss} from './css/reset.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  resetCss,
}).$mount('#app')
