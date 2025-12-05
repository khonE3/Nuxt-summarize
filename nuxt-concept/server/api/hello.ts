/**
 * API Endpoint: GET /api/hello
 * API ตัวอย่างง่ายๆ
 */

export default defineEventHandler((event) => {
  return {
    message: 'Hello from Nuxt 4 API!',
    timestamp: new Date().toISOString(),
    method: event.method,
    path: event.path
  }
})
