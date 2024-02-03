<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <v-app class="root">
    <NavBar />
    <v-main class="d-flex align-center justify-center padding">
      <div class="mobile-padding">
        <RouterView />
      </div>
    </v-main>
  </v-app>
</template>

<style scoped>
.root {
  background-color: var(--off-white);
}

.padding {
  padding-top: 2rem !important;
  padding-bottom: 2rem !important;
}

@media (orientation: portrait) {
  .mobile-padding {
    padding: 0 2rem;
  }
}
</style>
