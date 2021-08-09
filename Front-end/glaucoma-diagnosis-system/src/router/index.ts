import { createRouter, createWebHistory } from 'vue-router'
import Login from '/src/views/Login.vue'
import Register from '/src/views/Register.vue'
import Reception from '/src/views/Reception.vue'
import Labratory from '/src/views/Labratory.vue'
import Diagnose from '/src/views/Diagnose.vue'
import AdminDashboard from '/src/views/admin/Dashboard.vue'
import HCDashboard from '/src/views/health-care-center/Dashboard.vue'
import adminmanage from '/src/views/adminManage.vue';


const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
    },
    {
        path:'/admin/manage',
        name:'Manage',
        component:adminmanage
    },
    {
        path: '/dashboard',
        name: 'HCDashboard',
        component: HCDashboard,
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
    },
    {
        path: '/admin/dashboard',
        name: 'AdminDashboard',
        component: AdminDashboard,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'is-active'
})
export default router