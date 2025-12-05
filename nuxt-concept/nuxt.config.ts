// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Compatibility date for Nuxt 4
  compatibilityDate: '2025-07-15',
  
  // Enable Nuxt DevTools
  devtools: { enabled: true },
  
  // Enable future features
  future: {
    compatibilityVersion: 4,
  },
  
  // App configuration
  app: {
    head: {
      title: 'Nuxt 4 Complete Demo',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Nuxt 4 Complete Example with All Features' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  
  // CSS configuration - Use main.css for Tailwind + Nuxt UI
  css: [
    '~/assets/css/main.css'
  ],
  
  // Modules
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxt/eslint'
  ],
  
  // Nuxt UI configuration
  ui: {
    fonts: false, // Already using @nuxt/fonts from Nuxt UI
    theme: {
      colors: ['primary', 'secondary', 'success', 'info', 'warning', 'error']
    }
  },
  
  // Image configuration
  image: {
    formats: ['webp', 'avif', 'png', 'jpg']
  },
  
  // Pinia configuration
  pinia: {
    storesDirs: ['./stores/**']
  },
  
  // Runtime config (environment variables)
  runtimeConfig: {
    // Private keys (server-side only)
    apiSecret: process.env.API_SECRET || 'secret-key',
    
    // Public keys (exposed to client)
    public: {
      apiBase: process.env.API_BASE_URL || 'https://api.example.com',
      appName: 'Nuxt 4 Demo'
    }
  },
  
  // Vite configuration
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/_variables.scss" as *;'
        }
      }
    }
  },
  
  // TypeScript configuration
  typescript: {
    strict: true,
    typeCheck: false  // Disable during dev for faster builds
  },
  
  // Nitro server configuration
  nitro: {
    compressPublicAssets: true,
  }
})
