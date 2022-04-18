import { createRouter , createWebHistory } from 'vue-router'
import NewsView from '../view/NewsView.vue'
import JobsView from '../view/JobsView.vue'
import AskView from '../view/AskView.vue'

const routes = [
    {
        path : '/NewsView',
        component : NewsView
    },
    {
        path : '/JobsView',
        component : JobsView
    },
    {
        path : '/AskView',
        component : AskView
    }
]

export const router = createRouter({
    history : createWebHistory(),
    routes
})