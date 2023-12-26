<script setup lang="ts">
import MobileAppInfo, { type MobileApp } from '@/components/MobileAppInfo.vue'

const memoria: MobileApp = {
  name: 'Memoria',
  icon: '/portfolio/MobileAppIcons/memoria.png',
  description:
    'Developed solely for iOS, this app was designed for the Van der Spek funeral company, and is used by their employees to manage their appointments, track hours worked, and view details of the deceased. This was my first project at Atabix.'
}
</script>

<template>
  <mobile-app-info :app="memoria" />
</template>
