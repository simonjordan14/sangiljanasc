import { createRouter, createWebHistory } from 'vue-router'

// Import your views
import Squad from '../views/Squad.vue'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/squad', component: Squad },
  {path: '/contact', component: Contact},
  {path: '/about', component: About}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
