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
      path: '/physics/janet-and-mark-preston-prize',
      name: 'janet-and-mark-preston-prize',
      component: () => import('../views/dissertations/JanetView.vue')
    },
    {
      path: '/physics/msc-dissertation',
      name: 'physics-msc-dissertation',
      component: () => import('../views/dissertations/GyrofluidView.vue')
    },
    {
      path: '/physics/msc-poster',
      name: 'physics-msc-poster',
      component: () => import('../views/dissertations/PosterView.vue')
    },
    {
      path: '/mobile-apps',
      name: 'mobile-apps',
      component: () => import('../views/MobileAppsView.vue')
    },
    {
      path: '/mobile-apps/opnametool-img',
      name: 'mobile-apps-opnametool-img',
      component: () => import('../views/apps/OpnametoolView.vue')
    },
    {
      path: '/mobile-apps/atabase-schade',
      name: 'mobile-apps-atabase-schade',
      component: () => import('../views/apps/AtabaseSchadeView.vue')
    },
    {
      path: '/mobile-apps/find-my-uld',
      name: 'mobile-apps-find-my-uld',
      component: () => import('../views/apps/FindMyUldView.vue')
    },
    {
      path: '/mobile-apps/workned',
      name: 'mobile-apps-workned',
      component: () => import('../views/apps/WorkNedView.vue')
    },
    {
      path: '/mobile-apps/memoria',
      name: 'mobile-apps-memoria',
      component: () => import('../views/apps/MemoriaView.vue')
    },
    {
      path: '/surfacing',
      name: 'surfacing',
      component: () => import('../views/SurfacingView.vue')
    },
    {
      path: '/curriculum-vitae',
      name: 'cv',
      component: () => import('../views/CVView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
})

export default router
