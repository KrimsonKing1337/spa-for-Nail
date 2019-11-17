<script>
  import {mapGetters} from 'vuex';

  import Header from '@/components/Header';
  import PostSingle from '@/components/PostSingle';

  export default {
    name: 'Post',

    components: {
      Header,
      PostSingle
    },

    computed: {
      ...mapGetters([
        'posts',
        'users'
      ]),

      postCur() {
        return this.posts[this.$route.params.id - 1];
      },
      userName() {
        const userId = this.postCur.userId - 1;

        return this.users[userId].username;
      },
    },
  };
</script>

<template>
  <div v-if="posts.length > 0 && users.length > 0" class="post-wrapper">
    <Header />

    <PostSingle
      :title="postCur.title"
      :desc="postCur.body"
      :user-name="userName"
    />
  </div>
</template>

<style scoped lang="scss">
  .post-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 50px;
  }
</style>
