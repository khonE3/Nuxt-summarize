/**
 * Composable สำหรับจัดการตะกร้าสินค้า
 */

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export const useCart = () => {
  const items = useState<CartItem[]>('cart-items', () => [])
  
  // โหลดข้อมูลจาก localStorage
  onMounted(() => {
    if (process.client) {
      const savedCart = localStorage.getItem('cart')
      if (savedCart) {
        items.value = JSON.parse(savedCart)
      }
    }
  })
  
  // บันทึกข้อมูลลง localStorage
  const saveCart = () => {
    if (process.client) {
      localStorage.setItem('cart', JSON.stringify(items.value))
    }
  }
  
  // เพิ่มสินค้า
  const addItem = (product: any) => {
    const existingItem = items.value.find(item => item.id === product.id)
    
    if (existingItem) {
      existingItem.quantity++
    } else {
      items.value.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image
      })
    }
    
    saveCart()
  }
  
  // ลบสินค้า
  const removeItem = (id: number) => {
    items.value = items.value.filter(item => item.id !== id)
    saveCart()
  }
  
  // อัพเดทจำนวน
  const updateQuantity = (id: number, quantity: number) => {
    const item = items.value.find(item => item.id === id)
    if (item) {
      item.quantity = Math.max(1, quantity)
      saveCart()
    }
  }
  
  // ล้างตะกร้า
  const clearCart = () => {
    items.value = []
    saveCart()
  }
  
  // คำนวณยอดรวม
  const totalPrice = computed(() => {
    return items.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  })
  
  // จำนวนสินค้าทั้งหมด
  const totalItems = computed(() => {
    return items.value.reduce((sum, item) => sum + item.quantity, 0)
  })
  
  return {
    items: readonly(items),
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalPrice,
    totalItems
  }
}
