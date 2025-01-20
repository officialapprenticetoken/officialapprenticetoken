/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
// import '@mdi/font/css/materialdesignicons.css'
// import 'font-awesome/css/font-awesome.min.css' // Ensure your project is capable of handling css files
// import { aliases, fa } from 'vuetify/iconsets/fa4'


import '@fortawesome/fontawesome-free/css/all.css' // Ensure your project is capable of handling css files
import { aliases, fa } from 'vuetify/iconsets/fa'


import 'vuetify/styles'
import '@/styles/app.scss'

// Composables
import {createVuetify, ThemeDefinition} from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#F9FFEF',
    surface: '#FFFFFF',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#f2ffdc',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#F9FFEF',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}

const myCustomDarkTheme = {
  dark: true,
  colors: {
    background: '#1E1E1E', // Lighter dark background for improved visibility
    surface: '#2C2C2C',    // Slightly lighter surface for contrast
    primary: '#BB86FC',    // Primary color with good contrast
    'primary-darken-1': '#3700B3', // Darker primary for emphasis
    secondary: '#03DAC6',  // Secondary with a vibrant accent
    'secondary-darken-1': '#018786', // Slightly muted secondary
    error: '#CF6679',      // Red for error with good contrast
    info: '#2196F3',       // Blue for information
    success: '#4CAF50',    // Green for success
    warning: '#FB8C00',    // Orange for warnings
  },
};


export default createVuetify({
  theme: {
    defaultTheme: 'myCustomDarkTheme',
    themes: {
      myCustomLightTheme,
      myCustomDarkTheme
    }
  },
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
})
