<template>
  <div
    class="card-crystal p-0 overflow-hidden flex flex-col h-full group hover:border-primary-500/50 transition-all duration-300">
    <!-- Product Image -->
    <div class="relative overflow-hidden aspect-[4/3] bg-gray-100 dark:bg-gray-800">
      <NuxtImg :src="product.image" :alt="product.name" width="400" height="300" loading="lazy"
        sizes="100vw sm:50vw md:25vw"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

      <!-- Badges -->
      <div class="absolute top-3 left-3 flex flex-wrap gap-2">
        <UBadge v-if="product.isNew" color="primary" variant="solid" size="xs" class="shadow-lg">ใหม่</UBadge>
        <UBadge v-if="product.discount" color="error" variant="solid" size="xs" class="shadow-lg">-{{ product.discount
          }}%</UBadge>
      </div>

      <!-- Quick Action Overlay -->
      <div
        class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
        <UButton color="white" icon="i-heroicons-eye" size="lg" variant="solid" class="rounded-full" />
        <UButton color="primary" icon="i-heroicons-shopping-cart" size="lg" variant="solid" class="rounded-full"
          @click.stop="addToCart" />
      </div>
    </div>

    <!-- Content -->
    <div class="p-5 flex flex-col flex-1">
      <div class="mb-4">
        <div class="flex justify-between items-start mb-2">
          <h3 class="font-bold text-lg leading-tight line-clamp-1 group-hover:text-primary-500 transition-colors">{{
            product.name }}</h3>
        </div>
        <p class="text-sm text-muted line-clamp-2 h-10">{{ product.description }}</p>
      </div>

      <div class="mt-auto flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/5">
        <div class="flex flex-col">
          <span v-if="product.discount" class="text-xs text-muted line-through">฿{{ product.price.toLocaleString()
            }}</span>
          <span class="text-lg font-bold text-primary-600 dark:text-primary-400">฿{{ finalPrice.toLocaleString()
            }}</span>
        </div>

        <UButton :color="isInWishlist ? 'error' : 'gray'" :variant="isInWishlist ? 'solid' : 'ghost'"
          icon="i-heroicons-heart" class="rounded-full" @click.stop="toggleWishlist" />
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
.text-muted {
  color: var(--color-text-muted);
}
</style>
