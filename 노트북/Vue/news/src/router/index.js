import { createRouter , createWebHistory } from 'vue-router'
import News from '../views/NewsView.vue'
import Jobs from '../views/JobsView.vue'
import Ask from '../views/AskView.vue'
import Item from '../views/ItemView.vue'
import User from '../views/UserView.vue'

const routes = [
    {
        path : '/News',
        name : 'news',
        component : News
    },
    {
        path : '/Jobs',
        name : 'jobs',
        component : Jobs
    },
    {
        path : '/Ask',
        name : 'ask',
        component : Ask
    },
    {
        path : '/Item/:id',
        component : Item
    },
    {
        path : '/User/:id',
        component : User
    }
]

export const router = createRouter({
    history : createWebHistory(),
    routes
})