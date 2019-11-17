<script>
  import VueTypes from 'vue-types';

  export default {
    name: 'PostSingle',

    props: {
      title: VueTypes.string.isRequired,
      desc: VueTypes.string.isRequired,
      userName: VueTypes.string.isRequired,
      postId: VueTypes.number
    }
  };
</script>

<template>
  <div class="post-single-wrapper">
    <div class="title">
      <router-link v-if="postId" :to="`/post/${postId}`">
        {{ title }}
      </router-link>

      <span v-else>
        {{ title }}
      </span>
    </div>

    <div class="desc">
      {{ desc }}
    </div>

    <div class="name">
      <span>
        Автор:
      </span>

      <router-link to="/">
        {{ userName }}
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .post-single-wrapper {
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
