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
  }
}
</script>

<template>
  <mobile-app-info :app="workNed" />
</template>
