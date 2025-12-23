<!-- src/views/HomeView.vue -->
<template>
  <div class="homepage">
    <header class="hero">
      <h1>Livedata</h1>
      <p class="subtitle">Soluzioni digitali su misura con visione, metodo e azione</p>
    </header>

    <section class="vision">
      <h2>Visione. Metodo. Azione.</h2>
      <p>
        Ci muoviamo con visione, metodo e azione, sviluppando soluzioni digitali su misura 
        con un modello flessibile che unisce solidità, performance e valore.
      </p>
    </section>

    <section class="approach">
      <h2>Il nostro modello</h2>
      <p>
        Il team digitale si basa su una struttura flessibile: la progettazione, lo sviluppo 
        e la direzione tecnica di ogni progetto vengono seguiti direttamente, garantendo 
        continuità, controllo e qualità lungo tutto il percorso.
      </p>
      <p>
        Quando sono richieste competenze specialistiche — design, UI/UX, sicurezza o marketing — 
        vengono coinvolti professionisti di fiducia con cui esiste una collaborazione consolidata da anni.
      </p>
      <p class="highlight">
        Un modello essenziale ed efficace: un unico referente tecnico e un team che si amplia 
        solo quando il progetto lo richiede.
      </p>
    </section>

    <section class="showcase">
      <h2>Applicativi dimostrativi</h2>
      <div class="demo-cards">
        <RouterLink to="/radar" class="demo-card">
          <h3>WebTech Radar</h3>
          <p>Confronto Italia vs Mondo sulle tecnologie web</p>
        </RouterLink>
       <RouterLink to="/turismo" class="demo-card">
  <h3>Turismo Digitale</h3>
  <p>Indicatori nazionali di innovazione turistica</p>
</RouterLink>
        <!--
        <RouterLink to="/sanita" class="demo-card">
          <h3>Sanità Digitale</h3>
          <p>Indicatori regionali di innovazione sanitaria</p>
        </RouterLink>
        -->
      </div>
    </section>

    <footer class="app-footer">
      <p>Soluzioni integrate per valorizzare il tuo brand e i tuoi progetti digitali.</p>
      <p><a href="https://livedata.it" target="_blank" rel="noopener">livedata.it</a></p>
    </footer>
  </div>
</template>

<!-- src/views/HomeView.vue -->
<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  document.title = 'Livedata – Applicativi Demo'
  // Opzionale: meta description
  let metaDesc = document.querySelector('meta[name="description"]')
  if (!metaDesc) {
    metaDesc = document.createElement('meta')
    metaDesc.name = 'description'
    document.head.appendChild(metaDesc)
  }
  metaDesc.content = 'Esplora gli applicativi dimostrativi di Livedata: strumenti interattivi per visualizzare dati tecnologici, ambientali e di settore.'
})
</script>

<style scoped>
.homepage {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  font-size: 1.05rem;
  line-height: 1.7;
}
.hero {
  text-align: center;
  margin-bottom: 3rem;
}
.hero h1 {
  font-size: 2.5rem;
  color: #0057a3;
  margin-bottom: 0.5rem;
}
.subtitle {
  font-size: 1.2rem;
  color: #555;
}
section {
  margin-bottom: 3rem;
}
h2 {
  font-size: 1.6rem;
  color: #111;
  margin-bottom: 1.25rem;
}
p {
  margin-bottom: 1rem;
  color: #333;
}
.highlight {
  background: #f0f7ff;
  padding: 1rem;
  border-left: 4px solid #0057a3;
  border-radius: 0 8px 8px 0;
}
.showcase h2 {
  text-align: center;
  margin-bottom: 2rem;
}
.demo-cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.demo-card {
  display: block;
  padding: 1.5rem;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.2s;
}
.demo-card:hover {
  border-color: #0057a3;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}
.demo-card h3 {
  color: #0057a3;
  margin-bottom: 0.5rem;
}
.demo-card p {
  margin-bottom: 0;
  color: #555;
}
.app-footer {
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
  color: #777;
  font-size: 0.95rem;
}
.app-footer a {
  color: #0057a3;
  text-decoration: none;
}
</style>
