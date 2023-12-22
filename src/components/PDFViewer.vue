<script setup lang="ts">
import { reactive } from 'vue'
import { VuePDF, usePDF } from '@tato30/vue-pdf'
import { PixelSpinner } from 'epic-spinners'

const props = defineProps<{
  path: string
}>()

const { pdf, pages } = usePDF(props.path)

const state = reactive({
  isLoading: true,
  page: 1
})

const onLoaded = () => {
  state.isLoading = false
}

const onClickArrow = (dir: 'prev' | 'next') => {
  if (dir === 'next' && state.page < pages.value) {
    state.page++
  }

  if (dir === 'prev' && state.page > 1) {
    state.page--
  }
}
</script>

<template>
  <div class="relative">
    <pixel-spinner
      :animation-duration="2000"
      :size="70"
      color="#5c8d89"
      :class="state.isLoading ? 'loader' : 'loader finished'"
    />
    <div :class="state.isLoading ? 'pdf-container pdf-loading' : 'pdf-container pdf-loaded'">
      <font-awesome-icon
        icon="fa-solid fa-chevron-left"
        class="pdf-arrow pr-4"
        @click="onClickArrow('prev')"
      />
      <div class="w-full">
        <VuePDF :pdf="pdf" :page="state.page" fit-parent @loaded="onLoaded" />
      </div>
      <font-awesome-icon
        icon="fa-solid fa-chevron-right"
        class="pdf-arrow pl-4"
        @click="onClickArrow('next')"
      />
    </div>
  </div>
</template>

<style scoped>
.loader {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
}

.finished {
  opacity: 0;
  transition: all 1s;
}

.pdf-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.pdf-loading {
  opacity: 0;
}

.pdf-loaded {
  opacity: 1;
  transition: all 1s;
}

.pdf-arrow {
  cursor: pointer;
}

.pdf-arrow:hover {
  color: theme('colors.cv-dark.400');
}
</style>
