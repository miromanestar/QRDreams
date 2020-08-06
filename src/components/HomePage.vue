<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content padding>

      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>Test</ion-card-subtitle>
          <ion-card-title>QR????</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          Y'know... I'm pretty sure I'll end up doing something eventually....
          <ion-button expand="block" @click="$router.push({ name: 'about' })">About</ion-button>
        </ion-card-content>
      </ion-card>

    </ion-content>

  </ion-page>
</template>

<script>
export default {
  name: "HomePage",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>