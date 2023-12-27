<script setup lang="ts">
import MobileAppLink, { type AppLink } from '@/components/MobileAppLink.vue'

const apps: AppLink[] = [
  {
    icon: '/portfolio/MobileAppIcons/opnametool.webp',
    name: 'Opnametool IMG',
    route: '/mobile-apps/opnametool-img'
  },
  {
    icon: '/portfolio/MobileAppIcons/atabase_schade.webp',
    name: 'Atabase Schade',
    route: '/mobile-apps/atabase-schade'
  },
  {
    icon: '/portfolio/MobileAppIcons/fmu.webp',
    name: 'Find My ULD',
    route: '/mobile-apps/find-my-uld'
  },
  {
    icon: '/portfolio/MobileAppIcons/workned.webp',
    name: 'WorkNed',
    route: '/mobile-apps/workned'
  },
  {
    icon: '/portfolio/MobileAppIcons/memoria.png',
    name: 'Memoria',
    route: '/mobile-apps/memoria'
  }
]
</script>

<template>
  <content-card>
    <template #title>
      <h2>Mobile App Development</h2>
    </template>
    <div class="app-links">
      <MobileAppLink
        v-for="(app, i) in apps"
        :link="app"
        :key="i"
        :isFirst="i === 0"
        :isLast="i === apps.length - 1"
      />
    </div>
  </content-card>
</template>
