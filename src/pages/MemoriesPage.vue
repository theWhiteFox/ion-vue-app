<template>
  <base-layout page-title="All Memerios">
    <ion-list v-for="memory in memories" v-bind:key="memory.id">
      <ion-item :router-link="`/memories/${memory.id}`">
        <ion-thumbnail slot="start">
          <ion-img :src="memory.image" :alt="memory.title"></ion-img>
        </ion-thumbnail>
        <ion-label>
          {{ memory.title }}
        </ion-label>
      </ion-item>
    </ion-list>
  </base-layout>
</template>

<script>
import { IonList, IonItem, IonImg, IonThumbnail, IonLabel } from "@ionic/vue";
export default {
  components: {
    IonList,
    IonItem,
    IonImg,
    IonThumbnail,
    IonLabel,
  },
  computed: {
    memories() {
      return this.$store.getters.memories
    }
  },
  data() {
    return {}
  },
};
</script>
