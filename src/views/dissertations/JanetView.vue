<script setup lang="ts"></script>

<template>
  <div class="flex flex-col">
    <h3 class="text-cv-dark-400">Physics: Janet and Mark Preston Prize</h3>
    <content-card>
      <img class="award" src="@/assets/bsc_award.jpeg" alt="certificate-image" />
    </content-card>
  </div>
</template>

<style scoped>
@media (orientation: landscape) {
  .award {
    height: calc(100vh - 8rem);
  }
}
</style>
