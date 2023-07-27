<script lang="ts">
import axios from 'axios'

export default {
  data() {
    return {
      age: '',
      restingHR: '',
      gender: ''
    }
  },
  methods: {
    handleSubmit() {
      const formData = new URLSearchParams()
      formData.append('age', this.age)
      formData.append('restingHR', this.restingHR)
      formData.append('gender', this.gender)

      axios
        .post('http://localhost:3000/hrz', formData, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        .then((res) => {
          // TODO: error handling
          this.$router.push({
            name: 'results',
            query: { zones: JSON.stringify(res.data) }
          })
          return res.data
        })
        .catch((error) => {
          console.log(error)
          alert("Il y a eu un problème avec l'envoi des données")
        })
    }
  }
}
</script>

<template>
  <form action="">
    <div class="form-container">
      <div class="age-input">
        <label for="">Votre âge</label>
        <input type="number" v-model="age" />
      </div>
      <div class="hr-input">
        <label for="">Votre rythme cardiaque au repos</label>
        <input type="number" v-model="restingHR" />
      </div>
      <div class="genre-input">
        <label for="">Votre genre</label>
        <select name="" id="" v-model="gender">
          <option value="female" selected>Femme</option>
          <option value="male">Homme</option>
        </select>
      </div>
      <div class="span-and-button">
        <span>Vos données ne sont stockées nulle part, pas d'inquiétude 😉</span>
        <button type="button" @click="handleSubmit">Envoyer</button>
      </div>
    </div>
  </form>
</template>

<style scoped>
form {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.age-input,
.hr-input,
.genre-input {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.age-input label,
.hr-input label,
.genre-input label {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.age-input input,
.hr-input input {
  width: 100%;
  height: 2rem;
  border: none;
  border-bottom: 1px solid hsla(160, 100%, 37%, 1);
  outline: none;
  font-size: 1.2rem;
  padding-left: 0.5rem;
}

.genre-input select {
  width: 100%;
  height: 2rem;
  border: none;
  border-bottom: 1px solid hsla(160, 100%, 37%, 1);
  outline: none;
  font-size: 1.2rem;
  padding-left: 0.5rem;
}

.span-and-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

span {
  font-size: 0.8rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
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
</style>
