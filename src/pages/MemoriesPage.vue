<template>
  <base-layout page-title="All Memerios">
    <ion-list>
      <ion-item router-link="/memories/1">A trip into the mountains</ion-item>
      <ion-item> A swim at the forty foot </ion-item>
      <ion-item> Fishing in Fenit </ion-item>
      <ion-item> A walk in Phoenix park  </ion-item>
    </ion-list>
  </base-layout>
</template>

<script>
import { IonList, IonItem } from "@ionic/vue";
export default {
  components: {
    IonList,
    IonItem,
  },
};
</script>
