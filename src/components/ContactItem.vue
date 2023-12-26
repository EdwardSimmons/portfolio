<script setup lang="ts">
const props = defineProps<{
  icon: string
  last?: boolean
}>()

const isLast = props.last || false
</script>

<template>
  <div :class="isLast ? 'item mt-2' : 'item my-2'">
    <font-awesome-icon :icon="icon" class="text-cv-dark-400 text-xl mr-2" />
    <slot></slot>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  align-items: center;
  text-decoration: underline;
}
</style>
