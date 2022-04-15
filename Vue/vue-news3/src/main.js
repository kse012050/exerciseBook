import { createApp } from 'vue'
import App from './App.vue'
import { createRouter , createWebHistory } from 'vue-router'
import TesTest from './view/TesTest.vue'

const routes = [
    {
        path : '/TesTest',
        name : '/TesTest',
        component : TesTest
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

const app = createApp(App);
app.use(router)
app.mount('#app')
