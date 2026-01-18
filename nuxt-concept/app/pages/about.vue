<template>
  <div class="about-page pb-20">
    <div class="container max-w-6xl mx-auto px-4 sm:px-6 py-12">

      <!-- Header -->
      <div class="text-center mb-16 animate-enter">
        <h1 class="text-4xl md:text-5xl font-black mb-6">
          Project <span class="text-gradient">Tech Stack</span>
        </h1>
        <p class="text-lg text-muted max-w-2xl mx-auto">
          เว็บไซต์นี้ถูกสร้างขึ้นด้วยเทคโนโลยีล่าสุด เพื่อประสิทธิภาพสูงสุด ประสบการณ์ผู้ใช้ที่ลื่นไหล และการรองรับอนาคต
        </p>
      </div>

      <!-- Categories -->
      <div class="space-y-12 animate-enter" style="animation-delay: 0.1s">

        <!-- Core Framework -->
        <section>
          <div class="flex items-center gap-3 mb-6">
            <div class="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
              <UIcon name="i-heroicons-cube" class="text-2xl" />
            </div>
            <h2 class="text-2xl font-bold">Core Framework</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="card-crystal p-6 flex flex-col gap-4 group hover:border-emerald-500/50 transition-colors">
              <div class="flex items-center justify-between">
                <UIcon name="i-simple-icons-nuxtdotjs" class="text-4xl text-emerald-500" />
                <UBadge color="emerald" variant="subtle">v4.2.1</UBadge>
              </div>
              <div>
                <h3 class="font-bold text-lg">Nuxt 4</h3>
                <p class="text-sm text-muted mt-1">The Intuitive Web Framework. Universal rendering, auto-imports, and
                  module ecosystem.</p>
              </div>
            </div>

            <div class="card-crystal p-6 flex flex-col gap-4 group hover:border-emerald-500/50 transition-colors">
              <div class="flex items-center justify-between">
                <UIcon name="i-simple-icons-vuedotjs" class="text-4xl text-emerald-500" />
                <UBadge color="emerald" variant="subtle">v3.5.25</UBadge>
              </div>
              <div>
                <h3 class="font-bold text-lg">Vue.js</h3>
                <p class="text-sm text-muted mt-1">The Progressive JavaScript Framework. Reactive, component-based UI
                  development.</p>
              </div>
            </div>

            <div class="card-crystal p-6 flex flex-col gap-4 group hover:border-emerald-500/50 transition-colors">
              <div class="flex items-center justify-between">
                <UIcon name="i-simple-icons-typescript" class="text-4xl text-blue-500" />
                <UBadge color="blue" variant="subtle">v5.7.2</UBadge>
              </div>
              <div>
                <h3 class="font-bold text-lg">TypeScript</h3>
                <p class="text-sm text-muted mt-1">JavaScript with syntax for types. Ensures type safety and better
                  developer experience.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- UI & Styling -->
        <section>
          <div class="flex items-center gap-3 mb-6">
            <div class="p-2 rounded-lg bg-blue-500/10 text-blue-500">
              <UIcon name="i-heroicons-paint-brush" class="text-2xl" />
            </div>
            <h2 class="text-2xl font-bold">UI & Styling</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="card-crystal p-6 flex flex-col gap-3 group hover:border-blue-500/50 transition-colors">
              <UIcon name="i-heroicons-swatch" class="text-3xl text-emerald-500" /> <!-- Nuxt UI icon proxy -->
              <div>
                <h3 class="font-bold">Nuxt UI v4</h3>
                <p class="text-xs text-muted mt-1">Fully styled and customizable UI library for Nuxt.</p>
              </div>
            </div>

            <div class="card-crystal p-6 flex flex-col gap-3 group hover:border-blue-500/50 transition-colors">
              <UIcon name="i-simple-icons-tailwindcss" class="text-3xl text-cyan-500" />
              <div>
                <h3 class="font-bold">Tailwind CSS v4</h3>
                <p class="text-xs text-muted mt-1">A utility-first CSS framework for rapid UI development.</p>
              </div>
            </div>

            <div class="card-crystal p-6 flex flex-col gap-3 group hover:border-blue-500/50 transition-colors">
              <UIcon name="i-heroicons-photo" class="text-3xl text-purple-500" />
              <div>
                <h3 class="font-bold">Nuxt Image</h3>
                <p class="text-xs text-muted mt-1">Image optimization for modern web performance.</p>
              </div>
            </div>

            <div class="card-crystal p-6 flex flex-col gap-3 group hover:border-blue-500/50 transition-colors">
              <UIcon name="i-simple-icons-sass" class="text-3xl text-pink-500" />
              <div>
                <h3 class="font-bold">Sass</h3>
                <p class="text-xs text-muted mt-1">CSS with superpowers. Nested rules, variables, and mixins.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- State & Utils -->
        <section>
          <div class="flex items-center gap-3 mb-6">
            <div class="p-2 rounded-lg bg-orange-500/10 text-orange-500">
              <UIcon name="i-heroicons-wrench-screwdriver" class="text-2xl" />
            </div>
            <h2 class="text-2xl font-bold">State & Tools</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="card-crystal p-6 flex flex-col gap-3 group hover:border-orange-500/50 transition-colors">
              <UIcon name="i-heroicons-circle-stack" class="text-3xl text-yellow-500" />
              <!-- Using generic icon for Pinia as simple-icons might not render consistently without plugin update -->
              <div>
                <h3 class="font-bold">Pinia</h3>
                <p class="text-xs text-muted mt-1">The intuitive store for Vue.js. Type-safe, modular, and lightweight.
                </p>
              </div>
            </div>

            <div class="card-crystal p-6 flex flex-col gap-3 group hover:border-orange-500/50 transition-colors">
              <UIcon name="i-simple-icons-eslint" class="text-3xl text-indigo-500" />
              <div>
                <h3 class="font-bold">ESLint</h3>
                <p class="text-xs text-muted mt-1">Find and fix problems in your JavaScript code.</p>
              </div>
            </div>

            <div class="card-crystal p-6 flex flex-col gap-3 group hover:border-orange-500/50 transition-colors">
              <UIcon name="i-heroicons-cube-transparent" class="text-3xl text-gray-500" />
              <div>
                <h3 class="font-bold">Nuxt Icon</h3>
                <p class="text-xs text-muted mt-1">100,000+ Icons via Iconify (Heroicons, Simple Icons).</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Tech Stack - Nuxt 4 Concept',
  description: 'Technologies and libraries used in this project'
})
</script>

<style scoped>
.text-muted {
  color: var(--color-text-muted);
}
</style>
