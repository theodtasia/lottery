import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import firebase from 'firebase';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
    },
    {
        path: '/register',
        name: 'Register',
        component: () =>
            import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    },
    {
        path: '/home',
        name: 'Home',
        component: () =>
            import(
                /* webpackChunkName: "homes" */ '../views/Home.vue'
            ),
        meta: {
            authRequired: true,
        },
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)) {
        if (firebase.auth().currentUser) {
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
