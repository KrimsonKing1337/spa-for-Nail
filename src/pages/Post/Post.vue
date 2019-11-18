<script>
  import {mapGetters} from 'vuex';

  import PostDetail from '@/components/PostDetail';
  import Main from '@/components/Main';

  export default {
    name: 'Post',

    components: {
      Main,
      PostDetail
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
  <Main>
    <div class="post-wrapper">
      <PostDetail
        :title="postCur.title"
        :desc="postCur.body"
        :user-name="userName"
        :name="name"
        :user-id="userId"
      />
    </div>
  </Main>
</template>

<style scoped lang="scss">

</style>
