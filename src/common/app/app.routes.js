import Vue from 'vue';
import VueRouter from 'vue-router';
import Err404 from 'pages/Err404';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '*',
      component: Err404
    },
    {
      path: 'error_404',
      component: Err404
    },
  ]
});
