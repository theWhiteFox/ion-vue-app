<template>
  <base-layout
    :page-title="loadedMemory ? loadedMemory.title : 'loading...'"
    page-default-back-link="/memories"
  >
    <h2 v-if="!loadedMemory">No memory for the given Id</h2>
    <h2 v-else>Loaded it ..</h2>
  </base-layout>
</template>
<script>
export default {
  data() {
    return {
      memorySlug: this.$route.params.slug,
    };
  },
  computed: {
    loadedMemory() {
      return this.$store.getters.memory(this.memorySlug);
    },
  },
  // watch: {
  //   $route(currentRoute) {
  //     this.memoryId = currentRoute.params.id;
  //   },
  // },
};
</script>