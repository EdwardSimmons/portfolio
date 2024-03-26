<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue'
import { isMobile } from 'mobile-device-detect'

const drawer = ref(true)
const rail = ref(!isMobile)
const rounded = ref(isMobile ? 'lg' : 0)
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
        <v-list-item active-color="#907ad6" title="Home" value="home" to="/">
          <template v-slot:prepend>
            <font-awesome-icon icon="fa-solid fa-home" class="v-icon v-icon--size-default" />
          </template>
        </v-list-item>
        <v-list-item active-color="#907ad6" title="Physics" value="physics" to="/physics">
          <template v-slot:prepend>
            <font-awesome-icon icon="fa-solid fa-atom" class="v-icon v-icon--size-default" />
          </template>
        </v-list-item>
        <v-list-item
          active-color="#907ad6"
          title="Mobile App Development"
          value="apps"
          to="/mobile-apps"
        >
          <template v-slot:prepend>
            <font-awesome-icon icon="fa-solid fa-mobile" class="v-icon v-icon--size-default" />
          </template>
        </v-list-item>
        <v-list-item
          active-color="#907ad6"
          title="Surface Design Engineering"
          value="surfacing"
          to="/surfacing"
        >
          <template v-slot:prepend>
            <font-awesome-icon icon="fa-solid fa-car-side" class="v-icon v-icon--size-default" />
          </template>
        </v-list-item>
        <v-list-item
          active-color="#907ad6"
          title="Curriculum Vitae"
          value="cv"
          to="/curriculum-vitae"
        >
          <template v-slot:prepend>
            <font-awesome-icon icon="fa-solid fa-file" class="v-icon v-icon--size-default" />
          </template>
        </v-list-item>
        <v-list-item active-color="#907ad6" title="Contact Me" value="contact" to="/contact">
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
