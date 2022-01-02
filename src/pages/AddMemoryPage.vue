<template>
  <base-layout page-title="Add a Memory" page-default-back-link="/memories">
  <create-memory-form />
  </base-layout>
</template>

<script>
import CreateMemoryForm from "../components/memories/CreateMemory.vue";

export default {
  setup() {},
  components: { CreateMemoryForm },
};
</script>