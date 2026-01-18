<template>
  <UCard 
    class="product-card card-hover"
    :ui="{
      root: 'overflow-hidden',
      body: 'p-0'
    }"
  >
    <!-- Product Image -->
    <div class="product-image">
      <NuxtImg 
        :src="product.image" 
        :alt="product.name"
        width="400"
        height="280"
        loading="lazy"
        class="product-img"
      />
      
      <!-- Badges -->
      <div class="badges">
        <UBadge v-if="product.isNew" color="success" variant="solid" size="sm">
          ใหม่
        </UBadge>
        <UBadge v-if="product.discount" color="error" variant="solid" size="sm">
          -{{ product.discount }}%
        </UBadge>
      </div>
    </div>
    
    <!-- Product Info -->
    <div class="product-info">
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-description">{{ product.description }}</p>
      
      <!-- Price -->
      <div class="product-price">
        <span v-if="product.discount" class="price-old">
          ฿{{ product.price.toLocaleString() }}
        </span>
        <span class="price-current">
          ฿{{ finalPrice.toLocaleString() }}
        </span>
      </div>
      
      <!-- Actions -->
      <div class="product-actions">
        <UButton 
          color="primary" 
          block 
          class="add-to-cart-btn"
          @click="addToCart"
        >
          <UIcon name="i-heroicons-shopping-cart-20-solid" class="mr-2" />
          เพิ่มลงตะกร้า
        </UButton>
        <UButton
          :color="isInWishlist ? 'error' : 'neutral'"
          :variant="isInWishlist ? 'soft' : 'outline'"
          square
          @click="toggleWishlist"
        >
          <UIcon :name="isInWishlist ? 'i-heroicons-heart-solid' : 'i-heroicons-heart'" />
        </UButton>
      </div>
    </div>
  </UCard>
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
    return Math.round(props.product.price * (1 - props.product.discount / 100))
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

<style scoped>
.product-card {
  border-radius: 1rem;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px -12px rgba(0, 220, 130, 0.2);
}

/* Image Section */
.product-image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
<<<<<<< HEAD
}

.product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 500ms ease;
}

.product-card:hover .product-img {
  transform: scale(1.1);
}

.badges {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  right: 0.75rem;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
}

/* Info Section */
.product-info {
  padding: 1.25rem;
}

.product-name {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-neutral-900);
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.dark .product-name {
  color: var(--color-neutral-100);
}

.product-description {
  font-size: 0.875rem;
  color: var(--color-neutral-500);
  margin-bottom: 1rem;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Price */
.product-price {
  margin-bottom: 1rem;
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
}

.price-old {
  text-decoration: line-through;
  color: var(--color-neutral-400);
  font-size: 0.875rem;
}

.price-current {
  font-size: 1.5rem;
  font-weight: 700;
  color: #00dc82;
}

/* Actions */
.product-actions {
  display: flex;
  gap: 0.5rem;
}

.add-to-cart-btn {
  flex: 1;
=======
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
>>>>>>> 598b56273790ddcad2e13838d2da1af603b02db8
}
</style>
