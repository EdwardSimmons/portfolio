<script setup lang="ts">
import MobileAppInfo, { type MobileApp } from '@/components/MobileAppInfo.vue'

const atabaseSchade: MobileApp = {
  name: 'Atabase Schade',
  icon: '/portfolio/MobileAppIcons/atabase_schade.webp',
  description:
    'This iOS app was the commercial successor to Opnametool IMG, designed by Atabix to be used by any client wishing to carry out offline damage assessments of property.',
  url: {
    ios: 'https://apps.apple.com/nl/app/atabase-schade/id1580397787?itsct=apps_box_badge&amp;itscg=30200'
  },
  screenshots: [
    'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource125/v4/81/c0/7a/81c07ade-a099-4ef0-869c-7e7e035e5779/3fc96ef6-85ae-42ce-841a-287d93ad6e0d_Simulator_Screen_Shot_-_iPad_Pro__U002812.9-inch_U0029__U00284th_generation_U0029_-_2021-08-12_at_14.56.30.png/626x0w.webp',
    'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource125/v4/5b/1c/2d/5b1c2d5a-09a7-668c-16b2-f4e5394be911/110407c7-b3ba-47d1-88e9-22328a1a2d40_Simulator_Screen_Shot_-_iPad_Pro__U002812.9-inch_U0029__U00284th_generation_U0029_-_2021-08-12_at_14.57.36.png/626x0w.webp',
    'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource125/v4/ac/c4/58/acc45842-6fd5-2357-9041-d584bf19ccdc/a37255b6-2794-4adc-9bee-a957958bb8c3_Simulator_Screen_Shot_-_iPad_Pro__U002812.9-inch_U0029__U00284th_generation_U0029_-_2021-08-12_at_14.58.10.png/626x0w.webp'
  ]
}
</script>

<template>
  <mobile-app-info :app="atabaseSchade" />
</template>
