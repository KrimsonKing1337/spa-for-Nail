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
      userId() {
        return this.postCur.userId - 1;
      },
      userName() {
        return this.users[this.userId].username;
      },
      name() {
        return this.users[this.userId].name;
      }
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
      :name="name"
      :user-id="userId"
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
