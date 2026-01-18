<template>
  <div class="about-page">
    <div class="container">
      <h1 class="page-title text-responsive-lg">เกี่ยวกับเรา</h1>

      <div class="about-content">
        <!-- Intro Section -->
        <section class="about-intro glass-card">
          <h2>ยินดีต้อนรับสู่ Nuxt 4 Demo</h2>
          <p>
            นี่คือโปรเจคตัวอย่างที่แสดงความสามารถทั้งหมดของ Nuxt 4 เวอร์ชันล่าสุด
            ซึ่งรวมถึงฟีเจอร์ต่างๆ เช่น Auto-imports, File-based routing, Server API,
            และอื่นๆ อีกมากมาย
          </p>
        </section>

        <!-- Tech Stack Section -->
        <section class="tech-section">
          <h2 class="section-subtitle">เทคโนโลยีที่ใช้</h2>
          <div class="tech-grid">
            <UCard v-for="tech in technologies" :key="tech.name" class="tech-card card-hover"
              :ui="{ body: 'text-center p-5' }">
              <div class="tech-icon-wrap">
                <UIcon :name="tech.icon" class="tech-icon" />
              </div>
              <h3 class="tech-name">{{ tech.name }}</h3>
              <p class="tech-desc">{{ tech.description }}</p>
            </UCard>
          </div>
        </section>

        <!-- Features Detail Section -->
        <section class="features-detail">
          <h2 class="section-subtitle">ฟีเจอร์ที่รวมอยู่ในโปรเจคนี้</h2>
          <div class="features-list">
            <div v-for="(feature, index) in projectFeatures" :key="index" class="feature-item">
              <UIcon name="i-heroicons-check-circle-solid" class="feature-check" />
              <span>{{ feature }}</span>
            </div>
          </div>
        </section>

        <!-- Team Section -->
        <section class="team-section">
          <h2 class="section-subtitle">ทีมพัฒนา</h2>
          <UCard class="team-card" :ui="{ body: 'p-6' }">
            <div class="team-content">
              <UIcon name="i-heroicons-user-group-solid" class="team-icon" />
              <p>
                โปรเจคนี้พัฒนาโดยทีมที่มีความเชี่ยวชาญด้าน Vue.js และ Nuxt.js
                เพื่อเป็นตัวอย่างการใช้งานที่ดีที่สุด (Best Practices) สำหรับการพัฒนาเว็บแอปพลิเคชันด้วย Nuxt 4
              </p>
            </div>
          </UCard>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'เกี่ยวกับเรา - Nuxt 4 Demo',
  description: 'เรียนรู้เกี่ยวกับโปรเจค Nuxt 4 Demo และเทคโนโลยีที่เราใช้',
  ogTitle: 'เกี่ยวกับเรา - Nuxt 4 Demo',
})

const technologies = [
  {
    name: 'Nuxt 4',
    icon: 'i-simple-icons-nuxtdotjs',
    description: 'Framework ตัวใหม่ล่าสุดพร้อม auto-imports และ TypeScript'
  },
  {
    name: 'Vue 3',
    icon: 'i-simple-icons-vuedotjs',
    description: 'Composition API และ Reactivity System ที่ทรงพลัง'
  },
  {
    name: 'TypeScript',
    icon: 'i-simple-icons-typescript',
    description: 'Type Safety สำหรับโค้ดที่มั่นคงและบำรุงรักษาง่าย'
  },
  {
    name: 'Vite',
    icon: 'i-simple-icons-vite',
    description: 'Build Tool ที่รวดเร็วและทันสมัย'
  },
  {
    name: 'Nitro',
    icon: 'i-heroicons-bolt-solid',
    description: 'Server Engine ที่มีประสิทธิภาพสูง'
  },
  {
    name: 'Pinia',
    icon: 'i-simple-icons-pinia',
    description: 'State Management ที่ใช้งานง่ายและมีประสิทธิภาพ'
  }
]

const projectFeatures = [
  'File-based Routing - สร้างเส้นทางอัตโนมัติจากโครงสร้างโฟลเดอร์',
  'Auto-imports - Import components และ composables อัตโนมัติ',
  'Server API Routes - สร้าง API endpoints ได้ง่าย',
  'Middleware - จัดการ authentication และ authorization',
  'Layouts - ออกแบบ layout ที่ยืดหยุ่น',
  'Composables - Logic ที่ใช้ซ้ำได้',
  'TypeScript Support - Type safety ตลอดทั้งโปรเจค',
  'State Management - ใช้ Pinia สำหรับจัดการ state',
  'Dark Mode - รองรับธีมมืดและสว่าง',
  'SEO Optimization - เหมาะกับการทำ SEO',
  'Image Optimization - ใช้ @nuxt/image สำหรับรูปภาพ',
  'CSS Preprocessor - รองรับ SCSS และ Tailwind CSS',
  'API Integration - ตัวอย่างการเรียกใช้ API',
  'Error Handling - จัดการ error อย่างเหมาะสม',
  'Loading States - แสดง loading state ที่สวยงาม'
]
</script>

<style scoped>
.about-page {
  padding: 2rem 0;
}

.container {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .container {
    padding: 0 1.5rem;
  }
}

.page-title {
  font-weight: 800;
  text-align: center;
  margin-bottom: 2.5rem;
  color: var(--color-neutral-900);
}

.dark .page-title {
  color: var(--color-neutral-100);
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

/* Intro Section */
.about-intro {
  text-align: center;
  padding: 2rem;
}

.about-intro h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-neutral-900);
}

.dark .about-intro h2 {
  color: var(--color-neutral-100);
}

.about-intro p {
  color: var(--color-neutral-600);
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;
}

.dark .about-intro p {
  color: var(--color-neutral-400);
}

/* Section Subtitle */
.section-subtitle {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--color-neutral-900);
}

.dark .section-subtitle {
  color: var(--color-neutral-100);
}

/* Tech Grid */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
}

@media (min-width: 640px) {
  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .tech-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.tech-icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  margin: 0 auto 0.75rem;
  background: linear-gradient(135deg, rgba(0, 220, 130, 0.1) 0%, rgba(0, 60, 60, 0.1) 100%);
  border-radius: 1rem;
}

.tech-icon {
  width: 2.5rem;
  height: 2.5rem;
  color: #00dc82;
}

.tech-name {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-neutral-900);
}

.dark .tech-name {
  color: var(--color-neutral-100);
}

.tech-desc {
  font-size: 0.875rem;
  color: var(--color-neutral-500);
  line-height: 1.5;
}

/* Features List */
.features-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
}

@media (min-width: 768px) {
  .features-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem;
  background: var(--color-neutral-50);
  border-radius: 0.75rem;
  transition: all 200ms ease;
}

.dark .feature-item {
  background: var(--color-neutral-800);
}

.feature-item:hover {
  background: rgba(0, 220, 130, 0.1);
}

.feature-check {
  flex-shrink: 0;
  width: 1.25rem;
  height: 1.25rem;
  color: #00dc82;
  margin-top: 0.125rem;
}

.feature-item span {
  color: var(--color-neutral-700);
  font-size: 0.95rem;
  line-height: 1.5;
}

.dark .feature-item span {
  color: var(--color-neutral-300);
}

/* Team Section */
.team-card {
  border-left: 4px solid #00dc82;
}

.team-content {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.team-icon {
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  color: #00dc82;
}

.team-content p {
  color: var(--color-neutral-600);
  line-height: 1.8;
  margin: 0;
}

.dark .team-content p {
  color: var(--color-neutral-400);
}
</style>
