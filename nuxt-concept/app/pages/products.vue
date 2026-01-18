<template>
  <div class="products-page pb-20">
    <!-- Header -->
    <section class="py-12 text-center relative z-10">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-4">สินค้าของเรา</h1>
        <p class="text-muted max-w-2xl mx-auto">เลือกช้อปสินค้าคุณภาพสูงที่เราคัดสรรมาเพื่อคุณโดยเฉพาะ</p>
      </div>
    </section>

    <div class="container max-w-7xl mx-auto px-4 sm:px-6">
      <!-- Search & Filter Bar -->
      <div class="card-crystal mb-8 sticky top-20 z-30 flex flex-col md:flex-row gap-4 items-center justify-between">
        <!-- Search -->
        <div class="w-full md:w-96">
          <UInput v-model="searchQuery" icon="i-heroicons-magnifying-glass-20-solid" placeholder="ค้นหาสินค้า..."
            size="lg" :ui="{ icon: { trailing: { pointer: '' } } }" class="input-premium w-full">
            <template #trailing>
              <UButton v-show="searchQuery !== ''" color="gray" variant="link" icon="i-heroicons-x-mark-20-solid"
                :padded="false" @click="searchQuery = ''" />
            </template>
          </UInput>
        </div>

        <!-- Filter -->
        <div class="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
          <UButton v-for="cat in categories" :key="cat" :color="selectedCategory === cat ? 'primary' : 'white'"
            :variant="selectedCategory === cat ? 'solid' : 'ghost'" size="md" class="rounded-full whitespace-nowrap"
            @click="selectedCategory = cat">
            {{ cat }}
          </UButton>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="status === 'pending'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="n in 8" :key="n" class="card-crystal h-[400px] animate-pulse">
          <div class="bg-gray-200 dark:bg-gray-700 h-48 rounded-lg mb-4"></div>
          <div class="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
          <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="status === 'error'" class="text-center py-20">
        <UIcon name="i-heroicons-exclamation-triangle" class="text-6xl text-red-500 mb-4" />
        <h3 class="text-2xl font-bold mb-2">เกิดข้อผิดพลาด</h3>
        <p class="text-muted mb-6">ไม่สามารถโหลดข้อมูลสินค้าได้</p>
        <UButton color="primary" @click="refresh">ลองใหม่อีกครั้ง</UButton>
      </div>

      <!-- Empty State -->
      <div v-else-if="filteredProducts.length === 0" class="text-center py-20 card-crystal">
        <UIcon name="i-heroicons-magnifying-glass" class="text-6xl text-gray-400 mb-4" />
        <h3 class="text-xl font-bold text-muted">ไม่พบสินค้าที่คุณค้นหา</h3>
      </div>

      <!-- Products Grid -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" class="animate-enter" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Use AsyncData with Lazy Loading to prevent blocking navigation
const { data: products, status, refresh } = await useAsyncData('products', async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800))
  // Mock Data
  return [
    { id: 1, name: 'Nuxt 4 Starter Kit', description: 'เทมเพลตเริ่มต้นสำหรับโปรเจค Nuxt 4 พร้อมใช้งานทันที', price: 0, image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80', isNew: true, category: 'Template' },
    { id: 2, name: 'Premium Dashboard', description: 'หน้า Dashboard Admin สวยงาม ทันสมัย รองรับ Dark Mode', price: 2500, image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', discount: 20, category: 'Template' },
    { id: 3, name: 'E-Commerce UI Kit', description: 'ชุด UI สำหรับร้านค้าออนไลน์ ครบครันทุกฟังก์ชัน', price: 1800, image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', category: 'UI Kit' },
    { id: 4, name: 'SEO Optimization Service', description: 'บริการปรับแต่งเว็บไซต์ให้ติดอันดับ Google หน้าแรก', price: 5000, image: 'https://images.unsplash.com/photo-1572177812156-58036aae439c?auto=format&fit=crop&w=800&q=80', category: 'Service' },
    { id: 5, name: 'Mobile App Design', description: 'ออกแบบ UX/UI สำหรับแอปพลิเคชันมือถือ iOS และ Android', price: 3500, image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80', category: 'Service' },
    { id: 6, name: 'Vue 3 Masterclass', description: 'คอร์สเรียน Vue 3 เจาะลึกตั้งแต่พื้นฐานจนถึงระดับสูง', price: 1200, image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80', isNew: true, category: 'Course' },
  ]
}, {
  lazy: true, // Key fix for "Content loading issue"
  default: () => []
})

const searchQuery = ref('')
const selectedCategory = ref('ทั้งหมด')
const categories = ['ทั้งหมด', 'Template', 'UI Kit', 'Service', 'Course']

const filteredProducts = computed(() => {
  if (!products.value) return []

  let result = [...products.value]

  if (selectedCategory.value !== 'ทั้งหมด') {
    result = result.filter(p => p.category === selectedCategory.value)
  }

  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase()
    result = result.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    )
  }

  return result
})
</script>

<style scoped>
.text-muted {
  color: var(--color-text-muted);
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
