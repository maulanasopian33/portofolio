// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Nuxt 4 compatibility
  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2025-07-15',
  ssr: true,

  // Global CSS
  css: [
    '~/assets/css/main.css',
    '~/assets/css/animations.css'
  ],

  // App Configuration
  app: {
    head: {
      htmlAttrs: {
        lang: 'id'
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#0a0a0a' },
        { property: 'og:site_name', content: 'Maulana Sopian' },
        { property: 'og:locale', content: 'id_ID' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Outfit:wght@100..900&display=swap' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },

  // Modules (Jika ingin menambah module di masa depan)
  modules: [],

  // DevTools
  devtools: { enabled: false }
})
