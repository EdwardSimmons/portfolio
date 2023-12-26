<script setup lang="ts">
import PDFViewer from '@/components/PDFViewer.vue'
</script>

<template>
  <content-card>
    <div class="surfacing-container">
      <PDFViewer path="/portfolio/surfacing_portfolio.pdf" />
    </div>
  </content-card>
</template>

<style scoped>
.surfacing-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
