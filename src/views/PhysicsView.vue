<script setup lang="ts">
import LinkItem from '@/components/LinkItem.vue'
</script>

<template>
  <div class="flex flex-col self-baseline">
    <content-card class="mb-8">
      <template #title>
        <h2>Physics</h2>
      </template>
      <h3 class="mb-2">MSc Fusion Energy</h3>
      <h4>Dissertation:</h4>
      <LinkItem icon="fa-solid fa-graduation-cap" route="/physics/msc-dissertation">
        Testing a New Theory for Small Plasma Eruptions in Tokamaks Using Gyrofluid Simulations
      </LinkItem>
      <LinkItem icon="fa-solid fa-file-image" route="/physics/msc-poster">
        Project Poster
      </LinkItem>
      <LinkItem
        icon="fa-brands fa-github"
        last
        href="https://github.com/arkabokshi/toroidal-fluid-itg/tree/automation"
      >
        Toroidal Fluid ITG Repository
      </LinkItem>
    </content-card>
    <content-card>
      <h3 class="mb-2">BSc Physics with Nuclear Astrophysics</h3>
      <h4>Dissertation:</h4>
      <LinkItem icon="fa-solid fa-graduation-cap" route="/physics/bsc-dissertation">
        Simulations of Heavy-ion Fusion using the TDHF Code "Sky3D"
      </LinkItem>
      <h4>Awards:</h4>
      <LinkItem icon="fa-solid fa-award" route="/physics/janet-and-mark-preston-prize">
        Janet & Mark Preston Prize for Best Physics Final Year Project
      </LinkItem>
      <h4>Publications:</h4>
      <LinkItem
        icon="fa-solid fa-file-lines"
        href="https://www.epj-conferences.org/articles/epjconf/abs/2015/05/epjconf_fusion2015_00058/epjconf_fusion2015_00058.html"
        last
      >
        Role of the Skyrme Tensor Force in Heavy-ion Fusion
      </LinkItem>
    </content-card>
  </div>
</template>

<style scoped>
#app {
  overflow-y: scroll;
}
</style>
