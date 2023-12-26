<script setup lang="ts">
import PDFViewer from '@/components/PDFViewer.vue'
</script>

<template>
  <content-card>
    <div class="surfacing-ccntainer">
      <PDFViewer path="/portfolio/surfacing_portfolio.pdf" />
    </div>
  </content-card>
</template>

<style scoped>
.surfacing-ccntainer {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
