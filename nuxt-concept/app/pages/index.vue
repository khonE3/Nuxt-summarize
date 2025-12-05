<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero gradient-animated">
      <div class="hero-content container">
        <h1 class="hero-title text-responsive-xl">
          ยินดีต้อนรับสู่ <span class="highlight">Nuxt 4</span>
        </h1>
        <p class="hero-subtitle">
          โปรเจคตัวอย่างที่แสดงฟีเจอร์ครบถ้วนของ Nuxt 4 เวอร์ชันล่าสุด
        </p>
        <div class="hero-actions">
          <UButton to="/products" size="xl" color="white" class="btn-modern">
            <UIcon name="i-heroicons-shopping-bag-20-solid" class="mr-2" />
            ดูสินค้า
          </UButton>
          <UButton to="/about" size="xl" variant="outline" color="white">
            เกี่ยวกับเรา
          </UButton>
        </div>
      </div>

      <!-- Decorative Elements -->
      <div class="hero-decoration">
        <div class="decoration-circle circle-1"></div>
        <div class="decoration-circle circle-2"></div>
        <div class="decoration-circle circle-3"></div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <h2 class="section-title text-responsive-lg">ฟีเจอร์หลัก</h2>

        <div class="features-grid">
          <UCard v-for="feature in features" :key="feature.id" class="feature-card glass-card"
            :ui="{ body: 'text-center p-6' }">
            <div class="feature-icon-wrap">
              <UIcon :name="feature.icon" class="feature-icon" />
            </div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-desc">{{ feature.description }}</p>
          </UCard>
        </div>
      </div>
    </section>

    <!-- Products Preview Section -->
    <section class="products-section">
      <div class="container">
        <h2 class="section-title text-responsive-lg">สินค้าแนะนำ</h2>

        <div v-if="pending" class="loading-container">
          <div class="skeleton-grid">
            <USkeleton v-for="n in 3" :key="n" class="skeleton-card" />
          </div>
        </div>

        <div v-else-if="error" class="error-container">
          <UIcon name="i-heroicons-exclamation-triangle" class="error-icon" />
          <p>เกิดข้อผิดพลาดในการโหลดข้อมูล</p>
          <UButton color="primary" @click="refresh">ลองอีกครั้ง</UButton>
        </div>

        <div v-else class="products-grid">
          <ProductCard v-for="product in featuredProducts" :key="product.id" :product="product" />
        </div>

        <div class="products-cta">
          <UButton to="/products" size="lg" color="primary" variant="soft">
            ดูสินค้าทั้งหมด
            <UIcon name="i-heroicons-arrow-right-20-solid" class="ml-2" />
          </UButton>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div v-for="stat in stats" :key="stat.label" class="stat-card glass-card">
            <div class="stat-icon-wrap">
              <UIcon :name="stat.icon" class="stat-icon" />
            </div>
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO Meta tags
useSeoMeta({
  title: 'หน้าแรก - Nuxt 4 Demo',
  description: 'ตัวอย่างโปรเจค Nuxt 4 เวอร์ชันล่าสุด พร้อมฟีเจอร์ครบถ้วน',
  ogTitle: 'หน้าแรก - Nuxt 4 Demo',
  ogDescription: 'ตัวอย่างโปรเจค Nuxt 4 เวอร์ชันล่าสุด',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image'
})

// ข้อมูลฟีเจอร์
const features = [
  {
    id: 1,
    icon: 'i-heroicons-bolt-solid',
    title: 'รวดเร็ว',
    description: 'ประสิทธิภาพสูงด้วย Vite และ Nitro'
  },
  {
    id: 2,
    icon: 'i-heroicons-paint-brush-solid',
    title: 'ออกแบบสวยงาม',
    description: 'UI/UX ที่ทันสมัยและใช้งานง่าย'
  },
  {
    id: 3,
    icon: 'i-heroicons-device-phone-mobile-solid',
    title: 'Responsive',
    description: 'รองรับทุกขนาดหน้าจอ'
  },
  {
    id: 4,
    icon: 'i-heroicons-shield-check-solid',
    title: 'ปลอดภัย',
    description: 'มาตรฐานความปลอดภัยสูง'
  },
  {
    id: 5,
    icon: 'i-heroicons-rocket-launch-solid',
    title: 'SEO Friendly',
    description: 'เหมาะกับการทำ SEO'
  },
  {
    id: 6,
    icon: 'i-simple-icons-typescript',
    title: 'TypeScript',
    description: 'Type-safe ด้วย TypeScript'
  }
]

// ดึงข้อมูลสินค้า
const { data: products, pending, error, refresh } = await useApi<any[]>('/api/products')

const featuredProducts = computed(() => {
  if (!products.value || !Array.isArray(products.value)) return []
  return products.value.slice(0, 3)
})

// สถิติ
const stats = [
  { icon: 'i-heroicons-cube-solid', value: '500+', label: 'สินค้า' },
  { icon: 'i-heroicons-user-group-solid', value: '10,000+', label: 'ลูกค้า' },
  { icon: 'i-heroicons-shopping-cart-solid', value: '50,000+', label: 'ออเดอร์' },
  { icon: 'i-heroicons-star-solid', value: '4.9', label: 'คะแนนรีวิว' }
]
</script>

<style scoped>
/* Container */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .container {
    padding: 0 1.5rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 2rem;
  }
}

/* Hero Section */
.hero {
  position: relative;
  padding: 4rem 0;
  min-height: 70vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

@media (min-width: 768px) {
  .hero {
    padding: 6rem 0;
  }
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
}

.hero-title {
  font-weight: 800;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.hero-title .highlight {
  background: linear-gradient(135deg, #ffffff 0%, #e0ffe0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 768px) {
  .hero-subtitle {
    font-size: 1.25rem;
  }
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Hero Decorations */
.hero-decoration {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.decoration-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: pulse-glow 4s ease-in-out infinite;
}

.circle-1 {
  width: 300px;
  height: 300px;
  top: -100px;
  right: -100px;
}

.circle-2 {
  width: 200px;
  height: 200px;
  bottom: -50px;
  left: -50px;
  animation-delay: 1s;
}

.circle-3 {
  width: 150px;
  height: 150px;
  top: 50%;
  left: 20%;
  animation-delay: 2s;
}

/* Section Title */
.section-title {
  font-weight: 700;
  text-align: center;
  margin-bottom: 2.5rem;
  color: var(--color-neutral-900);
}

.dark .section-title {
  color: var(--color-neutral-100);
}

/* Features Section */
.features-section {
  padding: 4rem 0;
}

@media (min-width: 768px) {
  .features-section {
    padding: 5rem 0;
  }
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.feature-card {
  text-align: center;
}

.feature-icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  margin: 0 auto 1rem;
  background: linear-gradient(135deg, rgba(0, 220, 130, 0.15) 0%, rgba(0, 100, 80, 0.1) 100%);
  border-radius: 1rem;
}

.feature-icon {
  width: 2.5rem;
  height: 2.5rem;
  color: #00dc82;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-neutral-900);
}

.dark .feature-title {
  color: var(--color-neutral-100);
}

.feature-desc {
  color: var(--color-neutral-500);
  font-size: 0.95rem;
}

/* Products Section */
.products-section {
  padding: 4rem 0;
  background: var(--color-neutral-100);
}

.dark .products-section {
  background: var(--color-neutral-900);
}

@media (min-width: 768px) {
  .products-section {
    padding: 5rem 0;
  }
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.products-cta {
  text-align: center;
  margin-top: 2.5rem;
}

/* Skeleton */
.skeleton-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .skeleton-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .skeleton-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.skeleton-card {
  height: 350px;
  border-radius: 1rem;
}

/* Error Container */
.error-container {
  text-align: center;
  padding: 3rem;
}

.error-icon {
  width: 3rem;
  height: 3rem;
  color: var(--color-error-500);
  margin-bottom: 1rem;
}

/* Stats Section */
.stats-section {
  padding: 4rem 0;
}

@media (min-width: 768px) {
  .stats-section {
    padding: 5rem 0;
  }
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

@media (min-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
}

.stat-card {
  text-align: center;
  padding: 1.5rem;
}

@media (min-width: 768px) {
  .stat-card {
    padding: 2rem;
  }
}

.stat-icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  margin: 0 auto 0.75rem;
  background: linear-gradient(135deg, rgba(0, 220, 130, 0.15) 0%, rgba(0, 100, 80, 0.1) 100%);
  border-radius: 0.75rem;
}

.stat-icon {
  width: 2rem;
  height: 2rem;
  color: #00dc82;
}

.stat-value {
  font-size: 2rem;
  font-weight: 800;
  color: #00dc82;
  margin-bottom: 0.25rem;
}

@media (min-width: 768px) {
  .stat-value {
    font-size: 2.5rem;
  }
}

.stat-label {
  color: var(--color-neutral-500);
  font-size: 0.95rem;
}
</style>
