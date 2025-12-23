<template>
  <div class="radar-container">
    <header class="hero">
      <h1>WebTech Radar – Italia vs Mondo (2025)</h1>
      <p>Confronto basato su dati reali: adozione, performance e tendenze nello sviluppo web</p>
    </header>

    <!-- Aggiungi sotto <header class="hero"> -->
<div class="back-link">
  <RouterLink to="/">&larr; Tutti gli applicativi</RouterLink>
</div>

    <main class="cards-grid">

      <RadarCard
        v-for="item in techData"
        :key="item.id"
        :data="item"
      />
    </main>
<Legenda />
    <div class="export-section">

             <ExportButton />
    </div>

    <footer class="app-footer">
      <p>Strumento dimostrativo – non costituisce certificazione ufficiale</p>
      <p>Fonti: W3Techs, HTTP Archive, WebAIM, Datadog (2024–2025)</p>
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import RadarCard from '@/components/RadarCard.vue';
import ExportButton from '@/components/ExportButton.vue'; // ✅ Import essenziale
import techData from '@/data/webtech-data.json';
import Legenda from '@/components/Legenda.vue';

onMounted(() => {
  document.title = 'WebTech Radar – Italia vs Mondo | Livedata'
  let metaDesc = document.querySelector('meta[name="description"]')
  if (!metaDesc) {
    metaDesc = document.createElement('meta')
    metaDesc.name = 'description'
    document.head.appendChild(metaDesc)
  }
  metaDesc.content = 'Confronto aggiornato al 2025 tra Italia e media globale su adozione di Vue.js, performance web (LCP), accessibilità (WCAG), cloud e tool di sviluppo moderni.'
})
</script>

<style scoped>

.back-link {
  text-align: center;
  margin-bottom: 1.5rem;
}
.back-link a {
  color: #0057a3;
  text-decoration: none;
  font-weight: 600;
}
.radar-container {
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
  font-weight: 700;
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
