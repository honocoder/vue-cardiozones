<script lang="ts">
export default {
  methods: {
    handleClick: function () {
      console.log('clicked')
      this.$router.push('/form')
    }
  }
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">On calcule vos zones de fréquence cardiaque ?</h1>
    <h3>Ça vous aidera à atteindre plus facilement vos objectifs sportifs 🤗</h3>
    <button @click="handleClick">C'est parti !</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

button {
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  background-color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  margin-top: 2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
