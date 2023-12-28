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
      <LinkItem route="/physics/msc-dissertation">
        <template #icon>
          <font-awesome-icon
            icon="fa-solid fa-graduation-cap"
            class="text-cv-dark-400 text-xl mr-2"
          />
        </template>
        <template #title>
          Testing a New Theory for Small Plasma Eruptions in Tokamaks Using Gyrofluid Simulations
        </template>
      </LinkItem>
      <LinkItem route="/physics/msc-poster">
        <template #icon>
          <font-awesome-icon
            icon="fa-solid fa-graduation-cap"
            class="text-cv-dark-400 text-xl mr-2"
          />
        </template>
        <template #title>Project Poster</template>
      </LinkItem>
      <LinkItem last href="https://github.com/arkabokshi/toroidal-fluid-itg">
        <template #icon>
          <font-awesome-icon icon="fa-brands fa-github" class="text-cv-dark-400 text-xl mr-2" />
        </template>
        <template #title>Code Repository</template>
      </LinkItem>
    </content-card>
    <content-card>
      <h3 class="mb-2">BSc Physics with Nuclear Astrophysics</h3>
      <h4>Dissertation:</h4>
      <LinkItem route="/physics/bsc-dissertation">
        <template #icon>
          <font-awesome-icon
            icon="fa-solid fa-graduation-cap"
            class="text-cv-dark-400 text-xl mr-2"
          />
        </template>
        <template #title> Simulations of Heavy-ion Fusion using the TDHF Code "Sky3D" </template>
      </LinkItem>
      <h4>Awards:</h4>
      <LinkItem href="/physics/janet-and-mark-preston-prize">
        <template #icon>
          <font-awesome-icon icon="fa-solid fa-award" class="text-cv-dark-400 text-xl mr-2" />
        </template>
        <template #title> Janet & Mark Preston Prize for Best Physics Final Year Project </template>
      </LinkItem>
      <h4>Publications:</h4>
      <LinkItem
        href="https://www.epj-conferences.org/articles/epjconf/abs/2015/05/epjconf_fusion2015_00058/epjconf_fusion2015_00058.html"
        last
      >
        <template #icon>
          <font-awesome-icon icon="fa-solid fa-file-lines" class="text-cv-dark-400 text-xl mr-2" />
        </template>
        <template #title> Role of the Skyrme Tensor Force in Heavy-ion Fusion </template>
      </LinkItem>
    </content-card>
  </div>
</template>
