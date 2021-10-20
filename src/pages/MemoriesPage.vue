<template>
  <base-layout page-title="All Memerios">
    <template v-slot:actions-end>
      <ion-button>
        <ion-icon slot="con-only" :icon="add"></ion-icon>
      </ion-button>
    </template>
    <memories-list :memories="memories"></memories-list>
  </base-layout>
</template>

<script>
import { IonButton, IonIcon } from "@ionic/vue";
import { add } from "ionicons/icons";

import MemoriesList from "../components/memories/MemeoriesList.vue";

export default {
  components: {
    IonIcon,
    IonButton,
    MemoriesList,
  },
  computed: {
    memories() {
      return this.$store.getters.memories;
    },
  },
  data() {
    return {
      add,
    };
  },
};
</script>
