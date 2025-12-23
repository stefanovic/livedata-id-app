import { createApp } from 'vue'
import { createPinia } from 'pinia'   // 👈 Pinia ABILITATO
import App from './App.vue'
import router from './router'          // 👈 Router ABILITATO

const app = createApp(App)
app.use(createPinia())                 // 👈 Registrato
app.use(router)                        // 👈 Registrato
app.mount('#app')

// src/main.js 
if (import.meta.env.PROD) {
  console.log(
    `%c App WebTech Radar\n%c Realizzata da Livedata (livedata.it)\n%c Stack: Vue 3 • Vite • Pinia • D3 • GSAP`,
    'color: #0057a3; font-size: 16px; font-weight: bold;',
    'color: #555;',
    'color: #777; font-size: 12px;'
  );
}
