<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue'
import { isMobile } from 'mobile-device-detect'

const drawer = ref(true)
const rail = ref(true)
</script>

<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="rail"
    :expand-on-hover="!isMobile"
    permanent
    color="rgb(185 223 209)"
  >
    <v-list density="comfortable" nav>
      <v-list-item title="Home" value="home" to="/">
        <template v-slot:prepend>
          <font-awesome-icon
            icon="fa-solid fa-home"
            class="tw-text-cv-dark-400 v-icon v-icon--size-default"
          />
        </template>
      </v-list-item>
      <v-list-item title="Physics" value="physics" to="/physics">
        <template v-slot:prepend>
          <font-awesome-icon
            icon="fa-solid fa-atom"
            class="tw-text-cv-dark-400 v-icon v-icon--size-default"
          />
        </template>
      </v-list-item>
      <v-list-item title="Mobile App Development" value="apps" to="/mobile-apps">
        <template v-slot:prepend>
          <font-awesome-icon
            icon="fa-solid fa-mobile"
            class="tw-text-cv-dark-400 v-icon v-icon--size-default"
          />
        </template>
      </v-list-item>
      <v-list-item title="Surface Design Engineering" value="surfacing" to="/surfacing">
        <template v-slot:prepend>
          <font-awesome-icon
            icon="fa-solid fa-car-side"
            class="tw-text-cv-dark-400 v-icon v-icon--size-default"
          />
        </template>
      </v-list-item>
      <v-list-item title="Curriculum Vitae" value="cv" to="/curriculum-vitae">
        <template v-slot:prepend>
          <font-awesome-icon
            icon="fa-solid fa-file"
            class="tw-text-cv-dark-400 v-icon v-icon--size-default"
          />
        </template>
      </v-list-item>
      <v-list-item title="Contact Me" value="contact" to="/contact">
        <template v-slot:prepend>
          <font-awesome-icon
            icon="fa-solid fa-address-book"
            class="tw-text-cv-dark-400 v-icon v-icon--size-default"
          />
        </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
