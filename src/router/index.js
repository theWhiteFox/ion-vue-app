import { createRouter, createWebHistory } from '@ionic/vue-router'

const routes = [
  {
    path: '/',
    redirect: '/memories'
  },
  {
    path: '/memories',
    component: () => import('../pages/MemoriesPage.vue')
  },
  {
    path: '/memories/:slug',
    component: () => import('../pages/MemoryDetails.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
