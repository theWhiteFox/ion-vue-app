<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>All Memerios</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item> Steph </ion-item>
        <ion-item> John </ion-item>
        <ion-item> Conor </ion-item>
        <ion-item> Jenny </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
} from "@ionic/vue";
export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
  },
};
</script>
