<script setup lang="ts">
import PDFViewer from '@/components/PDFViewer.vue'
</script>

<template>
  <div class="flex flex-col">
    <h3 class="text-cv-dark-400">Physics: MSc Project Poster</h3>
    <content-card>
      <PDFViewer
        portrait
        path="/portfolio/msc_poster.pdf"
        fileName="Edward_Simmons-MSc_Project_Poster.pdf"
      />
    </content-card>
  </div>
</template>
