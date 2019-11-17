<script>
  import VueTypes from 'vue-types';
  import {mapGetters} from 'vuex';

  import {getNameByPost, getShrinkDesc, wasPostRead} from '@/common/helpers/postInfo.js';

  import PostSingle from '@/components/PostSingle';

  export default {
    name: 'User',

    components: {
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
    <div class="name">
      Имя: {{ userInfo.name }}
    </div>

    <div class="username">
      Псевдоним: {{ userInfo.username }}
    </div>

    <div class="posts-title">
      Посты:
    </div>

    <div class="posts-wrapper">
      <PostSingle
        v-for="postCur in postsByUserId"
        :key="postCur.uuid"
        :title="postCur.title"
        :desc="getShrinkDesc(postCur.body)"
        :name="userInfo.name"
        :post-id="postCur.id"
        :read="wasPostRead(postCur.id)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
