<script setup lang="ts">
import { SidebarMenu } from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

const menu = [
  {
    header: 'Navigation',
    hiddenOnCollapse: true
  },
  {
    href: '/',
    title: 'Home',
    icon: {
      element: 'font-awesome-icon',
      attributes: {
        icon: 'fa-solid fa-house'
      }
    }
  },
  {
    href: '/mobile-apps',
    title: 'Mobile App Development',
    icon: {
      element: 'font-awesome-icon',
      attributes: {
        icon: 'fa-solid fa-mobile'
      }
    }
  },
  {
    href: '/surfacing',
    title: 'Surface Design Engineering',
    icon: {
      element: 'font-awesome-icon',
      attributes: {
        icon: 'fa-solid fa-car-side'
      }
    }
  },
  {
    href: '/contact',
    title: 'Contact Me',
    icon: {
      element: 'font-awesome-icon',
      attributes: {
        icon: 'fa-solid fa-address-book'
      }
    }
  }
]
</script>

<template>
  <SidebarMenu :menu="menu" />
</template>

<style>
.v-sidebar-menu .vsm--link_level-1 .vsm--icon {
  background-color: transparent;
}
</style>
