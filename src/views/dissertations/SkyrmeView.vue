<script setup lang="ts">
import PDFViewer from '@/components/PDFViewer.vue'
</script>

<template>
  <content-card>
    <template #title>
      <h3 class="text-cv-dark-400">Physics: BSc Dissertation</h3>
    </template>
    <PDFViewer
      path="/portfolio/bsc_dissertation.pdf"
      fileName="Edward_Simmons-BSc_Dissertation.pdf"
    />
  </content-card>
</template>
