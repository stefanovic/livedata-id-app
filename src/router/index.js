// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RadarView from '../views/RadarView.vue'
import TurismoView from '../views/TurismoView.vue' // 👈 nuova

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/radar', name: 'radar', component: RadarView },
  { path: '/turismo', name: 'turismo', component: TurismoView }, // 👈 nuova
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
