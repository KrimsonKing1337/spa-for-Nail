<script>
  export default {
    name: 'Posts',

    computed: {
      posts() {
        return this.$store.state.posts;
      }
    },

    mounted() {
      this.$store.dispatch('posts');
    }
  };
</script>

<template>
  <div class="posts">
    sdfsdf
  </div>
</template>

<style scoped lang="scss">

</style>
