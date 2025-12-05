<template>
  <div class="home-page">
    <section class="hero">
      <div class="container">
        <h1 class="hero-title">ยินดีต้อนรับสู่ Nuxt 4</h1>
        <p class="hero-subtitle">
          โปรเจคตัวอย่างที่แสดงฟีเจอร์ครบถ้วนของ Nuxt 4 เวอร์ชันล่าสุด
        </p>
        <div class="hero-actions">
          <NuxtLink to="/products" class="btn btn-primary btn-lg">
            ดูสินค้า
          </NuxtLink>
          <NuxtLink to="/about" class="btn btn-outline btn-lg">
            เกี่ยวกับเรา
          </NuxtLink>
        </div>
      </div>
    </section>
    
    <section class="features">
      <div class="container">
        <h2 class="section-title">ฟีเจอร์หลัก</h2>
        
        <div class="features-grid">
          <div v-for="feature in features" :key="feature.id" class="feature-card">
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="products-preview">
      <div class="container">
        <h2 class="section-title">สินค้าแนะนำ</h2>
        
        <div v-if="pending" class="loading-container">
          <LoadingSpinner message="กำลังโหลดสินค้า..." />
        </div>
        
        <div v-else-if="error" class="error-container">
          <p>เกิดข้อผิดพลาดในการโหลดข้อมูล</p>
        </div>
        
        <div v-else class="products-grid">
          <ProductCard
            v-for="product in featuredProducts"
            :key="product.id"
            :product="product"
          />
        </div>
        
        <div class="text-center" style="margin-top: 2rem;">
          <NuxtLink to="/products" class="btn btn-primary">
            ดูสินค้าทั้งหมด
          </NuxtLink>
        </div>
      </div>
    </section>
    
    <section class="stats">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-value">{{ stats.products }}+</div>
            <div class="stat-label">สินค้า</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">{{ stats.customers }}+</div>
            <div class="stat-label">ลูกค้า</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">{{ stats.orders }}+</div>
            <div class="stat-label">ออเดอร์</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">{{ stats.rating }}</div>
            <div class="stat-label">คะแนนรีวิว</div>
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
    icon: '⚡',
    title: 'รวดเร็ว',
    description: 'ประสิทธิภาพสูงด้วย Vite และ Nitro'
  },
  {
    id: 2,
    icon: '🎨',
    title: 'ออกแบบสวยงาม',
    description: 'UI/UX ที่ทันสมัยและใช้งานง่าย'
  },
  {
    id: 3,
    icon: '📱',
    title: 'Responsive',
    description: 'รองรับทุกขนาดหน้าจอ'
  },
  {
    id: 4,
    icon: '🔒',
    title: 'ปลอดภัย',
    description: 'มาตรฐานความปลอดภัยสูง'
  },
  {
    id: 5,
    icon: '🚀',
    title: 'SEO Friendly',
    description: 'เหมาะกับการทำ SEO'
  },
  {
    id: 6,
    icon: '💡',
    title: 'TypeScript',
    description: 'Type-safe ด้วย TypeScript'
  }
]

// ดึงข้อมูลสินค้า
const { data: products, pending, error } = await useApi<any[]>('/api/products')

const featuredProducts = computed(() => {
  if (!products.value || !Array.isArray(products.value)) return []
  return products.value.slice(0, 3)
})

// สถิติ
const stats = {
  products: 500,
  customers: 10000,
  orders: 50000,
  rating: 4.9
}
</script>

<style scoped lang="scss">
.home-page {
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 6rem 0;
    text-align: center;
    position: relative;
    overflow: hidden;
    
    // เพิ่ม overlay เพื่อให้อ่านง่ายขึ้น
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.1);
      z-index: 0;
    }
    
    // ทำให้ content อยู่เหนือ overlay
    .container {
      position: relative;
      z-index: 1;
    }
    
    .hero-title {
      font-size: 3.5rem;
      font-weight: 800;
      margin-bottom: 1rem;
      color: #ffffff;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
      
      @media (max-width: 768px) {
        font-size: 2.5rem;
      }
    }
    
    .hero-subtitle {
      font-size: 1.25rem;
      color: #f0f0f0;
      margin-bottom: 2rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    }
    
    .hero-actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
  
  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3rem;
    color: var(--text-color);
  }
  
  .features {
    padding: 4rem 0;
    
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      
      .feature-card {
        text-align: center;
        padding: 2rem;
        background: var(--card-bg);
        border-radius: 12px;
        transition: transform 0.3s, box-shadow 0.3s;
        
        &:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
        
        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-color);
        }
        
        p {
          color: var(--text-muted);
        }
      }
    }
  }
  
  .products-preview {
    padding: 4rem 0;
    background: var(--section-bg);
    
    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    
    .loading-container,
    .error-container {
      text-align: center;
      padding: 3rem;
    }
  }
  
  .stats {
    padding: 4rem 0;
    
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      
      .stat-card {
        text-align: center;
        padding: 2rem;
        background: var(--card-bg);
        border-radius: 12px;
        
        .stat-value {
          font-size: 3rem;
          font-weight: 800;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }
        
        .stat-label {
          font-size: 1.125rem;
          color: var(--text-muted);
        }
      }
    }
  }
}

.btn {
  padding: 0.75rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  display: inline-block;
  
  &.btn-lg {
    padding: 1rem 2.5rem;
    font-size: 1.125rem;
  }
  
  &.btn-primary {
    background: var(--primary-color);
    color: white;
    border: none;
    
    &:hover {
      background: var(--primary-hover);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
    }
  }
  
  &.btn-outline {
    background: transparent;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
    
    &:hover {
      background: var(--primary-color);
      color: white;
    }
  }
}

.text-center {
  text-align: center;
}
</style>
