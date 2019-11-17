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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 50px;
  }
</style>
