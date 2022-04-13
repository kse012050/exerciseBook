import Vue from 'vue'
import VueRouter from 'vue-router'
import VideoList from '../components/VideoList.vue'
// import Test from '../components/Test.vue'
import VideoItem from '../views/VideoItem.vue'
import HomeTest from '../views/Home.vue';
Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      component : VideoList
    },
    {
      path: '/item',
      component : VideoItem
    },
    {
      path: '/home',
      component : HomeTest
    },
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
