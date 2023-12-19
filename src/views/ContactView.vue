<script setup lang="ts">
import ContactItem from '@/components/ContactItem.vue'
</script>

<template>
  <div class="contact">
    <ContactItem :icon="`fa-solid fa-phone`">
      <a href="tel:+447552883317">+44 7552 88 33 17</a>
    </ContactItem>
    <ContactItem :icon="`fa-solid fa-envelope`">
      <a href="mailto:e.d.simmons@outlook.com">e.d.simmons@outlook.com</a>
    </ContactItem>
    <ContactItem :icon="`fa-brands fa-linkedin`">
      <a href="https://www.linkedin.com/in/edward-simmons/" target="_blank">LinkedIn Profile</a>
    </ContactItem>
    <ContactItem :icon="`fa-brands fa-github`">
      <a href="https://github.com/EdwardSimmons" target="_blank">GitHub Profile</a>
    </ContactItem>
  </div>
</template>

<style>
.contact {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

@media (orientation: landscape) {
  .contact {
    min-height: 100vh;
  }
}
</style>
