<script setup lang="ts">
import LinkItem from '@/components/LinkItem.vue'

interface ContactLink {
  icon: string
  text: string
  href: string
}

const links: ContactLink[] = [
  {
    icon: 'fa-solid fa-phone',
    text: '+44 7552 88 33 17',
    href: 'tel:+447552883317'
  },
  {
    icon: 'fa-solid fa-envelope',
    text: 'e.d.simmons@outlook.com',
    href: 'mailto:e.d.simmons@outlook.com'
  },
  {
    icon: 'fa-brands fa-linkedin',
    text: 'LinkedIn Profile',
    href: 'https://www.linkedin.com/in/edward-simmons/'
  },
  {
    icon: 'fa-brands fa-github',
    text: 'GitHub Profile',
    href: 'https://github.com/EdwardSimmons'
  }
]
</script>

<template>
  <content-card>
    <template #title>
      <h2>Let's get in touch!</h2>
    </template>
    <link-item
      v-for="(link, i) in links"
      :href="link.href"
      :key="i"
      :first="i === 0"
      :last="i === links.length - 1"
    >
      <template #icon>
        <font-awesome-icon :icon="link.icon" class="text-cv-dark-400 text-xl mr-2" />
      </template>
      <template #title>
        <span class="underline">
          {{ link.text }}
        </span>
      </template>
    </link-item>
  </content-card>
</template>
