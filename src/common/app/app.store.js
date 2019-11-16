import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    users: []
  },

  mutations: {
    posts(state, value) {
      state.posts = value;
    },
    users(state, value) {
      state.users = value;
    }
  },

  actions: {
    async posts(store) {
      const postsResp = await axios.get('posts.json');

      store.commit('posts', postsResp.data);
    },
    async users(store) {
      const usersResp = await axios.get('users.json');

      store.commit('posts', usersResp.data);
    }
  }
});
