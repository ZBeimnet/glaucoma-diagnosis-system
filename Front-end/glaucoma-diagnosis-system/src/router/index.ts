import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import Login from '/src/views/Login.vue'
import Register from '/src/views/Register.vue'
import Reception from '/src/views/Reception.vue'
import Labratory from '/src/views/Labratory.vue'
import Diagnose from '/src/views/Diagnose.vue'
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
    {

        path: '/reception',
        name: 'Reception',
        component: Reception,
    },
    {
        path: '/lab',
        name: 'Labratory',
        component: Labratory,
    },
    {
        path: '/diagnose',
        name: 'Diagnose',
        component : Diagnose,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router