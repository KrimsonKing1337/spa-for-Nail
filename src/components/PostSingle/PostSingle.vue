<script>
  import VueTypes from 'vue-types';

  import {localStorageGet, localStorageSet} from '@/common/helpers/localStorage.js';

  export default {
    name: 'PostSingle',

    props: {
      title: VueTypes.string.isRequired,
      desc: VueTypes.string.isRequired,
      userName: VueTypes.string.isRequired,
      postId: VueTypes.number,
      read: VueTypes.boolean,
    },

    methods: {
      saveProgress(postId) {
        localStorageSet('postsRead', {
          ...localStorageGet('postsRead'),
            [postId]: true
        })
      },

      handleClick(postId) {
        this.saveProgress(postId);
      }
    }
  };
</script>

<template>
  <div class="post-single-wrapper" :class="read ? 'read' : ''">
    <div class="title">
      <router-link v-if="postId" :to="`/post/${postId}`">
        <span @click="handleClick(postId)">
          {{ title }}
        </span>
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

    &.read {
      opacity: 0.7;
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
