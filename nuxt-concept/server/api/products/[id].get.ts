/**
 * API Endpoint: GET /api/products/[id]
 * ดึงข้อมูลสินค้าตาม ID
 */

export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')
  
  // ในโปรเจคจริงจะดึงจาก Database
  const product = {
    id: Number(id),
    name: `สินค้า ID: ${id}`,
    description: 'รายละเอียดสินค้า',
    price: 1990,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    category: 'อิเล็กทรอนิกส์'
  }
  
  return product
})
