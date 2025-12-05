/**
 * Composable สำหรับจัดการรายการโปรด (Wishlist)
 */

export const useWishlist = () => {
  const wishlistIds = useState<number[]>('wishlist', () => [])
  
  // โหลดข้อมูลจาก localStorage
  onMounted(() => {
    if (process.client) {
      const saved = localStorage.getItem('wishlist')
      if (saved) {
        wishlistIds.value = JSON.parse(saved)
      }
    }
  })
  
  // บันทึกข้อมูล
  const saveWishlist = () => {
    if (process.client) {
      localStorage.setItem('wishlist', JSON.stringify(wishlistIds.value))
    }
  }
  
  // เพิ่มหรือลบรายการ
  const toggleItem = (id: number) => {
    const index = wishlistIds.value.indexOf(id)
    
    if (index > -1) {
      wishlistIds.value.splice(index, 1)
    } else {
      wishlistIds.value.push(id)
    }
    
    saveWishlist()
  }
  
  // ตรวจสอบว่าอยู่ในรายการหรือไม่
  const isInWishlist = (id: number): boolean => {
    return wishlistIds.value.includes(id)
  }
  
  // ล้างรายการ
  const clearWishlist = () => {
    wishlistIds.value = []
    saveWishlist()
  }
  
  return {
    wishlistIds: readonly(wishlistIds),
    toggleItem,
    isInWishlist,
    clearWishlist
  }
}
