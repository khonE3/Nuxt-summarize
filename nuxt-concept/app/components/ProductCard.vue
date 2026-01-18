<template>
  <UCard class="product-card card-hover" :ui="{
    root: 'overflow-hidden',
    body: 'p-0'
  }">
    <!-- Product Image -->
    <div class="product-image">
      <NuxtImg :src="product.image" :alt="product.name" width="400" height="280" loading="lazy" class="product-img" />

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
        <UButton color="primary" block class="add-to-cart-btn" @click="addToCart">
          <UIcon name="i-heroicons-shopping-cart-20-solid" class="mr-2" />
          เพิ่มลงตะกร้า
        </UButton>
        <UButton :color="isInWishlist ? 'error' : 'neutral'" :variant="isInWishlist ? 'soft' : 'outline'" square
          @click="toggleWishlist">
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
  line-clamp: 2;
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
}
</style>
