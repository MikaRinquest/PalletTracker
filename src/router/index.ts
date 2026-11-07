import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import GeorgeView from '../views//George/George.vue'
import PEView from '../views/PE/PE.vue'
import FrancisView from '../views/St Francis/Francis.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/george', component: GeorgeView },
  { path: '/pe', component: PEView },
  { path: '/stfrancis', component: FrancisView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
