<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>

  <RouterView />
</template>

<style scoped>
header {
  max-height: 100vh;
}
</style>
