<script setup lang="ts">
import MobileAppInfo, { type MobileApp } from '@/components/MobileAppInfo.vue'

const atabaseSchade: MobileApp = {
  name: 'Atabase Schade',
  icon: '/portfolio/MobileAppIcons/atabase_schade.webp',
  description:
    'This iOS app was the commercial successor to Opnametool IMG, designed by Atabix to be used by any client wishing to carry out offline damage assessments of property.',
  url: {
    ios: 'https://apps.apple.com/nl/app/atabase-schade/id1580397787?itsct=apps_box_badge&amp;itscg=30200'
  }
}
</script>

<template>
  <mobile-app-info :app="atabaseSchade" />
</template>
