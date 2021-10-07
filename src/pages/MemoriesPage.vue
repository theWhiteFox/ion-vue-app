<template>
  <base-layout page-title="All Memerios"> 
  <memories-list :memories="memories"></memories-list>
  </base-layout>
</template>

<script>
import MemoriesList from "../components/memories/MemeoriesList.vue"

export default {
  components: {
    MemoriesList
  },
  computed: {
    memories() {
      return this.$store.getters.memories;
    },
  },
  data() {
    return {};
  },
};
</script>
