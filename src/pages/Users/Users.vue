<script>
  import {mapGetters} from 'vuex';
  import Header from '@/components/Header';
  import UserInfo from '@/components/UserInfo';

  export default {
    name: 'Users',

    components: {
      UserInfo,
      Header
    },

    computed: {
      ...mapGetters([
        'posts',
        'users'
      ])
    },
  };
</script>

<template>
  <div class="users-wrapper">
    <Header />

    <div v-if="posts.length > 0 && users.length > 0" class="users-list">
      <UserInfo
        v-for="userCur in users"
        :key="userCur.uuid"
        :name="userCur.name"
        :username="userCur.username"
        :user-id="userCur.id"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .users-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .users-list {
    margin-top: 31px;
  }
</style>
