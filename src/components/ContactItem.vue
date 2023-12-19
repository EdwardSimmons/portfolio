<script setup lang="ts">
defineProps<{
  icon: string
}>()
</script>

<template>
  <div class="item my-2">
    <font-awesome-icon :icon="icon" class="text-cv-dark-400 text-xl mr-2" />
    <slot></slot>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  align-items: center;
}
</style>
