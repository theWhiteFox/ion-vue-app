<template>
  <ion-app>
    <ion-header />
    <ion-router-outlet />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue'
import IonHeader from './components/IonHeader.vue'

export default {
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    IonHeader
  }
};
</script>