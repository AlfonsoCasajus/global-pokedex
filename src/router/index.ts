import { createRouter, createWebHistory } from 'vue-router'
import PokedexView from '@/views/PokedexView.vue'
import WelcomeView from '@/views/WelcomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomeView
    },
    {
      path: '/pokedex',
      name: 'pokedex',
      component: PokedexView
    }
  ]
})

export default router
