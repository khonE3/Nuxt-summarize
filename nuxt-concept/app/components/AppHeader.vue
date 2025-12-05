<template>
  <header class="app-header">
    <div class="container">
      <div class="logo">
        <NuxtLink to="/">
          <h1>{{ appName }}</h1>
        </NuxtLink>
      </div>
      <nav class="nav">
        <NuxtLink to="/" class="nav-link">หน้าแรก</NuxtLink>
        <NuxtLink to="/about" class="nav-link">เกี่ยวกับ</NuxtLink>
        <NuxtLink to="/products" class="nav-link">สินค้า</NuxtLink>
        <NuxtLink to="/contact" class="nav-link">ติดต่อ</NuxtLink>
      </nav>
      <div class="actions">
        <button @click="toggleTheme" class="theme-toggle">
          {{ isDark ? '☀️' : '🌙' }}
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const appName = config.public.appName
const { isDark, toggleTheme } = useTheme()
</script>

<style scoped lang="scss">
.app-header {
  background: var(--header-bg);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    h1 {
      font-size: 1.5rem;
      margin: 0;
      color: var(--primary-color);
    }
    
    a {
      text-decoration: none;
      color: inherit;
    }
  }
  
  .nav {
    display: flex;
    gap: 2rem;
    
    .nav-link {
      text-decoration: none;
      color: var(--text-color);
      font-weight: 500;
      transition: color 0.3s;
      
      &:hover,
      &.router-link-active {
        color: var(--primary-color);
      }
    }
  }
  
  .actions {
    .theme-toggle {
      background: transparent;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      padding: 0.5rem;
      transition: transform 0.3s;
      
      &:hover {
        transform: scale(1.2);
      }
    }
  }
}

@media (max-width: 768px) {
  .app-header {
    .nav {
      gap: 1rem;
      font-size: 0.9rem;
    }
  }
}
</style>
