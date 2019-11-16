<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'Posts',

    computed: {
      ...mapGetters([
        'posts',
        'users'
      ])
    },

    mounted() {
      this.$store.dispatch('GET_POSTS');
      this.$store.dispatch('GET_USERS');
    },

    methods: {
      getUserName(postCur) {
        return this.users[postCur.userId - 1].username;
      }
    }
  };
</script>

<template>
  <div class="posts">
    <div v-for="postCur in posts" :key="postCur.uuid" class="post">
      <div class="title">
        {{ postCur.title }}
      </div>

      <div class="desc">
        {{ postCur.body }}
      </div>

      <div class="name">
        {{ getUserName(postCur) }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
