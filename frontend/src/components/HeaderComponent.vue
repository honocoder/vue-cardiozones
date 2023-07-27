<template>
  <header class="header-component green">
    <div>
      <h1>HR-Calc</h1>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: 'HeaderComponent'
}
</script>

<style scoped>
.header-component {
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 10vh;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
