/**
 * App Middleware: Visitor Counter
 * นับจำนวนการเข้าชม
 */

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    // นับจำนวนครั้งที่เข้าชม
    const visits = localStorage.getItem('visits')
    const count = visits ? parseInt(visits) + 1 : 1
    localStorage.setItem('visits', count.toString())
    
    console.log(`คุณเข้าชมเว็บไซต์แล้ว ${count} ครั้ง`)
  }
})
