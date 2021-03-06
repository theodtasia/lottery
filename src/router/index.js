import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Draw from '../views/Draw.vue';
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import History from '../views/History.vue';


import { getAuth, } from "firebase/auth";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
        meta: {
            title: 'Login' 
          }
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: {
            title: 'Register'
          }
    },
    {
        path: '/draw',
        name: 'Draw',
        component: Draw,
        meta: {
            title: 'Draw',
            authRequired: true,
          }
       
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            title:'Home',
            authRequired: true,
        },
    },
    {
        path: '/history',
        name: 'History',
        component: History,
        meta: {
            title: 'History',
            authRequired: true,
          }
    },
];

const router = new VueRouter({
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)) {
        if (getAuth().currentUser) {
            next();
        } else {
            alert('You must be logged in to see this page');
            next({
                path: '/',
            });
        }
    } else {
        next();
    }
});

export default router;
