import Vue from 'vue';
import VueRouter from 'vue-router';

import Err404 from 'pages/Err404';
import Main from 'pages/Main';
import Post from 'pages/Post';
import User from 'pages/User';

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
    },
    {
      path: '/post/:id',
      component: Post
    },
    {
      path: '/user/:id',
      component: User
    }
  ]
});
