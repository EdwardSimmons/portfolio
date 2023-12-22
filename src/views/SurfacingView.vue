<script setup lang="ts">
import PDFViewer from '@/components/PDFViewer.vue'
</script>

<template>
  <div class="surfacing-ccntainer">
    <PDFViewer path="/surfacing_portfolio.pdf" />
  </div>
</template>

<style scoped>
.surfacing-ccntainer {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
