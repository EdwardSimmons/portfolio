<template>
  <div class="item p-8">
    <div class="icon-and-name mb-2">
      <i>
        <slot name="icon"></slot>
      </i>
      <h3 class="text-xl ml-2">
        <slot name="heading"></slot>
      </h3>
    </div>

    <div class="details p-4">
      <slot></slot>
      <slot name="links"></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon-and-name {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.details {
  display: flex;
  flex-direction: column;
  text-align: justify;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
}

@media (orientation: landscape) {
  .details {
    text-align: center;
  }
}
</style>
