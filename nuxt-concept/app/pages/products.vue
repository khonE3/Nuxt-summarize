<template>
  <div class="products-page">
    <div class="container">
      <h1 class="page-title text-responsive-lg">สินค้าของเรา</h1>
      
      <!-- Filters -->
      <div class="filters-section">
        <div class="search-box">
          <UInput
            v-model="searchQuery"
            placeholder="ค้นหาสินค้า..."
            size="lg"
            :ui="{ wrapper: 'w-full' }"
          >
            <template #leading>
              <UIcon name="i-heroicons-magnifying-glass-20-solid" class="text-neutral-400" />
            </template>
            <template #trailing v-if="searchQuery">
              <UButton
                color="neutral"
                variant="link"
                size="xs"
                icon="i-heroicons-x-mark-20-solid"
                @click="searchQuery = ''"
              />
            </template>
          </UInput>
        </div>
        
        <div class="filter-buttons">
          <UButton
            v-for="category in categories"
            :key="category"
            :color="selectedCategory === category ? 'primary' : 'neutral'"
            :variant="selectedCategory === category ? 'solid' : 'outline'"
            size="md"
            @click="selectedCategory = category"
          >
            {{ category }}
          </UButton>
        </div>
      </div>
      
      <!-- Loading State -->
      <div v-if="pending" class="loading-container">
        <div class="skeleton-grid">
          <USkeleton v-for="n in 6" :key="n" class="skeleton-card" />
        </div>
      </div>
      
      <!-- Error State -->
      <div v-else-if="error" class="error-container">
        <UIcon name="i-heroicons-exclamation-triangle" class="error-icon" />
        <p class="error-message">เกิดข้อผิดพลาด: {{ error.message }}</p>
        <UButton color="primary" @click="refresh">
          <UIcon name="i-heroicons-arrow-path" class="mr-2" />
          ลองอีกครั้ง
        </UButton>
      </div>
      
      <!-- Products Grid -->
      <div v-else>
        <div v-if="filteredProducts.length === 0" class="empty-state">
          <UIcon name="i-heroicons-shopping-bag" class="empty-icon" />
          <p class="empty-text">ไม่พบสินค้าที่ค้นหา</p>
          <UButton 
            v-if="searchQuery || selectedCategory !== 'ทั้งหมด'"
            color="primary"
            variant="soft"
            @click="resetFilters"
          >
            ล้างตัวกรอง
          </UButton>
        </div>
        
        <div v-else class="products-grid">
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
          />
        </div>
        
        <!-- Results Count -->
        <div v-if="filteredProducts.length > 0" class="results-info">
          <p>แสดง {{ filteredProducts.length }} รายการ</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'สินค้า - Nuxt 4 Demo',
  description: 'ดูสินค้าทั้งหมดของเรา',
  ogTitle: 'สินค้า - Nuxt 4 Demo',
})

const searchQuery = ref('')
const selectedCategory = ref('ทั้งหมด')

const categories = ['ทั้งหมด', 'อิเล็กทรอนิกส์', 'แฟชั่น', 'บ้านและสวน', 'กีฬา']

// ดึงข้อมูลสินค้า
const { data: products, pending, error, refresh } = await useApi<any[]>('/api/products')

const filteredProducts = computed(() => {
  if (!products.value || !Array.isArray(products.value)) return []
  
  let filtered = [...products.value]
  
  // กรองตามหมวดหมู่
  if (selectedCategory.value !== 'ทั้งหมด') {
    filtered = filtered.filter((p: any) => p.category === selectedCategory.value)
  }
  
  // กรองตามการค้นหา
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter((p: any) =>
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query)
    )
  }
  
  return filtered
})

const resetFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = 'ทั้งหมด'
}
</script>

<style scoped>
.products-page {
  padding: 2rem 0;
}

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

.page-title {
  font-weight: 800;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--color-neutral-900);
}

.dark .page-title {
  color: var(--color-neutral-100);
}

/* Filters */
.filters-section {
  margin-bottom: 2rem;
}

.search-box {
  margin-bottom: 1rem;
}

.filter-buttons {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

/* Products Grid */
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
  height: 380px;
  border-radius: 1rem;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
}

.empty-icon {
  width: 4rem;
  height: 4rem;
  color: var(--color-neutral-300);
  margin: 0 auto 1rem;
}

.dark .empty-icon {
  color: var(--color-neutral-600);
}

.empty-text {
  font-size: 1.125rem;
  color: var(--color-neutral-500);
  margin-bottom: 1.5rem;
}

/* Error State */
.error-container {
  text-align: center;
  padding: 4rem 2rem;
}

.error-icon {
  width: 3rem;
  height: 3rem;
  color: var(--color-error-500);
  margin: 0 auto 1rem;
}

.error-message {
  font-size: 1rem;
  color: var(--color-neutral-500);
  margin-bottom: 1.5rem;
}

/* Results Info */
.results-info {
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-neutral-200);
}

.dark .results-info {
  border-top-color: var(--color-neutral-700);
}

.results-info p {
  color: var(--color-neutral-500);
  font-size: 0.9rem;
}
</style>
