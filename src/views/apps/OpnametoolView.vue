<script setup lang="ts">
import MobileAppInfo, { type MobileApp } from '@/components/MobileAppInfo.vue'

const opnametool: MobileApp = {
  name: 'Opnametool IMG',
  icon: '/portfolio/MobileAppIcons/opnametool.webp',
  description:
    "This iOS app was a bespoke project for the Instituut Mijnbouwschade Groningen (IMG), a department of the Dutch government. It is used by their team of experts to assess the damage caused to people's homes by earthquakes, and to calculate any compensation that they are owed. Over €1b has been awarded as a result.",
  url: {
    ios: 'https://apps.apple.com/us/app/opnametool-img/id1605604226?itsct=apps_box_badge&amp;itscg=30200'
  }
}
</script>

<template>
  <mobile-app-info :app="opnametool" />
</template>
