<template>
  <div class="product-card">
    <div class="product-image">
      <NuxtImg 
        :src="product.image" 
        :alt="product.name"
        width="300"
        height="200"
        loading="lazy"
      />
      <span v-if="product.isNew" class="badge badge-new">ใหม่</span>
      <span v-if="product.discount" class="badge badge-sale">-{{ product.discount }}%</span>
    </div>
    
    <div class="product-info">
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-description">{{ product.description }}</p>
      
      <div class="product-price">
        <span v-if="product.discount" class="price-old">
          ฿{{ product.price.toLocaleString() }}
        </span>
        <span class="price-current">
          ฿{{ finalPrice.toLocaleString() }}
        </span>
      </div>
      
      <div class="product-actions">
        <button @click="addToCart" class="btn btn-primary">
          เพิ่มลงตะกร้า
        </button>
        <button @click="toggleWishlist" class="btn btn-icon">
          {{ isInWishlist ? '❤️' : '🤍' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  discount?: number
  isNew?: boolean
}

const props = defineProps<{
  product: Product
}>()

const { addItem } = useCart()
const { isInWishlist: checkWishlist, toggleItem } = useWishlist()

const isInWishlist = computed(() => checkWishlist(props.product.id))

const finalPrice = computed(() => {
  if (props.product.discount) {
    return props.product.price * (1 - props.product.discount / 100)
  }
  return props.product.price
})

const addToCart = () => {
  addItem(props.product)
}

const toggleWishlist = () => {
  toggleItem(props.product.id)
}
</script>

<style scoped lang="scss">
.product-card {
  background: var(--card-bg);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-card);
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
  
  .product-image {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s;
    }
    
    &:hover img {
      transform: scale(1.1);
    }
    
    .badge {
      position: absolute;
      top: 10px;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.875rem;
      font-weight: 600;
      
      &.badge-new {
        left: 10px;
        background: #10b981;
        color: white;
      }
      
      &.badge-sale {
        right: 10px;
        background: #ef4444;
        color: white;
      }
    }
  }
  
  .product-info {
    padding: 1.5rem;
    
    .product-name {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
      color: var(--text-color);
    }
    
    .product-description {
      color: var(--text-muted);
      margin-bottom: 1rem;
      font-size: 0.9rem;
    }
    
    .product-price {
      margin-bottom: 1rem;
      
      .price-old {
        text-decoration: line-through;
        color: var(--text-muted);
        margin-right: 0.5rem;
      }
      
      .price-current {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--primary-color);
      }
    }
    
    .product-actions {
      display: flex;
      gap: 0.5rem;
      
      .btn {
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
        
        &.btn-primary {
          flex: 1;
          background: var(--primary-color);
          color: white;
          
          &:hover {
            background: var(--primary-hover);
          }
        }
        
        &.btn-icon {
          background: transparent;
          border: 2px solid var(--border-color);
          font-size: 1.2rem;
          padding: 0.75rem;
          
          &:hover {
            border-color: var(--primary-color);
          }
        }
      }
    }
  }
}
</style>
