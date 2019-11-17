<script>
  import {mapGetters} from 'vuex';

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
      }
    }
  };
</script>

<template>
  <div v-if="posts && users" class="posts-wrapper">
    <PostSingle
      v-for="postCur in posts"
      :key="postCur.uuid"
      :title="postCur.title"
      :desc="getShrinkDesc(postCur.body)"
      :user-name="getUserName(postCur)"
      :post-id="postCur.id"
    />
  </div>
</template>

<style scoped lang="scss">

 .posts-wrapper {
   margin-top: 31px;
 }
</style>
