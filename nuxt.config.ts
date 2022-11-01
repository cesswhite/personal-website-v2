// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/color-mode'
  ],
  css: ['@/assets/css/global.css'],
  unocss: {
    uno: true,
    preflight: true,
    icons: true,
    webFonts: {
      provider: 'google',
      fonts: {
        sans: 'Raleway:300,400,500,600,700'
      }
    }
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  }
})
