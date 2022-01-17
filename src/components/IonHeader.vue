<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button></ion-back-button>
      </ion-buttons>
      <ion-title>My Navigation</ion-title>
    </ion-toolbar>
      <ion-menu />
  </ion-header>
</template>

<script>
import { 
  IonBackButton, 
  IonButtons, 
  IonHeader, 
  IonTitle, 
  IonToolbar
} from '@ionic/vue';
import { defineComponent } from 'vue';
import IonMenu from './IonMenu.vue';

export default defineComponent({
  components: { 
    IonBackButton, 
    IonButtons,
    IonHeader, 
    IonTitle, 
    IonToolbar,
    IonMenu
  }
});
</script>