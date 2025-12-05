/**
 * Plugin: Init App
 * Initialize app configurations
 */

export default defineNuxtPlugin((nuxtApp) => {
  // Hook เมื่อ app เริ่มต้น
  nuxtApp.hook('app:created', () => {
    console.log('🚀 Nuxt 4 App Created!')
  })
  
  // Hook เมื่อ app mounted
  nuxtApp.hook('app:mounted', () => {
    console.log('✅ Nuxt 4 App Mounted!')
  })
  
  // Hook เมื่อเกิด error
  nuxtApp.hook('app:error', (error) => {
    console.error('❌ App Error:', error)
  })
  
  // Return ค่าที่ต้องการให้ accessible ใน app
  return {
    provide: {
      appVersion: '1.0.0',
      appName: 'Nuxt 4 Demo'
    }
  }
})
