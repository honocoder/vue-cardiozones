<template>
  <footer class="footer">
    <div>
      <p>Application developed with ❤️ by Jimy</p>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 10vh;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
