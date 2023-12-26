<script setup lang="ts">
import MobileAppInfo, { type MobileApp } from '@/components/MobileAppInfo.vue'

const findMyULD: MobileApp = {
  name: 'Find My ULD',
  icon: '/portfolio/MobileAppIcons/fmu.webp',
  description:
    'This app, designed simultaneously for Android and iOS, allowed ACL Airshop customers to track and manage ULDs - the standardised containers used in the air freight industry.',
  url: {
    android:
      'https://play.google.com/store/apps/details?id=com.uldcontrol.findmyuld&hl=en&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
    ios: 'https://apps.apple.com/us/app/find-my-uld/id1463401103?itsct=apps_box_badge&amp;itscg=30200'
  }
}
</script>

<template>
  <mobile-app-info :app="findMyULD" />
</template>
