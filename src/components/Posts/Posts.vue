<script>
  import {mapGetters} from 'vuex';

  import {localStorageGet} from '@/common/helpers/localStorage.js';

  import PostSingle from '@/components/PostSingle';

  export default {
    name: 'Posts',

    components: {
      PostSingle
    },

    computed: {
      ...mapGetters([
        'posts',
        'users'
      ]),

      postsRead() {
        return localStorageGet('postsRead');
      }
    },

    methods: {
      getUserName(postCur) {
        const userId = postCur.userId - 1;

        return this.users[userId].username;
      },
      getShrinkDesc(desc) {
        const tooLong = desc.length > 200;
        const shortDesc = desc.substr(0, 200);

        return tooLong ? `${shortDesc}...` : shortDesc;
      },
      getReadValue(postId) {
        return this.postsRead[postId] || false;
      }
    }
  };
</script>

<template>
  <div v-if="posts.length > 0 && users.length > 0" class="posts-wrapper">
    <PostSingle
      v-for="postCur in posts"
      :key="postCur.uuid"
      :title="postCur.title"
      :desc="getShrinkDesc(postCur.body)"
      :user-name="getUserName(postCur)"
      :post-id="postCur.id"
      :read="getReadValue(postCur.id)"
    />
  </div>
</template>

<style scoped lang="scss">

 .posts-wrapper {
   margin-top: 31px;
 }
</style>
