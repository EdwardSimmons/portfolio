<script setup lang="ts">
import MobileAppIcon from '@/components/MobileAppIcon.vue'
import { computedEager } from '@vueuse/core'

export interface AppLink {
  icon: string
  name: string
  route: string
}

const props = defineProps<{
  link: AppLink
  isFirst: boolean
  isLast: boolean
}>()

const classes = computedEager(() => {
  return {
    'app-link': true,
    'my-4': true,
    'w-full': true,
    'app-link-first': props.isFirst,
    'app-link-last': props.isLast
  }
})
</script>

<template>
  <router-link :to="props.link.route">
    <div :class="classes">
      <div class="flex justify-between items-center">
        <mobile-app-icon :img="props.link.icon" class="mr-4" />
        <h3>{{ props.link.name }}</h3>
      </div>
      <font-awesome-icon icon="fa-solid fa-chevron-right" class="text-cv-dark-400 app-link-icon" />
    </div>
  </router-link>
</template>

<style scoped>
.app-link {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
}

.app-link:hover {
  background-color: theme('colors.cv-light.200');
  opacity: 0.8;
}

.app-link-first {
  margin-top: 0;
}

.app-link-last {
  margin-bottom: 0;
}

.app-link-icon {
  margin: 0 0 0 auto;
}
</style>
