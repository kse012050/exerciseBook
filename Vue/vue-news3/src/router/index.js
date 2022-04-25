import { createRouter , createWebHistory } from 'vue-router'
import News from '../views/NewsView.vue'
import Jobs from '../views/JobsView.vue'
import Ask from '../views/AskView.vue'
import Item from '../views/ItemView.vue'
import User from '../views/UserView.vue'

const routes = [
    {
        path : '/News',
        component : News
    },
    {
        path : '/Jobs',
        component : Jobs
    },
    {
        path : '/Ask',
        component : Ask
    },
    {
        path : '/Item',
        component : Item
    },
    {
        path : '/User',
        component : User
    }
]

export const router = createRouter({
    history : createWebHistory(),
    routes
})