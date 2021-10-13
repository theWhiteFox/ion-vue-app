<template>
  <base-layout
    :page-title="loadedMemory ? loadedMemory.title : 'loading...'"
    page-default-back-link="/memories"
  >
    <h2 v-if="!loadedMemory">No memory for the given Id</h2>
    <memory-overview
      v-else
      :title="loadedMemory.title"
      :image="loadedMemory.image"
      :description="loadedMemory.description"
    ></memory-overview>
  </base-layout>
</template>

<script>
import MemoryOverview from "../components/memories/MemoriesOverview.vue";

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
  components: {
    MemoryOverview,
  },
  // watch: {
  //   $route(currentRoute) {
  //     this.memoryId = currentRoute.params.id;
  //   },
  // },
};
</script>