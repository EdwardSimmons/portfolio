<script setup lang="ts">
import MobileAppIcon from '@/components/MobileAppIcon.vue'

export interface MobileApp {
  icon: string
  name: string
  description: string
  url?: {
    ios?: string
    android?: string
  }
}

const props = defineProps<{
  app: MobileApp
}>()
</script>

<template>
  <content-card class="mobile-app-info">
    <template #title>
      <mobile-app-icon :img="props.app.icon" />
    </template>
    <h3 class="text-cv-dark-400 text-2xl">{{ props.app.name }}</h3>
    {{ props.app.description }}

    <div v-if="props.app.url" class="links-contianer mt-4">
      <a
        v-if="props.app.url.ios"
        :href="props.app.url.ios"
        class="inline-block h-16 rounded-lg"
        target="_blank"
        ><img
          src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1559347200"
          alt="Download on the App Store"
          class="p-2.5 h-16"
      /></a>

      <a
        v-if="props.app.url.android"
        :href="props.app.url.android"
        class="inline-block rounded-lg"
        target="_blank"
        ><img
          alt="Get it on Google Play"
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          class="h-16"
      /></a>
    </div>
  </content-card>
</template>

<style scoped>
.links-contianer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (orientation: landscape) {
  .mobile-app-info {
    width: 50vw;
  }

  .links-contianer {
    flex-direction: row;
  }
}
</style>
