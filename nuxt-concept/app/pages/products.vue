<template>
  <div class="products-page">
    <div class="container">
      <h1 class="page-title">สินค้าของเรา</h1>
      
      <div class="filters">
        <div class="search-box">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="ค้นหาสินค้า..."
            class="search-input"
          />
        </div>
        
        <div class="filter-buttons">
          <button
            v-for="category in categories"
            :key="category"
            :class="['filter-btn', { active: selectedCategory === category }]"
            @click="selectedCategory = category"
          >
            {{ category }}
          </button>
        </div>
      </div>
      
      <div v-if="pending" class="loading-container">
        <LoadingSpinner message="กำลังโหลดสินค้า..." />
      </div>
      
      <div v-else-if="error" class="error-container">
        <p>เกิดข้อผิดพลาด: {{ error.message }}</p>
        <button @click="() => refresh()" class="btn btn-primary">ลองอีกครั้ง</button>
      </div>
      
      <div v-else>
        <div v-if="filteredProducts.length === 0" class="empty-state">
          <p>ไม่พบสินค้าที่ค้นหา</p>
        </div>
        
        <div v-else class="products-grid">
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
          />
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
</script>

<style scoped lang="scss">
.products-page {
  padding: 2rem 0;
  
  .container {
    max-width: 1200px;
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
  
  .filters {
    margin-bottom: 3rem;
    
    .search-box {
      margin-bottom: 1.5rem;
      
      .search-input {
        width: 100%;
        padding: 1rem 1.5rem;
        border: 2px solid var(--border-color);
        border-radius: 50px;
        font-size: 1rem;
        background: var(--input-bg);
        color: var(--text-color);
        transition: border-color 0.3s;
        
        &:focus {
          outline: none;
          border-color: var(--primary-color);
        }
        
        &::placeholder {
          color: var(--text-muted);
        }
      }
    }
    
    .filter-buttons {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: center;
      
      .filter-btn {
        padding: 0.75rem 1.5rem;
        border: 2px solid var(--border-color);
        border-radius: 50px;
        background: var(--card-bg);
        color: var(--text-color);
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
        
        &:hover {
          border-color: var(--primary-color);
          color: var(--primary-color);
        }
        
        &.active {
          background: var(--primary-color);
          border-color: var(--primary-color);
          color: white;
        }
      }
    }
  }
  
  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .loading-container,
  .error-container,
  .empty-state {
    text-align: center;
    padding: 4rem 2rem;
    
    p {
      font-size: 1.25rem;
      color: var(--text-muted);
      margin-bottom: 1rem;
    }
  }
}

.btn {
  padding: 0.75rem 2rem;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  
  &.btn-primary {
    background: var(--primary-color);
    color: white;
    
    &:hover {
      background: var(--primary-hover);
    }
  }
}
</style>
