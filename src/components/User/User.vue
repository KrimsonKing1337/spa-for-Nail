<script>
  import {mapGetters} from 'vuex';

  import {getShrinkDesc, wasPostRead} from '@/common/helpers/postInfo.js';

  import PostSingle from '@/components/PostSingle';
  import UserInfo from '@/components/UserInfo/UserInfo.vue';

  export default {
    name: 'User',

    components: {
      UserInfo,
      PostSingle
    },

    computed: {
      ...mapGetters([
        'posts',
        'users'
      ]),

      userId() {
        return parseInt(this.$route.params.id);
      },

      postsByUserId() {
        return this.posts.filter(cur => cur.userId === this.userId);
      },
      userInfo() {
        return this.users[this.userId - 1];
      }
    },
    methods: {
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
  <div v-if="posts.length > 0 && users.length > 0" class="user-wrapper">
    <UserInfo
      :name="userInfo.name"
      :username="userInfo.username"
    />

    <div class="posts-wrapper">
      <PostSingle
        v-for="postCur in postsByUserId"
        :key="postCur.uuid"
        :title="postCur.title"
        :desc="getShrinkDesc(postCur.body)"
        :name="userInfo.name"
        :user-id="userInfo.id"
        :post-id="postCur.id"
        :read="wasPostRead(postCur.id)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .user-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 15px;
  }

  .posts-wrapper {
    margin-top: 17px;
  }

  .posts-title {
    margin-top: 14px;
    font-size: 24px;
    text-align: center;
  }
</style>
