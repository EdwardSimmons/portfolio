<script setup lang="ts">
import { reactive } from 'vue'
import MobileAppInfo from '@/components/MobileAppInfo.vue'
import MobileAppIcon from '@/components/MobileAppIcon.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { PixelSpinner } from 'epic-spinners'

interface MobileApp {
  name: string
  icon: string
  description: string
  url?: {
    android?: string
    ios?: string
  }
}

const apps: MobileApp[] = [
  {
    name: 'Opnametool IMG',
    icon: 'src/assets/MobileAppIcons/opnametool.webp',
    description:
      "This iOS app was a bespoke project for the Instituut Mijnbouwschade Groningen (IMG), a department of the Dutch government. It is used by their team of experts to assess the damage caused to people's homes by earthquakes, and to calculate any compensation that they are owed. Over €1b has been awarded as a result.",
    url: {
      ios: 'https://apps.apple.com/us/app/opnametool-img/id1605604226?itsct=apps_box_badge&amp;itscg=30200'
    }
  },
  {
    name: 'Atabase Schade',
    icon: 'src/assets/MobileAppIcons/atabase_schade.webp',
    description:
      'This iOS app was the commercial successor to Opnametool IMG, designed by Atabix to be used by any client wishing to carry out offline damage assessments of property.',
    url: {
      ios: 'https://apps.apple.com/nl/app/atabase-schade/id1580397787?itsct=apps_box_badge&amp;itscg=30200'
    }
  },
  {
    name: 'Find My ULD',
    icon: 'src/assets/MobileAppIcons/fmu.webp',
    description:
      'This app, designed simultaneously for Android and iOS, allowed ACL Airshop customers to track and manage ULDs - the standardised containers used in the air freight industry.',
    url: {
      android:
        'https://play.google.com/store/apps/details?id=com.uldcontrol.findmyuld&hl=en&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
      ios: 'https://apps.apple.com/us/app/find-my-uld/id1463401103?itsct=apps_box_badge&amp;itscg=30200'
    }
  },
  {
    name: 'WorkNed',
    icon: 'src/assets/MobileAppIcons/workned.webp',
    description:
      'Available for both Android and iOS, this app allowed part-time employers and employees of the Netherlands to build a network of connections, manage their contracts, apply for jobs, and submit timesheets. ',
    url: {
      android:
        'https://play.google.com/store/apps/details?id=nl.workned.nativescript&pli=1&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
      ios: 'https://apps.apple.com/nl/app/workned/id1611735028?itsct=apps_box_badge&amp;itscg=30200'
    }
  },
  {
    name: 'Memoria',
    icon: 'src/assets/MobileAppIcons/memoria.png',
    description:
      'Developed solely for iOS, this app was designed for the Van der Spek funeral company, and is used by their employees to manage their appointments, track hours worked, and view details of the deceased. This was my first project at Atabix.'
  }
]

const state = reactive({
  isLoading: true
})

const onCarouselInit = () => {
  setTimeout(() => {
    state.isLoading = false
  }, 1000)
}
</script>

<template>
  <div class="relative">
    <pixel-spinner
      :animation-duration="2000"
      :size="70"
      color="#5c8d89"
      :class="state.isLoading ? 'loader' : 'loader finished'"
    />
    <carousel
      @init="onCarouselInit"
      :items-to-show="1"
      :wrap-around="true"
      :class="state.isLoading ? 'carousel-loading' : 'carousel-finished'"
    >
      <slide v-for="app in apps" :key="app.name">
        <mobile-app-info>
          <template #icon>
            <mobile-app-icon :img="app.icon" />
          </template>
          <template #heading>{{ app.name }}</template>
          {{ app.description }}
          <template #links v-if="app.url">
            <div class="app-store-links-container">
              <div v-if="app.url.android" class="app-store-android">
                <a :href="app.url.android" class="app-store-link"
                  ><img
                    alt="Get it on Google Play"
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                /></a>
              </div>
              <div v-if="app.url.ios" class="app-store-ios">
                <a
                  :href="app.url.ios"
                  style="
                    display: inline-block;
                    overflow: hidden;
                    border-radius: 13px;
                    width: 250px;
                    height: 83px;
                  "
                  class="app-store-link"
                  ><img
                    src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1559347200"
                    alt="Download on the App Store"
                    style="border-radius: 13px; width: 250px; height: 83px"
                /></a>
              </div>
            </div>
          </template>
        </mobile-app-info>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<style>
.app-store-links-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.app-store-android {
  transform: scale(50%);
}

.app-store-ios {
  transform: scale(50%);
}

.app-store-link {
  background-color: #ffffff;
}

.carousel__prev,
.carousel__next {
  margin: 0;
}

.loader {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
}

.finished {
  opacity: 0;
  transition: all 1s;
}

.carousel-loading {
  opacity: 0;
}

.carousel-finished {
  opacity: 1;
  transition: all 1s;
}
</style>
