import Vue from 'vue'
import '@/assets/styles';
import App from './App.vue'
import api from './api';
import constant from '@/constant';
import scripts from '@/scripts';
import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.prototype.$const = constant;
Vue.prototype.$scripts = scripts;
new Vue({
      router,
      store,
      render: h => h(App)
}).$mount('#app')

