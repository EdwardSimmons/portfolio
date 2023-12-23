<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue'
import { SidebarMenu } from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

const isCollapsed = ref(true)

const onToggleCollapse = () => {
  console.log('[ onToggleCollapse ]')
  console.log('isCollapsed: ', isCollapsed.value)
}

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
  <SidebarMenu
    v-model:collapsed="isCollapsed"
    :menu="menu"
    @update:collapsed="onToggleCollapse"
    @item-click="onItemClick"
  >
    <template v-slot:toggle-icon>
      <font-awesome-icon v-if="!isCollapsed" icon="fa-solid fa-circle-chevron-left" />
      <font-awesome-icon v-else icon="fa-solid fa-circle-chevron-right" />
    </template>
  </SidebarMenu>
</template>

<style>
.v-sidebar-menu .vsm--header {
  color: black;
}

.v-sidebar-menu .vsm--link {
  color: black;
}

.v-sidebar-menu .vsm--link_level-1 .vsm--icon {
  background-color: transparent;
  color: theme('colors.cv-dark.400');
}

.v-sidebar-menu {
  background-color: theme('colors.cv-light.200');
}

.v-sidebar-menu .vsm--link_hover {
  background-color: rgba(255, 255, 255, 0.5);
}

.v-sidebar-menu .vsm--badge_default,
.v-sidebar-menu .vsm--toggle-btn {
  background-color: theme('colors.cv-dark.400');
}

.v-sidebar-menu .vsm--toggle-btn {
  font-size: 2rem;
}

.v-sidebar-menu .vsm--mobile-bg {
  background-color: theme('colors.cv-dark.400');
  color: white;
}

.v-sidebar-menu .vsm--link_mobile {
  color: white;
}

.v-sidebar-menu.vsm_collapsed .vsm--link_level-1.vsm--link_hover .vsm--icon {
  background-color: transparent;
}

.v-sidebar-menu .vsm--link_level-1.vsm--link_active {
  box-shadow: 5px 0px 0px 0px #907ad6 inset;
}
</style>
