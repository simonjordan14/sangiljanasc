import { createRouter, createWebHistory } from 'vue-router'

// Import your views
import Squad from '../views/Squad.vue'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/squad', component: Squad }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
