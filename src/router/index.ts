import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/mobile-apps',
      name: 'mobile-apps',
      component: () => import('../views/MobileAppsView.vue')
    },
    {
      path: '/surfacing',
      name: 'surfacing',
      component: () => import('../views/SurfacingView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    }
  ]
})

export default router
