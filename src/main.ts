import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import FontAwesomeIcon from './FontAwesome'
import ContentCard from '@/components/ContentCard.vue'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon).component('content-card', ContentCard)

app.use(router)
app.use(vuetify)

app.mount('#app')
