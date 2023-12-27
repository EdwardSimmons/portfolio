<script setup lang="ts">
import MobileAppIcon from '@/components/MobileAppIcon.vue'
import LinkItem from '@/components/LinkItem.vue'

interface AppLink {
  icon: string
  name: string
  route: string
}

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
      <link-item
        v-for="(app, i) in apps"
        :route="app.route"
        :key="i"
        :first="i === 0"
        :last="i === apps.length - 1"
      >
        <template #icon>
          <mobile-app-icon :img="app.icon" class="mr-4" />
        </template>
        <template #title>
          <h3>{{ app.name }}</h3>
        </template>
      </link-item>
    </div>
  </content-card>
</template>
