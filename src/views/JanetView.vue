<script setup lang="ts"></script>

<template>
  <content-card back>
    <template #title>
      <h3 class="tw-text-cv-dark-400">Physics: Janet and Mark Preston Prize</h3>
    </template>
    <img class="award" src="@/assets/bsc_award.jpeg" alt="certificate-image" />
  </content-card>
</template>

<style scoped>
@media (orientation: landscape) {
  .award {
    height: calc(100vh - 12rem);
  }
}
</style>
