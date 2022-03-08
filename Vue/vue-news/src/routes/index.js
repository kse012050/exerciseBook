import Vue from 'vue';
import VueRouter from 'vue-router';
import News from '../views/NewsView.vue';
import Jobs from '../views/JobsView.vue';
import Ask from '../views/AskView.vue';
import Item from '../views/ItemView.vue';
import User from '../views/UserView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes : [
        {
            path : '/',
            redirect : '/news'
        },
        {
            // path : url 주소
            path : '/news',
            // componenet : url 주소로 갔을 때 표시될 컴포넌트
            component : News
        },
        {
            path : '/ask',
            component : Ask
        },
        {
            path : '/jobs',
            component : Jobs
        },
        {
            path : '/user',
            component : User
        },
        {
            path : '/item',
            component : Item
        },
        {
            path: '/user/:id',
            component: User
        }
    ]
})