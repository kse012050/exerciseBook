import { createRouter , createWebHistory } from 'vue-router'
import TesTest from '../view/TesTest.vue'

const routes = [
    {
        path : '/TesTest',
        name : '/TesTest',
        component : TesTest
    }
]

export const router = createRouter({
    history : createWebHistory(),
    routes
})