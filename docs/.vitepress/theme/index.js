import DefaultTheme from 'vitepress/theme'
import './style/index.css' // Hier liegt dein animated button CSS + alle anderen Styles
import DownloadSection from './components/DownloadSection.vue'

export default {
  ...DefaultTheme,
  // Optional: du kannst hier noch eigene Layouts oder Komponenten registrieren
  // Layout() {
  //   return h(DefaultTheme.Layout)
  // },
  enhanceApp({ app }) {
    // Globale Vue-Komponenten registrieren
    app.component('DownloadSection', DownloadSection)
  }
}
