<script setup lang="ts">
import AvatarCircle from '@/components/AvatarCircle.vue'
</script>

<template>
  <content-card class="home">
    <template #title> <avatar-circle /> </template>
    <h3 class="tw-text-cv-dark-400 tw-text-2xl">Hello!</h3>
    Welcome to my personal web portfolio! My name is Ed Simmons, and I hope you enjoy perusing this
    site as much as I enjoyed making it. Please use the links in the side-drawer to find out more
    about my career.
  </content-card>
</template>

<style scoped>
@media (orientation: landscape) {
  .home {
    width: 50vw;
  }
}
</style>
