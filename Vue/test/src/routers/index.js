import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue'
import Brand from '../views/Brand.vue'
import Channel from '../views/Channel.vue'
import Magazines from '../views/Magazines.vue'


Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        {
            path:'/',
            redirect:'/home'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/brand',
            component: Brand
        },
        {
            path: '/channel',
            component: Channel
        },
        {
            path: '/magazines',
            component: Magazines
        },
    ]
});