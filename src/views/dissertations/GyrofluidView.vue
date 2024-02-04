<script setup lang="ts">
import PDFViewer from '@/components/PDFViewer.vue'
</script>

<template>
  <content-card back>
    <template #title>
      <h3 class="tw-text-cv-dark-400">Physics: MSc Dissertation</h3>
    </template>
    <PDFViewer
      portrait
      path="/portfolio/msc_dissertation.pdf"
      fileName="Edward_Simmons-MSc_Dissertation.pdf"
    />
  </content-card>
</template>
