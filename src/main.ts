import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faAddressBook,
  faUser,
  faBriefcase,
  faGraduationCap,
  faPhone,
  faEnvelope,
  faScrewdriverWrench,
  faAward,
  faMobile,
  faCarSide,
  faChevronRight,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons'
import { faSmile } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(
  faSmile,
  faGithub,
  faLinkedin,
  faAddressBook,
  faUser,
  faBriefcase,
  faGraduationCap,
  faPhone,
  faEnvelope,
  faScrewdriverWrench,
  faAward,
  faMobile,
  faCarSide,
  faChevronRight,
  faChevronLeft
)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
