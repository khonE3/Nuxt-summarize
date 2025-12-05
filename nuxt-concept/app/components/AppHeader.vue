<template>
  <header class="app-header">
    <div class="header-container">
      <!-- Logo -->
      <NuxtLink to="/" class="logo">
        <span class="logo-text">{{ appName }}</span>
      </NuxtLink>
      
      <!-- Desktop Navigation -->
      <nav class="nav-desktop">
        <NuxtLink 
          v-for="link in navLinks" 
          :key="link.to" 
          :to="link.to" 
          class="nav-link"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
      
      <!-- Actions -->
      <div class="header-actions">
        <!-- Theme Toggle -->
        <UButton
          :icon="colorMode.value === 'dark' ? 'i-heroicons-sun-20-solid' : 'i-heroicons-moon-20-solid'"
          color="neutral"
          variant="ghost"
          size="lg"
          @click="toggleColorMode"
          class="theme-toggle"
        />
        
        <!-- Mobile Menu Button -->
        <UButton
          icon="i-heroicons-bars-3-20-solid"
          color="neutral"
          variant="ghost"
          size="lg"
          class="mobile-menu-btn"
          @click="isMobileMenuOpen = true"
        />
      </div>
    </div>
    
    <!-- Mobile Drawer -->
    <USlideover v-model:open="isMobileMenuOpen" side="right" class="mobile-drawer">
      <template #content>
        <div class="drawer-content">
          <div class="drawer-header">
            <span class="drawer-logo">{{ appName }}</span>
            <UButton
              icon="i-heroicons-x-mark-20-solid"
              color="neutral"
              variant="ghost"
              size="lg"
              @click="isMobileMenuOpen = false"
            />
          </div>
          
          <nav class="drawer-nav">
            <NuxtLink 
              v-for="link in navLinks" 
              :key="link.to" 
              :to="link.to" 
              class="drawer-link"
              @click="isMobileMenuOpen = false"
            >
              <UIcon :name="link.icon" class="drawer-icon" />
              {{ link.label }}
            </NuxtLink>
          </nav>
          
          <div class="drawer-footer">
            <UButton
              :icon="colorMode.value === 'dark' ? 'i-heroicons-sun-20-solid' : 'i-heroicons-moon-20-solid'"
              :label="colorMode.value === 'dark' ? 'โหมดสว่าง' : 'โหมดมืด'"
              color="neutral"
              variant="soft"
              block
              @click="toggleColorMode"
            />
          </div>
        </div>
      </template>
    </USlideover>
  </header>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const appName = config.public.appName
const colorMode = useColorMode()

const isMobileMenuOpen = ref(false)

const navLinks = [
  { to: '/', label: 'หน้าแรก', icon: 'i-heroicons-home-20-solid' },
  { to: '/about', label: 'เกี่ยวกับ', icon: 'i-heroicons-information-circle-20-solid' },
  { to: '/products', label: 'สินค้า', icon: 'i-heroicons-shopping-bag-20-solid' },
  { to: '/contact', label: 'ติดต่อ', icon: 'i-heroicons-envelope-20-solid' }
]

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--glass-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--glass-border);
}

.header-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

/* Logo */
.logo {
  text-decoration: none;
  display: flex;
  align-items: center;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #00dc82, #00b369);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Desktop Navigation */
.nav-desktop {
  display: none;
  gap: 0.5rem;
}

@media (min-width: 768px) {
  .nav-desktop {
    display: flex;
  }
}

.nav-link {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  color: var(--color-neutral-700);
  text-decoration: none;
  transition: all 200ms ease;
}

.dark .nav-link {
  color: var(--color-neutral-300);
}

.nav-link:hover {
  background: rgba(0, 220, 130, 0.1);
  color: #00dc82;
}

.nav-link.router-link-active {
  background: rgba(0, 220, 130, 0.15);
  color: #00dc82;
}

/* Header Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.mobile-menu-btn {
  display: flex;
}

@media (min-width: 768px) {
  .mobile-menu-btn {
    display: none;
  }
}

.theme-toggle {
  display: none;
}

@media (min-width: 768px) {
  .theme-toggle {
    display: flex;
  }
}

/* Drawer Content */
.drawer-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1.5rem;
}

.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-neutral-200);
}

.dark .drawer-header {
  border-bottom-color: var(--color-neutral-700);
}

.drawer-logo {
  font-size: 1.25rem;
  font-weight: 700;
  color: #00dc82;
}

.drawer-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
}

.drawer-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1rem;
  border-radius: 0.75rem;
  font-weight: 500;
  color: var(--color-neutral-700);
  text-decoration: none;
  transition: all 200ms ease;
}

.dark .drawer-link {
  color: var(--color-neutral-300);
}

.drawer-link:hover,
.drawer-link.router-link-active {
  background: rgba(0, 220, 130, 0.15);
  color: #00dc82;
}

.drawer-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.drawer-footer {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid var(--color-neutral-200);
}

.dark .drawer-footer {
  border-top-color: var(--color-neutral-700);
}
</style>
