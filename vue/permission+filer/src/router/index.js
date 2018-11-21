import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

process.env.NODE_ENV === 'development' && Vue.use(Router);

const router = new Router({
    routes
});
router.beforeEach((to, from, next) => {
    router.app.$store.dispatch('setResult', to.meta.role);
    console.log(router.app.$store.state.userInfo.result || !to.meta.role);
    if (['/login'].indexOf(to.path) !== -1) {
        next();
    } else if (router.app.$store.state.userInfo.result || !to.meta.role) {
        next();
    } else {
        console.log(1);
        next({
            path: '/login'
        });
    }
});

export default router;
