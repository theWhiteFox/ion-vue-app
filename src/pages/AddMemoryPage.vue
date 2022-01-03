<template>
  <base-layout page-title="Add a Memory" page-default-back-link="/memories">
    <create-memory-form  @save-memory="saveMemory"></create-memory-form>
  </base-layout>
</template>

<script>
import CreateMemoryForm from "../components/memories/CreateMemory.vue";

export default {
  setup() {},
  components: { CreateMemoryForm },
  methods: {
    saveMemory(memoryDate) {
      this.$store.dispatch("addMemory", memoryDate);
      this.$router.replace("/memories");
    },
  },
};
</script>