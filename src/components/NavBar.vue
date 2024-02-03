<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue'
import { SidebarMenu } from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

const isCollapsed = ref(true)

const onItemClick = () => {
  // Collapse the side drawer (if it's open) on item click.
  if (!isCollapsed.value) {
    isCollapsed.value = true
  }
}

const menu = [
  {
    header: 'E. Simmons - Portfolio',
    hidden: true
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
    href: '/physics',
    title: 'Physics',
    icon: {
      element: 'font-awesome-icon',
      attributes: {
        icon: 'fa-solid fa-atom'
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
    href: '/curriculum-vitae',
    title: 'Curriculum Vitae',
    icon: {
      element: 'font-awesome-icon',
      attributes: {
        icon: 'fa-solid fa-file'
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
  <SidebarMenu v-model:collapsed="isCollapsed" :menu="menu" @item-click="onItemClick">
    <template v-slot:toggle-icon>
      <font-awesome-icon v-if="!isCollapsed" icon="fa-solid fa-circle-chevron-left" />
      <font-awesome-icon v-else icon="fa-solid fa-circle-chevron-right" />
    </template>
  </SidebarMenu>
</template>

<style>
.v-sidebar-menu {
  --vsm-primary-color: #4285f4;
  --vsm-base-bg: theme('colors.cv-light.200');
  --vsm-item-color: theme('colors.cv-dark.400');
  /* --vsm-item-active-color:; */
  --vsm-item-active-bg: rgba(255, 255, 255, 0.5);
  /* --vsm-item-active-line-color:; */
  --vsm-item-open-color: #fff;
  /* --vsm-item-hover-color:; */
  --vsm-item-open-bg: theme('colors.cv-dark.400');
  --vsm-item-hover-bg: rgba(255, 255, 255, 0.5);
  --vsm-icon-color: var(--vsm-item-color);
  --vsm-icon-bg: transparent;
  --vsm-icon-active-color: #907ad6;
  /* --vsm-icon-active-bg:; */
  /* --vsm-icon-open-color:; */
  /* --vsm-icon-open-bg:; */
  --vsm-mobile-item-color: #fff;
  --vsm-mobile-item-bg: theme('colors.cv-dark.400');
  --vsm-mobile-icon-color: #fff;
  --vsm-mobile-icon-bg: transparent;
  /* --vsm-dropdown-bg: #36363b; */
  /* --vsm-header-item-color: rgba(255, 255, 255, 0.7); */
  --vsm-toggle-btn-color: #fff;
  --vsm-toggle-btn-bg: theme('colors.cv-dark.400');
  --vsm-item-font-size: 1rem;
  --vsm-item-line-height: 2rem;
  --vsm-item-padding: 1rem;
  --vsm-icon-height: 2rem;
  --vsm-icon-width: 2rem;
}

/* No selector available for toggle button size */
.v-sidebar-menu .vsm--toggle-btn {
  font-size: 2rem;
}

/* Overwrite classes to set line width */
.v-sidebar-menu .vsm--link_level-1.vsm--link_active {
  box-shadow: 4px 0px 0px 0px #907ad6 inset;
}
</style>
