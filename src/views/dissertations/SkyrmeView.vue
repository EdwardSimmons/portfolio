<script setup lang="ts">
import PDFViewer from '@/components/PDFViewer.vue'
</script>

<template>
  <div class="flex flex-col">
    <h3 class="text-cv-dark-400">Physics: BSc Dissertation</h3>
    <content-card>
      <PDFViewer
        portrait
        path="/portfolio/bsc_dissertation.pdf"
        fileName="Edward_Simmons-BSc_Dissertation.pdf"
      />
    </content-card>
  </div>
</template>
