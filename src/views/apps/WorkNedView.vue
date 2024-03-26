<script setup lang="ts">
import MobileAppInfo, { type MobileApp } from '@/components/MobileAppInfo.vue'

const workNed: MobileApp = {
  name: 'WorkNed',
  icon: '/portfolio/MobileAppIcons/workned.webp',
  description:
    'Available for both Android and iOS, this app allowed part-time employers and employees of the Netherlands to build a network of connections, manage their contracts, apply for jobs, and submit timesheets. ',
  url: {
    android:
      'https://play.google.com/store/apps/details?id=nl.workned.nativescript&pli=1&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
    ios: 'https://apps.apple.com/nl/app/workned/id1611735028?itsct=apps_box_badge&amp;itscg=30200'
  },
  screenshots: [
    'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/85/0e/a0/850ea097-ee02-22fb-0746-215326d974ef/5712c0cb-e59a-4adb-bf18-1829ea1142bf_6.7_U00281_U0029.png/460x0w.webp',
    'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/e6/d0/5a/e6d05a62-7cc7-ddc2-e0a3-fc4926abc43e/b46be4be-d667-40f1-98b4-665993626a67_6.7_U00282_U0029.png/460x0w.webp',
    'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/ed/64/20/ed6420d1-b7d7-6ddb-3309-57a5da4fdc7e/74db54f8-395a-4ba3-ae06-0d6f1872fbc8_6.7_U00283_U0029.png/460x0w.webp',
    'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/7b/10/2c/7b102cd3-c595-8850-f3bf-80b5e7b7e2cf/352e7d50-7a5b-4db5-9b09-04934a4b216c_6.7_U00284_U0029.png/460x0w.webp'
  ]
}
</script>

<template>
  <mobile-app-info :app="workNed" />
</template>
