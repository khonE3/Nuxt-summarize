<template>
  <div class="about-page">
    <div class="container">
      <h1 class="page-title">เกี่ยวกับเรา</h1>
      
      <div class="about-content">
        <section class="about-intro">
          <h2>ยินดีต้อนรับสู่ Nuxt 4 Demo</h2>
          <p>
            นี่คือโปรเจคตัวอย่างที่แสดงความสามารถทั้งหมดของ Nuxt 4 เวอร์ชันล่าสุด 
            ซึ่งรวมถึงฟีเจอร์ต่างๆ เช่น Auto-imports, File-based routing, Server API, 
            และอื่นๆ อีกมากมาย
          </p>
        </section>
        
        <section class="tech-stack">
          <h2>เทคโนโลยีที่ใช้</h2>
          <div class="tech-grid">
            <div v-for="tech in technologies" :key="tech.name" class="tech-card">
              <div class="tech-icon">{{ tech.icon }}</div>
              <h3>{{ tech.name }}</h3>
              <p>{{ tech.description }}</p>
            </div>
          </div>
        </section>
        
        <section class="features-detail">
          <h2>ฟีเจอร์ที่รวมอยู่ในโปรเจคนี้</h2>
          <ul class="features-list">
            <li v-for="feature in projectFeatures" :key="feature">
              <span class="check-icon">✓</span>
              {{ feature }}
            </li>
          </ul>
        </section>
        
        <section class="team">
          <h2>ทีมพัฒนา</h2>
          <p class="team-description">
            โปรเจคนี้พัฒนาโดยทีมที่มีความเชี่ยวชาญด้าน Vue.js และ Nuxt.js 
            เพื่อเป็นตัวอย่างการใช้งานที่ดีที่สุด (Best Practices) สำหรับการพัฒนาเว็บแอปพลิเคชันด้วย Nuxt 4
          </p>
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
    icon: '💚',
    description: 'Framework ตัวใหม่ล่าสุดพร้อม auto-imports และ TypeScript'
  },
  {
    name: 'Vue 3',
    icon: '🎯',
    description: 'Composition API และ Reactivity System ที่ทรงพลัง'
  },
  {
    name: 'TypeScript',
    icon: '📘',
    description: 'Type Safety สำหรับโค้ดที่มั่นคงและบำรุงรักษาง่าย'
  },
  {
    name: 'Vite',
    icon: '⚡',
    description: 'Build Tool ที่รวดเร็วและทันสมัย'
  },
  {
    name: 'Nitro',
    icon: '🔥',
    description: 'Server Engine ที่มีประสิทธิภาพสูง'
  },
  {
    name: 'Pinia',
    icon: '🍍',
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
  'CSS Preprocessor - รองรับ SCSS',
  'API Integration - ตัวอย่างการเรียกใช้ API',
  'Error Handling - จัดการ error อย่างเหมาะสม',
  'Loading States - แสดง loading state ที่สวยงาม'
]
</script>

<style scoped lang="scss">
.about-page {
  padding: 2rem 0;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .page-title {
    font-size: 3rem;
    font-weight: 800;
    text-align: center;
    margin-bottom: 3rem;
    color: var(--text-color);
  }
  
  .about-content {
    section {
      margin-bottom: 4rem;
      
      h2 {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        color: var(--text-color);
      }
      
      p {
        font-size: 1.125rem;
        line-height: 1.8;
        color: var(--text-muted);
      }
    }
    
    .tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
      
      .tech-card {
        background: var(--card-bg);
        padding: 1.5rem;
        border-radius: 12px;
        text-align: center;
        border: 1px solid var(--border-color);
        box-shadow: var(--shadow-card);
        transition: transform 0.3s, box-shadow 0.3s;
        
        &:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
        
        .tech-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--text-color);
        }
        
        p {
          font-size: 0.9rem;
          color: var(--text-muted);
        }
      }
    }
    
    .features-list {
      list-style: none;
      padding: 0;
      
      li {
        padding: 1rem 0;
        border-bottom: 1px solid var(--border-color);
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        font-size: 1.0625rem;
        color: var(--text-color);
        
        &:last-child {
          border-bottom: none;
        }
        
        .check-icon {
          color: var(--primary-color);
          font-weight: 700;
          font-size: 1.25rem;
          flex-shrink: 0;
        }
      }
    }
    
    .team-description {
      background: var(--card-bg);
      padding: 2rem;
      border-radius: 12px;
      border: 1px solid var(--border-color);
      border-left: 4px solid var(--primary-color);
      box-shadow: var(--shadow-card);
    }
  }
}
</style>
