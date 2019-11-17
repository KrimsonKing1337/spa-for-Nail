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
      },
      getShrinkDesc(desc) {
        const tooLong = desc.length > 200;
        const shortDesc = desc.substr(0, 200);

        return tooLong ? `${shortDesc}...` : shortDesc;
      }
    }
  };
</script>

<template>
  <div class="posts-wrapper">
    <div v-for="postCur in posts" :key="postCur.uuid" class="post">
      <div class="title">
        {{ postCur.title }}
      </div>

      <div class="desc">
        {{ getShrinkDesc(postCur.body) }}
      </div>

      <div class="name">
        Автор: {{ getUserName(postCur) }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

 .posts-wrapper {
   margin-top: 31px;
 }

  .post {
    max-width: 600px;
    margin-top: 20px;

    &:nth-child(1) {
      margin-top: 0;
    }
  }

  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 12px;
  }

  .desc {
    font-style: italic;
  }

  .name {
    font-size: 12px;
    margin-top: 7px;
  }
</style>
