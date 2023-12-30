<script setup lang="ts">
import PDFViewer from '@/components/PDFViewer.vue'
</script>

<template>
  <content-card>
    <template #title>
      <h2>Curriculum Vitae</h2>
    </template>
    <PDFViewer portrait path="/portfolio/cv.pdf" fileName="Edward_Simmons-cv.pdf" />
  </content-card>
</template>
