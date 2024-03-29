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
  screenshots?: string[]
}

const props = defineProps<{
  app: MobileApp
}>()
</script>

<template>
  <content-card back class="mobile-app-info">
    <template #title>
      <mobile-app-icon :img="props.app.icon" />
    </template>
    <h3 class="tw-text-cv-dark-400 tw-text-2xl">{{ props.app.name }}</h3>
    {{ props.app.description }}

    <div v-if="app.screenshots?.length" class="tw-mt-4 tw-bg-zinc-200 tw-rounded-lg">
      <v-carousel hide-delimiters>
        <v-carousel-item
          v-for="(url, i) in app.screenshots"
          :key="i"
          :src="url"
          content-class="tw-my-8"
        ></v-carousel-item>
      </v-carousel>
    </div>

    <div v-if="props.app.url" class="links-contianer tw-mt-4">
      <a
        v-if="props.app.url.ios"
        :href="props.app.url.ios"
        class="tw-inline-block tw-h-16 tw-rounded-lg"
        target="_blank"
        ><img
          src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1559347200"
          alt="Download on the App Store"
          class="tw-p-2.5 tw-h-16"
      /></a>

      <a
        v-if="props.app.url.android"
        :href="props.app.url.android"
        class="tw-inline-block tw-rounded-lg"
        target="_blank"
        ><img
          alt="Get it on Google Play"
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          class="tw-h-16"
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
