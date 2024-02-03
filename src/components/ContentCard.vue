<template>
  <div class="tw-flex tw-flex-col">
    <div v-if="$slots.title" class="tw-mb-2">
      <slot name="title"></slot>
    </div>
    <div class="tw-p-4 tw-shadow-md tw-rounded-lg tw-bg-zinc-50">
      <slot></slot>
    </div>
  </div>
</template>
