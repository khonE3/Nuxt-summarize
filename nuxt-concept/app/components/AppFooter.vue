<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>{{ appName }}</h3>
          <p>ตัวอย่างโปรเจค Nuxt 4 เวอร์ชันล่าสุด</p>
        </div>
        
        <div class="footer-section">
          <h4>ลิงก์ด่วน</h4>
          <ul>
            <li><NuxtLink to="/">หน้าแรก</NuxtLink></li>
            <li><NuxtLink to="/about">เกี่ยวกับ</NuxtLink></li>
            <li><NuxtLink to="/products">สินค้า</NuxtLink></li>
            <li><NuxtLink to="/contact">ติดต่อ</NuxtLink></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>ติดต่อเรา</h4>
          <ul>
            <li>Email: info@example.com</li>
            <li>Tel: 02-xxx-xxxx</li>
            <li>Line: @example</li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>โซเชียล</h4>
          <div class="social-links">
            <a href="#" target="_blank">Facebook</a>
            <a href="#" target="_blank">Twitter</a>
            <a href="#" target="_blank">Instagram</a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} {{ appName }}. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const appName = config.public.appName
const currentYear = new Date().getFullYear()
</script>

<style scoped lang="scss">
.app-footer {
  background: var(--footer-bg);
  color: var(--footer-text);
  padding: 3rem 0 1rem;
  margin-top: auto;
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
  }
  
  .footer-section {
    h3, h4 {
      margin-bottom: 1rem;
      color: var(--primary-color);
    }
    
    ul {
      list-style: none;
      padding: 0;
      
      li {
        margin-bottom: 0.5rem;
      }
      
      a {
        color: var(--footer-text);
        text-decoration: none;
        transition: color 0.3s;
        
        &:hover {
          color: var(--primary-color);
        }
      }
    }
    
    .social-links {
      display: flex;
      gap: 1rem;
      
      a {
        color: var(--footer-text);
        text-decoration: none;
        transition: color 0.3s;
        
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
  
  .footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 1rem;
    text-align: center;
  }
}
</style>
