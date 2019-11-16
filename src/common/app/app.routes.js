import Vue from 'vue';
import VueRouter from 'vue-router';

import Err404 from 'pages/Err404';
import Main from 'pages/Main';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '*',
      component: Err404
    },
    {
      path: '/error-404',
      component: Err404
    },
    {
      path: '/',
      component: Main
    }
  ]
});
