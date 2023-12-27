<template>
  <div class="flex flex-col">
    <div v-if="$slots.title" class="mb-2">
      <slot name="title"></slot>
    </div>
    <div class="p-4 shadow-md rounded-lg bg-zinc-50">
      <slot></slot>
    </div>
  </div>
</template>
