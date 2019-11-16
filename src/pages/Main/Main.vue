<script>
  import Header from '@/components/Header';
  import Posts from '@/pages/Posts';

  export default {
    name: 'Main',

    components: {
      Posts,
      Header
    },
  }
</script>

<template>
  <div class="main">
    <Header />

    <Posts />
  </div>
</template>

<style scoped lang="scss">
  .main {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
