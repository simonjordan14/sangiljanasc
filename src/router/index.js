import { createRouter, createWebHistory } from 'vue-router'

// Import your views
import Squad from '../views/Squad.vue'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/squad', component: Squad },
  {path: '/contact', component: Contact},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
