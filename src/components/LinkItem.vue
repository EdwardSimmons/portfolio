<script setup lang="ts">
const props = defineProps<{
  href: string
  last?: boolean
  router?: boolean
}>()

const isLast = props.last || false
const isRouterLink = props.router || false
</script>

<template>
  <div :class="isLast ? 'item mt-2' : 'item my-2'">
    <a v-if="!isRouterLink" :href="props.href" target="_blank">
      <span>
        <slot></slot>
      </span>
      <font-awesome-icon icon="fa-solid fa-chevron-right" class="text-cv-dark-400" />
    </a>
    <router-link v-else :to="props.href">
      <span>
        <slot></slot>
      </span>
      <font-awesome-icon icon="fa-solid fa-chevron-right" class="text-cv-dark-400" />
    </router-link>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  align-items: center;
}
</style>
