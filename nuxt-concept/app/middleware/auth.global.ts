/**
 * App Middleware: Authentication
 * ตรวจสอบการ authenticate (ตัวอย่าง)
 */

export default defineNuxtRouteMiddleware((to, from) => {
  // ตัวอย่าง: ป้องกัน route ที่ต้องการ authentication
  const protectedRoutes = ['/admin', '/dashboard']
  
  if (protectedRoutes.some(route => to.path.startsWith(route))) {
    // ตรวจสอบ authentication (ในตัวอย่างนี้จะ bypass)
    const isAuthenticated = false
    
    if (!isAuthenticated) {
      // Redirect ไปหน้า login
      return navigateTo('/login')
    }
  }
})
