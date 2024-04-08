<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue'
import { isMobile } from 'mobile-device-detect'

const drawer = ref(true)
const rail = ref(!isMobile)
const rounded = ref(isMobile ? 'lg' : 0)

// Surfacing Portfolio - Edit link
// https://pdfhost.io/edit?doc=c5e969c4-960e-4726-a1a5-7cb33b5fb33d
const surfLink = 'https://pdfhost.io/v/cbT.Z35Cr_Edward_Simmons_Surfacing_Portfolio'

// CV - Edit Link
// https://pdfhost.io/edit?doc=e8eda18f-784e-4909-ba3c-9ecb972cc103
const cvLink = 'https://pdfhost.io/v/dTDrw8OOP_Edward_SimmonsCV'
</script>

<template>
  <div>
    <v-app-bar v-if="isMobile" color="secondary" density="compact" collapse>
      <template v-slot:prepend>
        <v-btn icon="fas fa-bars" color="primary" @click="drawer = !drawer" />
      </template>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      :expand-on-hover="!isMobile"
      :permanent="!isMobile"
      :rounded="rounded"
      color="rgb(185 223 209)"
    >
      <v-list base-color="#678c89" density="comfortable" nav>
        <v-list-item base-color="primary" color="#907ad6" title="Home" value="home" to="/">
          <template v-slot:prepend>
            <font-awesome-icon icon="fa-solid fa-home" class="v-icon v-icon--size-default" />
          </template>
        </v-list-item>
        <v-list-item
          base-color="primary"
          color="#907ad6"
          title="Physics"
          value="physics"
          to="/physics"
        >
          <template v-slot:prepend>
            <font-awesome-icon icon="fa-solid fa-atom" class="v-icon v-icon--size-default" />
          </template>
        </v-list-item>
        <v-list-item
          base-color="primary"
          color="#907ad6"
          title="Mobile App Development"
          value="apps"
          to="/mobile-apps"
        >
          <template v-slot:prepend>
            <font-awesome-icon icon="fa-solid fa-mobile" class="v-icon v-icon--size-default" />
          </template>
        </v-list-item>
        <v-list-item
          base-color="primary"
          color="#907ad6"
          title="Surface Design Engineering"
          :href="surfLink"
          target="_blank"
        >
          <template v-slot:prepend>
            <font-awesome-icon icon="fa-solid fa-car-side" class="v-icon v-icon--size-default" />
          </template>
        </v-list-item>
        <v-list-item
          base-color="primary"
          color="#907ad6"
          title="Curriculum Vitae"
          :href="cvLink"
          target="_blank"
        >
          <template v-slot:prepend>
            <font-awesome-icon icon="fa-solid fa-file" class="v-icon v-icon--size-default" />
          </template>
        </v-list-item>
        <v-list-item
          base-color="primary"
          color="#907ad6"
          title="Contact Me"
          value="contact"
          to="/contact"
        >
          <template v-slot:prepend>
            <font-awesome-icon
              icon="fa-solid fa-address-book"
              class="v-icon v-icon--size-default"
            />
          </template>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
