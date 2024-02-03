<template>
  <content-card>
    <template #title>
      <h3 class="tw-text-cv-dark-400">Physics: MSc Project Poster</h3>
    </template>
    <img class="poster" src="@/assets/msc_poster.jpg" alt="poster-image" />
  </content-card>
</template>

<style scoped>
@media (orientation: landscape) {
  .poster {
    height: calc(100vh - 8rem);
  }
}
</style>
