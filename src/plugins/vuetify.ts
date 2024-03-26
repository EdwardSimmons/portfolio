import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa-svg'

const portfolioTheme: ThemeDefinition = {
  colors: {
    background: '#f4f9f4',
    surface: '#FFFFFF',
    primary: '#678c89',
    secondary: '#b9dfd1',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00'
  }
}

const vuetify = createVuetify({
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa
    }
  },
  theme: {
    defaultTheme: 'portfolioTheme',
    themes: {
      portfolioTheme
    }
  }
})

export default vuetify
