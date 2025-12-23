<template>
  <RouterView />
</template>

<script setup>
import { onMounted } from 'vue'


  // ✅ Console signature (solo in produzione)
  if (import.meta.env.PROD) {
    console.log(
      `%c App WebTech Radar\n%c Realizzata da Livedata (livedata.it)\n%c Stack: Vue 3 • Vite • Pinia • D3 • GSAP`,
      'color: #0057a3; font-size: 16px; font-weight: bold;',
      'color: #555;',
      'color: #777; font-size: 12px;'
    )
  }

</script>

<style>
/* Reset e base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background-color: #f9fafb;
  color: #111;
  line-height: 1.6;
  overflow-x: hidden;
}

/* Link */
a {
  color: #0057a3;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

/* Focus per accessibilità */
:focus {
  outline: 2px solid #0057a3;
  outline-offset: 2px;
}

/* Utility */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
</style>
