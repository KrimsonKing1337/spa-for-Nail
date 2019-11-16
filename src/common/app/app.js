import Vue from 'vue';
import router from './app.routes.js';
import store from './app.store';
import Fragment from 'vue-fragment';

Vue.use(Fragment.Plugin);

new Vue({
  router,
  store
}).$mount('#app');
