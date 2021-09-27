import { createRouter, createWebHistory } from 'vue-router'
import Login from '/src/views/Login.vue'
import Register from '/src/views/Register.vue'
import Reception from '/src/views/Reception.vue'
import user from '/src/views/user.vue'
import Diagnose from '/src/views/Diagnose.vue'
import AdminDashboard from '/src/views/admin/Dashboard.vue'
import HCDashboard from '/src/views/health-care-center/Dashboard.vue'
import adminmanage from '/src/views/adminManage.vue'
import PatientQueue from '/src/views/health-care-center/PatientQueue.vue'


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
        path: '/user',
        name: 'user',
        component: user,
    },
    {
        path: '/diagnose/:patientId',
        name: 'Diagnose',
        component : Diagnose,
    },
    {
        path: '/patientQueue',
        name: 'PatientQueue',
        component : PatientQueue,
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
});

router.beforeEach((to, from, next) => {
    const isLoggedIn = JSON.parse(localStorage.getItem('user')) || {};
    if (to.name === 'Register') {
        next()
    } else if (to.name !== 'Login'  && Object.keys(isLoggedIn).length === 0) {
        next({ name: 'Login' })
    }
    else {
        next()
    } 
});
export default router