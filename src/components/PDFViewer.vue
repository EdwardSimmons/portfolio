<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { VuePDF, usePDF } from '@tato30/vue-pdf'
import { PixelSpinner } from 'epic-spinners'
import { watchDebounced } from '@vueuse/core'

const windowWidth = ref(window.innerWidth)
const windowHeight = ref(window.innerHeight)
const pdfWidth = ref(window.innerWidth * 0.8)

onMounted(() => {
  window.addEventListener('resize', handleResize)
  setPdfSize()
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const handleResize = () => {
  windowWidth.value = window.innerWidth
  windowHeight.value = window.innerHeight
}

const setPdfSize = () => {
  if (window.innerWidth > window.innerHeight) {
    // Landscape
    pdfWidth.value = window.innerHeight - convertRemToPixels(4)
  } else {
    // Portrait
    pdfWidth.value = window.innerWidth - convertRemToPixels(4) - 65
  }
}

watchDebounced(windowWidth, setPdfSize, { debounce: 500, maxWait: 500 })

const convertRemToPixels = (rem: number) =>
  rem * parseFloat(getComputedStyle(document.documentElement).fontSize)

const props = defineProps<{
  path: string
  fileName: string
  portrait?: boolean
}>()

const { pdf, pages } = usePDF(props.path)
const isPortrait = props.portrait || false

const state = reactive({
  isLoading: true,
  page: 1
})

const onLoaded = () => {
  setTimeout(() => {
    state.isLoading = false
  }, 400)
}

const onClickControl = (ctrl: 'prev' | 'next' | 'zoom-in' | 'zoom-out') => {
  if (ctrl === 'next' && state.page < pages.value) {
    state.page++
    state.isLoading = true
    return
  }

  if (ctrl === 'prev' && state.page > 1) {
    state.page--
    state.isLoading = true
    return
  }
}

const onClickDownload = () => {
  // create element <a> for download PDF
  const link = document.createElement('a')
  link.href = props.path
  link.target = '_blank'
  link.download = props.fileName

  // Simulate a click on the element <a>
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
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
      <VuePDF
        :pdf="pdf"
        :page="state.page"
        @loaded="onLoaded"
        :width="pdfWidth"
        :fit-parent="isPortrait"
      />
      <div class="mt-4">
        <font-awesome-icon
          icon="fa-solid fa-chevron-left"
          class="pdf-arrow pr-4"
          @click="onClickControl('prev')"
        />
        <span>{{ `Page: ${state.page} / ${pages}` }}</span>
        <font-awesome-icon
          icon="fa-solid fa-chevron-right"
          class="pdf-arrow pl-4"
          @click="onClickControl('next')"
        />
      </div>
      <font-awesome-icon
        icon="fa-solid fa-file-download"
        class="pdf-arrow text-xl absolute bottom-0 right-0 text-cv-dark-400"
        @click="onClickDownload"
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
  flex-direction: column;
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
  opacity: 0.5;
}
</style>
