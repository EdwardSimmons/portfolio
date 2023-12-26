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
      path: '/physics',
      name: 'physics',
      component: () => import('../views/PhysicsView.vue')
    },
    {
      path: '/physics/bsc-dissertation',
      name: 'physics-bsc-dissertation',
      component: () => import('../views/dissertations/SkyrmeView.vue')
    },
    {
      path: '/physics/msc-dissertation',
      name: 'physics-msc-dissertation',
      component: () => import('../views/dissertations/GyrofluidView.vue')
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
