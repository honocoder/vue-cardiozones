<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      zones: [] as { min: number; max: number }[]
    }
  },

  created() {
    const zonesParams = this.$route.query.zones
    if (typeof zonesParams === 'string') {
      const decodedZones = decodeURIComponent(zonesParams)
      this.zones = JSON.parse(decodedZones)
    }
  },

  beforeRouteEnter(to, from, next) {
    // Remove the "zones" query parameter from the URL before the component is created
    next(() => {
      history.replaceState({}, '', '/results')
    })
  },

  methods: {
    zoneNumber(index: any): string {
      const numericalIndex = index.match(/\d+/)?.[0]
      return `zone ${numericalIndex} `
    }
  }
})
</script>

<template>
  <div class="results-container">
    <h1>Vos résultats</h1>
    <ul class="results-list">
      <li v-for="(zone, index) in zones" :key="index">
        Votre <span class="emphasized-text">{{ zoneNumber(index) }}</span> est entre
        <span class="emphasized-text">{{ zone.min }}bpm</span> et
        <span class="emphasized-text">{{ zone.max }}bpm</span>.
        <br />

        <span v-if="index.toString() === 'zone1'">
          Vous pouvez vous entraîner à cette fréquence cardiaque pour améliorer votre endurance.
        </span>
        <span v-else-if="index.toString() === 'zone2'">
          Vous pouvez vous entraîner à cette fréquence cardiaque pour améliorer votre endurance.
        </span>
        <span v-else-if="index.toString() === 'zone3'">
          Vous pouvez vous entraîner à cette fréquence cardiaque pour améliorer votre endurance.
        </span>
        <span v-else-if="index.toString() === 'zone4'">
          Vous pouvez vous entraîner à cette fréquence cardiaque pour améliorer votre endurance.
        </span>
        <span v-else-if="index.toString() === 'zone5'">
          Vous pouvez vous entraîner à cette fréquence cardiaque pour améliorer votre endurance.
        </span>
      </li>
    </ul>

    <div class="more-infos">
      Vous voulez un peu d'explications ? <router-link to="/infos">Cliquez ici</router-link>.
    </div>
  </div>
</template>

<style scoped>
.results-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;
}

h1 {
  font-size: 2rem;
  font-weight: bold;
}

.results-list {
  margin-top: 3rem;
  list-style: none;
}

li {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.emphasized-text {
  font-weight: bold;
  color: hsla(160, 100%, 37%, 1);
}

.more-infos {
  margin-top: 3rem;
  font-size: 1rem;
}
</style>
