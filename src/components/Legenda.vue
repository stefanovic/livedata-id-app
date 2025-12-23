<template>
  <div class="legenda">
    <button @click="isOpen = !isOpen" class="legenda-toggle">
      {{ isOpen ? 'Nascondi legenda' : 'Mostra legenda' }}
    </button>
    <div v-show="isOpen" class="legenda-content">
      <h4>Criteri di valutazione</h4>
      <ul>
        <li><strong>LCP (Largest Contentful Paint)</strong>: tempo di caricamento del contenuto principale (ideale: &lt;2.5s)</li>
        <li><strong>WCAG AA</strong>: standard internazionale per accessibilità web</li>
        <li><strong>Vite</strong>: moderno bundler per sviluppo web performante</li>
        <li><strong>Cloud/VPS</strong>: hosting su infrastruttura scalabile (es. DigitalOcean, AWS)</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const isOpen = ref(false);
</script>

<style scoped>
.legenda {
  margin: 2rem 0;
  text-align: center;
}
.legenda-toggle {
  background: #f0f7ff;
  color: #0057a3;
  border: 1px solid #c3dfff;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.95rem;
}
.legenda-content {
  background: #f9fafb;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.25rem;
  margin-top: 1rem;
  text-align: left;
}
.legenda-content h4 {
  margin-bottom: 0.75rem;
  color: #111;
}
.legenda-content ul {
  padding-left: 1.25rem;
  margin: 0;
  color: #444;
}
.legenda-content li {
  margin-bottom: 0.5rem;
}
</style>
