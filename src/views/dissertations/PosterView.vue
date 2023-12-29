<script setup lang="ts">
import PDFViewer from '@/components/PDFViewer.vue'
</script>

<template>
  <content-card>
    <template #title>
      <h3 class="text-cv-dark-400">Physics: MSc Project Poster</h3>
    </template>
    <PDFViewer path="/portfolio/msc_poster.pdf" fileName="Edward_Simmons-MSc_Project_Poster.pdf" />
  </content-card>
</template>
