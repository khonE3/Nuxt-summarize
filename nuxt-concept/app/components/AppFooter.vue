<template>
  <footer class="app-footer">
    <div class="footer-container">
      <div class="footer-content">
        <!-- Brand Section -->
        <div class="footer-brand">
          <NuxtLink to="/" class="footer-logo">
            <span class="logo-text">{{ appName }}</span>
          </NuxtLink>
          <p class="footer-desc">ตัวอย่างโปรเจค Nuxt 4 เวอร์ชันล่าสุด</p>

          <!-- Social Links -->
          <div class="social-links">
            <UButton v-for="social in socialLinks" :key="social.name" :icon="social.icon" color="neutral"
              variant="ghost" size="sm" :to="social.href" :aria-label="social.name" target="_blank" />
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-section">
          <h4 class="footer-title">ลิงก์ด่วน</h4>
          <nav class="footer-nav">
            <NuxtLink v-for="link in quickLinks" :key="link.to" :to="link.to" class="footer-link">
              {{ link.label }}
            </NuxtLink>
          </nav>
        </div>

        <!-- Contact Info -->
        <div class="footer-section">
          <h4 class="footer-title">ติดต่อเรา</h4>
          <div class="footer-contact">
            <div class="contact-item">
              <UIcon name="i-heroicons-envelope" class="contact-icon" />
              <span>info@example.com</span>
            </div>
            <div class="contact-item">
              <UIcon name="i-heroicons-phone" class="contact-icon" />
              <span>02-xxx-xxxx</span>
            </div>
            <div class="contact-item">
              <UIcon name="i-heroicons-chat-bubble-left-right" class="contact-icon" />
              <span>@example</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} {{ appName }}. All rights reserved.</p>
        <p class="powered-by">
          Powered by <span class="nuxt-text">Nuxt UI</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const appName = config.public.appName
const currentYear = new Date().getFullYear()

const socialLinks = [
  { name: 'Facebook', icon: 'i-simple-icons-facebook', href: '#' },
  { name: 'Twitter', icon: 'i-simple-icons-x', href: '#' },
  { name: 'Instagram', icon: 'i-simple-icons-instagram', href: '#' },
  { name: 'GitHub', icon: 'i-simple-icons-github', href: '#' }
]

const quickLinks = [
  { to: '/', label: 'หน้าแรก' },
  { to: '/about', label: 'เกี่ยวกับ' },
  { to: '/products', label: 'สินค้า' },
  { to: '/contact', label: 'ติดต่อ' }
]
</script>

<style scoped>
.app-footer {
  background: var(--color-neutral-900);
  color: var(--color-neutral-300);
  margin-top: auto;
}

.dark .app-footer {
  background: var(--color-neutral-950);
  border-top: 1px solid var(--color-neutral-800);
}

.footer-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 1.5rem 1.5rem;
}

@media (min-width: 640px) {
  .footer-container {
    padding: 4rem 2rem 1.5rem;
  }
}

/* Footer Content Grid */
.footer-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  margin-bottom: 2.5rem;
}

@media (min-width: 768px) {
  .footer-content {
    grid-template-columns: 2fr 1fr 1fr;
    gap: 3rem;
  }
}

/* Brand Section */
.footer-logo {
  text-decoration: none;
  display: inline-block;
  margin-bottom: 0.75rem;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #00dc82, #00b369);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-desc {
  color: var(--color-neutral-400);
  font-size: 0.9rem;
  margin-bottom: 1.25rem;
  line-height: 1.6;
}

.social-links {
  display: flex;
  gap: 0.5rem;
}

/* Footer Section */
.footer-title {
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-link {
  color: var(--color-neutral-400);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 200ms ease;
  padding: 0.25rem 0;
}

.footer-link:hover {
  color: #00dc82;
}

/* Contact Items */
.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: var(--color-neutral-400);
}

.contact-icon {
  width: 1.125rem;
  height: 1.125rem;
  color: #00dc82;
  flex-shrink: 0;
}

/* Footer Bottom */
.footer-bottom {
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-neutral-800);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
  font-size: 0.875rem;
  color: var(--color-neutral-500);
}

@media (min-width: 640px) {
  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}

.powered-by {
  color: var(--color-neutral-500);
}

.nuxt-text {
  color: #00dc82;
  font-weight: 600;
}
</style>
