/**
 * Server Middleware: Logging
 * บันทึก log ทุก request
 */

export default defineEventHandler((event) => {
  const start = Date.now()
  
  // Log request
  console.log(`[${new Date().toISOString()}] ${event.method} ${event.path}`)
  
  // Hook ที่จะทำงานหลังจาก response
  event.node.res.on('finish', () => {
    const duration = Date.now() - start
    console.log(`[${new Date().toISOString()}] ${event.method} ${event.path} - ${event.node.res.statusCode} (${duration}ms)`)
  })
})
