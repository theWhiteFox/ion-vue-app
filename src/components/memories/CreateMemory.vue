<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" required v-model="enteredTitle" />
      </ion-item>
      <ion-item>
        <ion-label position="floating">Image URL</ion-label>
        <ion-input type="url" required v-model="enteredImageUrl" />
      </ion-item>
      <ion-item>
        <ion-label position="floating">Description</ion-label>
        <ion-textarea rows="4" v-model="enteredDescription"></ion-textarea>
      </ion-item>
    </ion-list>
    <ion-button type="submit" expand="full"> Save </ion-button>
  </form>
</template>

<script>
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
} from "@ionic/vue";

export default {
  emits: ["save-memory"],
  date() {
    return {
      enteredTitle: '',
      enteredImageUrl: '',
      enteredDescription: '',
    };
  },
  methods: {
    submitForm() {
      const memoryData = {
        title: this.enteredTitle,
        imageUrl: this.enteredImageUrl,
        description: this.enteredDescription,
      };
      this.$emit("save-memory", memoryData);
    },
  },
  components: { IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton },
};
</script>