// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/assets/styles';
import Vue from 'vue';
import api from '@/api';
import constant from '@/constant';
import store from '@/store';
import router from '@/router';
import App from '@/App';
import scripts from '@/scripts';
import vfilter from '@/filers';
Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.prototype.$const = constant;
Vue.prototype.$scripts = scripts;
for (let key in vfilter) {
    for (let k in vfilter[key]) {
        Vue.filter(k, vfilter[key][k]);
    }
}
/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
});
