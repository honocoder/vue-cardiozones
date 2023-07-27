<template>
  <div class="hp-container">
    <div class="div1">
      <HeroSection />
    </div>
    <div class="div2">
      <QuickInfos />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroSection from './HeroSection.vue'
import QuickInfos from './QuickInfos.vue'
</script>

<style scoped>
.hp-container {
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.div1 {
  width: 45vw;
  padding-right: 1rem;
  padding-left: 2rem;
}

.div2 {
  width: 55vw;
  padding-left: 1rem;
  padding-right: 2rem;
}
</style>
