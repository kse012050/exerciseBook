import Vue from 'vue'
import App from './App.vue'
import { router } from './routers/index.js'
import { resetCss } from './css/reset.scss'
import { pageCss} from './css/page.scss'
import { modal } from 'vue-js-modal';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  resetCss,
  pageCss,
  modal
}).$mount('#app')
