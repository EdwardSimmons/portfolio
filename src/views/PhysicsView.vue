<script setup lang="ts">
import LinkItem from '@/components/LinkItem.vue'
</script>

<template>
  <content-card>
    <template #title>
      <h2>Physics</h2>
    </template>
    <h3>MSc Fusion Energy</h3>
    <h4>Dissertation:</h4>
    <LinkItem router href="/physics/msc-dissertation">
      Testing a New Theory for Small Plasma Eruptions in Tokamaks Using Gyrofluid Simulations
    </LinkItem>
    <LinkItem router href="/physics/msc-poster"> Project Poster </LinkItem>
    <h3>BSc Physics with Nuclear Astrophysics</h3>
    <h4>Dissertation:</h4>
    <LinkItem router href="/physics/bsc-dissertation">
      Simulations of Heavy-ion Fusion using the TDHF Code "Sky3D"
    </LinkItem>
    <h4>Awards:</h4>
    <LinkItem router href="/physics/janet-and-mark-preston-prize">
      Janet & Mark Preston Prize for Best Physics Final Year Project
    </LinkItem>
    <h4>Publications:</h4>
    <LinkItem
      href="https://www.epj-conferences.org/articles/epjconf/abs/2015/05/epjconf_fusion2015_00058/epjconf_fusion2015_00058.html"
    >
      Role of the Skyrme Tensor Force in Heavy-ion Fusion
    </LinkItem>
  </content-card>
</template>
