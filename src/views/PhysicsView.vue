<script setup lang="ts">
import LinkItem from '@/components/LinkItem.vue'

// BSc Dissertation - Edit link
// https://pdfhost.io/edit?doc=2d8a3dcc-22b8-484a-8a90-a779c8f85626

// MSc Dissertation - Edit link
// https://pdfhost.io/edit?doc=2259138d-4222-4125-a460-3eda14cbb9e3

// MSc Poster - Edit link
// https://pdfhost.io/edit?doc=465a094a-3605-4944-ac86-0337a8349c9d
</script>

<template>
  <div class="tw-flex tw-flex-col tw-self-baseline">
    <content-card class="tw-mb-8">
      <template #title>
        <h2>Physics</h2>
      </template>
      <h3 class="tw-mb-2">MSc Fusion Energy</h3>
      <h4>Dissertation:</h4>
      <LinkItem
        icon="fa-solid fa-graduation-cap"
        href="https://pdfhost.io/v/C.zNQMpX5_MSc_Fusion_Energy_Dissertation"
      >
        Testing a New Theory for Small Plasma Eruptions in Tokamaks Using Gyrofluid Simulations
      </LinkItem>
      <LinkItem
        icon="fa-solid fa-file-image"
        href="https://pdfhost.io/v/ZapNvi.2u_Edward_Simmons_MSc_Project_Poster"
      >
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
      <h3 class="tw-mb-2">BSc Physics with Nuclear Astrophysics</h3>
      <h4>Dissertation:</h4>
      <LinkItem
        icon="fa-solid fa-graduation-cap"
        href="https://pdfhost.io/v/iRFtjh5uk_BSc_Dissertation"
      >
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
