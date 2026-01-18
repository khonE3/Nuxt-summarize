<template>
  <div class="home-page pb-20">
    <!-- Hero Section -->
    <section class="min-h-[90vh] flex items-center justify-center relative px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div class="container max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        <!-- Hero Text -->
        <div class="text-center lg:text-left animate-enter z-10">
          <UBadge variant="subtle" color="primary"
            class="mb-6 rounded-full px-4 py-1 text-sm font-medium ring-1 ring-primary-500/20 bg-primary-50/50 dark:bg-primary-900/20 backdrop-blur-sm">
            ✨ Nuxt 4.2 Release
          </UBadge>

          <h1 class="text-5xl sm:text-7xl font-black tracking-tight mb-8 leading-tight">
            Nuxt
            <span class="text-gradient">4</span>
          </h1>

          <p class="text-xl text-muted mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            สัมผัสประสบการณ์การพัฒนาเว็บที่รวดเร็ว ลื่นไหล และสวยงามระดับ Crystal Clear ด้วย Nuxt 4 และ Design System
            ใหม่ล่าสุด
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <UButton size="xl" color="primary"
              class="rounded-xl font-bold px-8 shadow-lg shadow-primary-500/20 hover:scale-105 transition-transform"
              to="/products">
              สำรวจสินค้า
              <UIcon name="i-heroicons-arrow-right-20-solid" class="ml-2" />
            </UButton>
            <UButton size="xl" color="white" variant="ghost"
              class="rounded-xl font-medium px-8 hover:bg-white/10 dark:hover:bg-white/5" to="/about">
              เกี่ยวกับเรา
            </UButton>
          </div>
        </div>

        <!-- Hero Visual (3D Glass) -->
        <div class="relative hidden lg:flex items-center justify-center perspective-container animate-enter"
          style="animation-delay: 0.2s">
          <div
            class="glass-card-3d relative w-[500px] h-[600px] card-crystal flex flex-col items-center justify-center text-center p-12 border-primary-500/30">
            <div class="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-blue-500/10 rounded-2xl"></div>

            <UIcon name="i-simple-icons-nuxtdotjs"
              class="text-9xl text-primary-500 mb-8 drop-shadow-2xl relative z-10 animate-float" />

            <h3 class="text-3xl font-bold mb-4 relative z-10">Nuxt 4 Premium</h3>
            <p class="text-muted relative z-10">
              High Performance<br>
              Zero Configuration<br>
              Edge Side Rendering
            </p>

            <!-- Floating Elements -->
            <div
              class="absolute -top-10 -right-10 w-24 h-24 card-crystal flex items-center justify-center animate-float"
              style="animation-delay: 1s">
              <UIcon name="i-heroicons-bolt-solid" class="text-4xl text-yellow-400" />
            </div>
            <div
              class="absolute -bottom-5 -left-10 w-20 h-20 card-crystal flex items-center justify-center animate-float"
              style="animation-delay: 2s">
              <UIcon name="i-heroicons-code-bracket-solid" class="text-3xl text-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-24 relative z-10">
      <div class="container max-w-7xl mx-auto px-4 sm:px-6">
        <div class="text-center max-w-3xl mx-auto mb-16 animate-enter">
          <h2 class="text-3xl font-bold mb-4">ฟีเจอร์ที่เหนือกว่า</h2>
          <p class="text-muted text-lg">ออกแบบมาเพื่อประสิทธิภาพและประสบการณ์ผู้ใช้ที่ดีที่สุด</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(feature, i) in features" :key="i"
            class="card-crystal hover:border-primary-500/50 group cursor-default">
            <div
              class="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <UIcon :name="feature.icon" class="text-3xl text-primary-600 dark:text-primary-400" />
            </div>
            <h3 class="text-xl font-bold mb-3">{{ feature.title }}</h3>
            <p class="text-muted">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 relative">
      <div class="container max-w-7xl mx-auto px-4">
        <div class="card-crystal p-12 relative overflow-hidden">
          <div class="absolute inset-0 bg-primary-500/5 dark:bg-primary-500/10"></div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            <div v-for="stat in stats" :key="stat.label">
              <div class="text-4xl md:text-5xl font-black text-primary-600 dark:text-primary-400 mb-2">{{ stat.value }}
              </div>
              <div class="text-sm font-medium text-muted uppercase tracking-wider">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'หน้าแรก - Nuxt 4 Demo',
  description: 'ยินดีต้อนรับสู่โปรเจค Nuxt 4 ตัวอย่าง',
})

const features = [
  { icon: 'i-heroicons-rocket-launch', title: 'เร็วแรงทะลุมิติ', desc: 'โหลดหน้าเว็บได้ทันทีด้วย Server-Side Rendering และ Smart Prefetching' },
  { icon: 'i-heroicons-paint-brush', title: 'ดีไซน์ล้ำสมัย', desc: 'ออกแบบด้วย Glassmorphism System ใหม่ล่าสุด รองรับ Dark Mode สมบูรณ์แบบ' },
  { icon: 'i-heroicons-shield-check', title: 'ปลอดภัยหายห่วง', desc: 'Type Safe 100% ด้วย TypeScript และระบบรักษาความปลอดภัยมาตรฐาน Enterprise' },
  { icon: 'i-heroicons-magnifying-glass-circle', title: 'SEO ขั้นเทพ', desc: 'รองรับ SEO เต็มรูปแบบด้วย Meta Tags อัตโนมัติและโครงสร้าง HTML ที่เป็นมิตรกับ Search Engine' }
]

const stats = [
  { value: '100%', label: 'Lighthouse' },
  { value: '0.1s', label: 'Load Time' },
  { value: '50+', label: 'Components' },
  { value: '24/7', label: 'Support' }
]
</script>

<style scoped>
.text-muted {
  color: var(--color-text-muted);
}
</style>
