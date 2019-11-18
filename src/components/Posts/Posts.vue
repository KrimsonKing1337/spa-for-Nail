<script>
  import {mapGetters} from 'vuex';
  import {getUserIdByPost, getNameByPost, getShrinkDesc, wasPostRead} from '@/common/helpers/postInfo.js';
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
      ])
    },

    methods: {
      getUserId(postCur) {
        return getUserIdByPost(postCur);
      },
      getName(postCur) {
        return getNameByPost(postCur, this.users);
      },
      getShrinkDesc(desc) {
        return getShrinkDesc(desc);
      },
      wasPostRead(postId) {
        return wasPostRead(postId);
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
      :name="getName(postCur)"
      :user-id="getUserId(postCur)"
      :post-id="postCur.id"
      :read="wasPostRead(postCur.id)"
    />
  </div>
</template>

<style scoped lang="scss">

 .posts-wrapper {
   margin-top: 31px;
 }
</style>
