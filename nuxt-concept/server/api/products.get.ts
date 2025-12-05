/**
 * API Endpoint: GET /api/products
 * ดึงข้อมูลสินค้าทั้งหมด
 */

interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  discount?: number
  isNew?: boolean
}

// ข้อมูลสินค้าตัวอย่าง (ในโปรเจคจริงจะดึงจาก Database)
const products: Product[] = [
  {
    id: 1,
    name: 'สมาร์ทโฟน XYZ Pro',
    description: 'สมาร์ทโฟนรุ่นใหม่ล่าสุด จอ AMOLED 6.5 นิ้ว RAM 8GB',
    price: 15990,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
    category: 'อิเล็กทรอนิกส์',
    isNew: true
  },
  {
    id: 2,
    name: 'หูฟัง Wireless Pro',
    description: 'หูฟังไร้สาย Active Noise Cancellation',
    price: 3990,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    category: 'อิเล็กทรอนิกส์',
    discount: 20
  },
  {
    id: 3,
    name: 'เสื้อยืด Premium Cotton',
    description: 'เสื้อยืดผ้าคอตตอน 100% สวมใส่สบาย',
    price: 590,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    category: 'แฟชั่น'
  },
  {
    id: 4,
    name: 'กระเป๋าเป้สะพายหลัง',
    description: 'กระเป๋าเป้ใส่โน้ตบุ๊ค กันน้ำ',
    price: 1290,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
    category: 'แฟชั่น',
    discount: 15
  },
  {
    id: 5,
    name: 'โคมไฟตั้งโต๊ะ LED',
    description: 'โคมไฟ LED ปรับระดับแสงได้',
    price: 890,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400',
    category: 'บ้านและสวน'
  },
  {
    id: 6,
    name: 'เก้าอี้สำนักงาน Ergonomic',
    description: 'เก้าอี้ทำงาน ปรับระดับได้ รองรับหลัง',
    price: 4590,
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400',
    category: 'บ้านและสวน',
    isNew: true
  },
  {
    id: 7,
    name: 'ลูกฟุตบอล FIFA Standard',
    description: 'ลูกฟุตบอลมาตรฐาน FIFA เบอร์ 5',
    price: 1290,
    image: 'https://images.unsplash.com/photo-1614632537197-38a17061c2bd?w=400',
    category: 'กีฬา'
  },
  {
    id: 8,
    name: 'เสื่อโยคะ Premium',
    description: 'เสื่อโยคะ หนา 6mm กันลื่น',
    price: 790,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400',
    category: 'กีฬา',
    discount: 10
  },
  {
    id: 9,
    name: 'สมาร์ทวอทช์ Fitness',
    description: 'นาฬิกาอัจฉริยะ ติดตามสุขภาพ',
    price: 5990,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    category: 'อิเล็กทรอนิกส์',
    isNew: true,
    discount: 25
  }
]

export default defineEventHandler((event) => {
  // Query parameters
  const query = getQuery(event)
  const category = query.category as string
  const search = query.search as string
  
  let filteredProducts = [...products]
  
  // กรองตามหมวดหมู่
  if (category && category !== 'ทั้งหมด') {
    filteredProducts = filteredProducts.filter(p => p.category === category)
  }
  
  // กรองตามการค้นหา
  if (search) {
    const searchLower = search.toLowerCase()
    filteredProducts = filteredProducts.filter(p =>
      p.name.toLowerCase().includes(searchLower) ||
      p.description.toLowerCase().includes(searchLower)
    )
  }
  
  // จำลอง delay ของการดึงข้อมูลจาก API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(filteredProducts)
    }, 500)
  })
})
