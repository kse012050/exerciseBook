/* esline-disable */

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index.js'
import Vuex from 'vuex';
import { store } from './store/index.js'

const app = createApp(App);
app.use(router)
app.use(Vuex);
app.use(store)
app.mount('#app')