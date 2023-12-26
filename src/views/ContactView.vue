<script setup lang="ts">
import AvatarCircle from '@/components/AvatarCircle.vue'
import ContactItem from '@/components/ContactItem.vue'
</script>

<template>
  <content-card>
    <AvatarCircle class="mb-4" />
    <ContactItem :icon="`fa-solid fa-phone`">
      <a href="tel:+447552883317">+44 7552 88 33 17</a>
    </ContactItem>
    <ContactItem :icon="`fa-solid fa-envelope`">
      <a href="mailto:e.d.simmons@outlook.com">e.d.simmons@outlook.com</a>
    </ContactItem>
    <ContactItem :icon="`fa-brands fa-linkedin`">
      <a href="https://www.linkedin.com/in/edward-simmons/" target="_blank">LinkedIn Profile</a>
    </ContactItem>
    <ContactItem :icon="`fa-brands fa-github`" last>
      <a href="https://github.com/EdwardSimmons" target="_blank">GitHub Profile</a>
    </ContactItem>
  </content-card>
</template>
