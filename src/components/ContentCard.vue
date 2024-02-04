<script setup lang="ts">
import { useRouter } from 'vue-router'

const props = defineProps<{
  back?: boolean
}>()

const router = useRouter()

const onClickBack = () => {
  if (props.back) {
    router.back()
  }
}
</script>

<template>
  <div>
    <div class="tw-flex tw-flex-col">
      <div v-if="$slots.title" class="tw-mb-2">
        <slot name="title"></slot>
      </div>
      <div class="tw-p-4 tw-shadow-md tw-rounded-lg tw-bg-zinc-50">
        <slot></slot>
      </div>
    </div>
    <div v-if="$props.back">
      <v-btn color="#678c89" variant="text" class="text-none tw-mt-2" @click="onClickBack">
        <template v-slot:prepend>
          <font-awesome-icon icon="fa-solid fa-arrow-left" class="v-icon v-icon--size-default" />
        </template>
        Back
      </v-btn>
    </div>
  </div>
</template>
