import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

process.env.NODE_ENV === 'development' && Vue.use(Router);

const router = new Router({
    routes
});
router.beforeEach((to, from, next) => {
    // $store.state.showHidden.showHidden
    router.app.$store.dispatch('setResult', to.meta.role);
    console.log(router.app.$store.state.userInfo.result);
    next();
});

export default router;
