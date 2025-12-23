<template>
  <div class="demo-container">
    <header class="hero">
      <h1>Turismo Digitale – Indicatori Nazionali (2025)</h1>
      <p>Confronto tra Italia e media internazionale su innovazione nel settore turistico</p>
    </header>

    <main class="cards-grid">
      <RadarCard v-for="item in demoData" :key="item.id" :data="item" />
    </main>
    <Legenda />
    <div class="export-section">
      <ExportButton />
    </div>

    <footer class="app-footer">
      <p>Strumento dimostrativo – non costituisce certificazione ufficiale</p>
      <p>Fonti: ENIT, Eurostat, AGID, Dati.gov.it (2024–2025)</p>
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import RadarCard from '@/components/RadarCard.vue'
import ExportButton from '@/components/ExportButton.vue'
import Legenda from '@/components/Legenda.vue'
import demoData from '@/data/turismo-data.json'

onMounted(() => {
  document.title = 'Turismo Digitale – Indicatori Nazionali | Livedata'
  let metaDesc = document.querySelector('meta[name="description"]')
  if (!metaDesc) {
    metaDesc = document.createElement('meta')
    metaDesc.name = 'description'
    document.head.appendChild(metaDesc)
  }
  metaDesc.content =
    'Confronto Italia vs media globale su prenotazioni online, city pass digitali, dati aperti e app comunali per turisti. Realizzato da Livedata con Vue 3 e D3.js.'
})
</script>

<style scoped>
/* Stili identici agli altri demo */
.demo-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}
.hero {
  text-align: center;
  margin-bottom: 3rem;
}
.hero h1 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
  color: #0057a3;
}
.hero p {
  font-size: 1.1rem;
  color: #555;
  max-width: 700px;
  margin: 0 auto;
}
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}
.export-section {
  text-align: center;
  margin: 2rem 0 3rem;
}
.app-footer {
  text-align: center;
  font-size: 0.85rem;
  color: #777;
  border-top: 1px solid #eee;
  padding-top: 1.5rem;
}
</style>
