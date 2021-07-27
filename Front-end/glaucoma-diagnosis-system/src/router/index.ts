import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import Login from '/src/views/Login.vue'
import Register from '/src/views/Register.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router