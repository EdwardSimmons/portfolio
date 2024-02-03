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
    'tw-my-4': true,
    'tw-w-full': true,
    'link-first': isFirst,
    'link-last': isLast
  }
})
</script>

<template>
  <a v-if="!!props.href" :href="props.href" target="_blank">
    <div :class="classes">
      <slot name="image"></slot>
      <div v-if="props.icon" class="tw-w-6 tw-mr-2 tw-flex tw-items-center">
        <font-awesome-icon :icon="props.icon" class="tw-text-cv-dark-400 tw-text-xl tw-mx-auto" />
      </div>
      <div
        class="tw-flex tw-justify-between tw-items-center tw-grow tw-py-2 tw-pl-2 tw-rounded-md link-hover"
      >
        <slot></slot>
        <font-awesome-icon
          v-if="!isShort"
          icon="fa-solid fa-chevron-right"
          class="tw-text-cv-dark-400 tw-mx-2"
        />
      </div>
    </div>
  </a>

  <router-link v-if="!!props.route" :to="props.route">
    <div :class="classes">
      <slot name="image"></slot>
      <div v-if="props.icon" class="tw-w-6 tw-mr-2 tw-flex tw-items-center">
        <font-awesome-icon :icon="props.icon" class="tw-text-cv-dark-400 tw-text-xl tw-mx-auto" />
      </div>
      <div
        class="tw-flex tw-justify-between tw-items-center tw-grow tw-py-2 tw-pl-2 tw-rounded-md link-hover"
      >
        <slot></slot>
        <font-awesome-icon
          v-if="!isShort"
          icon="fa-solid fa-chevron-right"
          class="tw-text-cv-dark-400 tw-mx-2"
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
