<!-- TODO: compléter la page d'accueil (sur le côté droit, ajouter genre d'infographie, à la place de TheWelcome). Basé sur le calcul de machin, etc... -->
<!-- TODO: après le formulaire, dernière page : les résultats (+ possiblité d'exporter?) -->

<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <div class="main-container">
    <HeaderComponent />
    <router-view> </router-view>
    <FooterComponent />
  </div>
</template>

<style scoped>
.main-container {
  width: 100vw;
  height: 100vh;
}
</style>
