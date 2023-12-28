<script setup lang="ts">
import { computedEager } from '@vueuse/core'

const props = defineProps<{
  href?: string
  route?: string
  first?: boolean
  last?: boolean
  icon?: string
  short?: boolean
}>()

const isFirst = props.first || false
const isLast = props.last || false
const isShort = props.short || false

const classes = computedEager(() => {
  return {
    link: true,
    'my-4': true,
    'w-full': true,
    'link-first': isFirst,
    'link-last': isLast
  }
})
</script>

<template>
  <a v-if="!!props.href" :href="props.href" target="_blank">
    <div :class="classes">
      <slot name="image"></slot>
      <div v-if="props.icon" class="w-6 mr-2 flex items-center">
        <font-awesome-icon :icon="props.icon" class="text-cv-dark-400 text-xl mx-auto" />
      </div>
      <div class="flex justify-between items-center grow py-2 pl-2 rounded-md link-hover">
        <slot></slot>
        <font-awesome-icon
          v-if="!isShort"
          icon="fa-solid fa-chevron-right"
          class="text-cv-dark-400 mx-2"
        />
      </div>
    </div>
  </a>

  <router-link v-if="!!props.route" :to="props.route">
    <div :class="classes">
      <slot name="image"></slot>
      <div v-if="props.icon" class="w-6 mr-2 flex items-center">
        <font-awesome-icon :icon="props.icon" class="text-cv-dark-400 text-xl mx-auto" />
      </div>
      <div class="flex justify-between items-center grow py-2 pl-2 rounded-md link-hover">
        <slot></slot>
        <font-awesome-icon
          v-if="!isShort"
          icon="fa-solid fa-chevron-right"
          class="text-cv-dark-400 mx-2"
        />
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.link {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
}

.link-hover:hover {
  background-color: theme('colors.cv-light.200');
  opacity: 0.8;
}

.link-first {
  margin-top: 0;
}

.link-last {
  margin-bottom: 0;
}
</style>
