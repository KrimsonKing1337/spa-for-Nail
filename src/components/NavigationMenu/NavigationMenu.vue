<script>
  import VueTypes from 'vue-types';

  export default {
    name: 'NavigationMenu',

    props: {
      items: VueTypes.arrayOf(
        VueTypes.shape({
          label: VueTypes.string,
          link: VueTypes.string,
          uuid: VueTypes.string
        })
      ).isRequired
    }
  };
</script>

<template>
  <nav class="navigation-menu">
    <router-link
      v-for="itemCur in items"
      :key="itemCur.uuid"
      :to="itemCur.link"
      class="item"
    >
      {{ itemCur.label }}
    </router-link>
  </nav>
</template>

<style scoped lang="scss">

</style>
