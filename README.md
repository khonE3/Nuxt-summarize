# 🚀 Nuxt 4 Complete Demo Project

โปรเจคตัวอย่างที่แสดงความสามารถครบถ้วนของ Nuxt 4 เวอร์ชันล่าสุด พร้อมฟีเจอร์และ Best Practices ทั้งหมด

![Nuxt 4](https://img.shields.io/badge/Nuxt-4.2.1-00DC82?style=for-the-badge&logo=nuxt.js)
![Vue 3](https://img.shields.io/badge/Vue-3.5.25-4FC08D?style=for-the-badge&logo=vue.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-3178C6?style=for-the-badge&logo=typescript)

## 📋 สารบัญ

- [ฟีเจอร์หลัก](#ฟีเจอร์หลัก)
- [โครงสร้างโปรเจค](#โครงสร้างโปรเจค)
- [การติดตั้ง](#การติดตั้ง)
- [คำสั่งที่ใช้งาน](#คำสั่งที่ใช้งาน)
- [วิธีใช้งาน](#วิธีใช้งาน)
- [เทคโนโลยีที่ใช้](#เทคโนโลยีที่ใช้)
- [ตัวอย่าง Code](#ตัวอย่าง-code)

## ✨ ฟีเจอร์หลัก

### 🎯 Core Features
- ✅ **Nuxt 4** - Framework เวอร์ชันล่าสุด
- ✅ **Vue 3 Composition API** - Reactive และ Type-safe
- ✅ **TypeScript** - Type Safety ตลอดทั้งโปรเจค
- ✅ **Auto Imports** - Components และ Composables import อัตโนมัติ
- ✅ **File-based Routing** - สร้าง routes จากโครงสร้างไฟล์

### 🎨 UI/UX Features
- ✅ **Responsive Design** - รองรับทุกหน้าจอ
- ✅ **Dark Mode** - สลับธีมได้
- ✅ **Page Transitions** - Animation ระหว่างหน้า
- ✅ **Loading States** - แสดง loading ที่สวยงาม
- ✅ **Toast Notifications** - แจ้งเตือนแบบ Toast

### 🔧 Technical Features
- ✅ **Server API Routes** - สร้าง API endpoints
- ✅ **Middleware** - Route guards และ logic
- ✅ **Composables** - Reusable logic
- ✅ **State Management** - จัดการ state ด้วย useState
- ✅ **SEO Optimization** - Meta tags และ SSR
- ✅ **Image Optimization** - @nuxt/image
- ✅ **SCSS Support** - CSS Preprocessor

## 📁 โครงสร้างโปรเจค

```
nuxt-concept/
├── app/
│   ├── assets/              # Static assets
│   │   ├── css/            # Stylesheets
│   │   │   ├── main.scss   # Main CSS file
│   │   │   └── _variables.scss
│   │   └── images/         # Images
│   ├── components/         # Vue Components
│   │   ├── AppHeader.vue   # Header component
│   │   ├── AppFooter.vue   # Footer component
│   │   ├── ProductCard.vue # Product card
│   │   └── LoadingSpinner.vue
│   ├── composables/        # Composable functions
│   │   ├── useTheme.ts     # Theme management
│   │   ├── useCart.ts      # Shopping cart
│   │   ├── useWishlist.ts  # Wishlist management
│   │   ├── useApi.ts       # API calls
│   │   └── useToast.ts     # Toast notifications
│   ├── layouts/            # Layout components
│   │   ├── default.vue     # Default layout
│   │   └── blank.vue       # Blank layout
│   ├── middleware/         # Route middleware
│   │   ├── auth.global.ts  # Authentication
│   │   └── visitor.global.ts
│   ├── pages/              # Page components
│   │   ├── index.vue       # Home page
│   │   ├── about.vue       # About page
│   │   ├── products.vue    # Products page
│   │   └── contact.vue     # Contact page
│   ├── plugins/            # Nuxt plugins
│   │   └── init.ts         # App initialization
│   └── app.vue             # Root component
├── server/
│   ├── api/                # API endpoints
│   │   ├── products.get.ts # GET /api/products
│   │   ├── products/
│   │   │   └── [id].get.ts # GET /api/products/:id
│   │   ├── contact.post.ts # POST /api/contact
│   │   └── hello.ts        # GET /api/hello
│   ├── middleware/         # Server middleware
│   │   ├── logging.ts      # Request logging
│   │   └── cors.ts         # CORS headers
│   └── utils/              # Server utilities
│       └── database.ts     # Database mock
├── public/                 # Public static files
│   ├── favicon.svg         # Favicon
│   └── robots.txt          # SEO robots file
├── nuxt.config.ts          # Nuxt configuration
├── tsconfig.json           # TypeScript config
├── package.json            # Dependencies
├── README.md               # Documentation
└── GUIDE.md                # Complete usage guide
```

## 🚀 การติดตั้ง

### ความต้องการของระบบ
- Node.js >= 18.0.0
- npm, yarn, pnpm หรือ bun

### ขั้นตอนการติดตั้ง

1. **Clone โปรเจค**
```bash
git clone <repository-url>
cd nuxt-concept
```

2. **ติดตั้ง Dependencies**

ใช้ npm:
```bash
npm install
```

ใช้ yarn:
```bash
yarn install
```

ใช้ pnpm:
```bash
pnpm install
```

ใช้ bun:
```bash
bun install
```

3. **สร้างไฟล์ .env (ถ้าต้องการ)**
```bash
# สร้างไฟล์ .env
cp .env.example .env
```

เพิ่มค่า environment variables:
```env
API_SECRET=your-secret-key
API_BASE_URL=https://api.example.com
```

## 💻 คำสั่งที่ใช้งาน

### Development Server
เริ่มต้น development server ที่ http://localhost:3000

```bash
npm run dev
```

หรือ
```bash
yarn dev
```

### Production Build
สร้าง build สำหรับ production

```bash
npm run build
```

### Preview Production
ดูตัวอย่าง production build

```bash
npm run preview
```

### Generate Static Site
สร้าง static site (SSG)

```bash
npm run generate
```

### Type Check
ตรวจสอบ TypeScript types

```bash
npm run typecheck
```

### Lint Code
ตรวจสอบและแก้ไข code style

```bash
npm run lint
```

### Cleanup
ลบไฟล์ generated

```bash
npm run cleanup
```

## 📖 วิธีใช้งาน

### 1. เริ่มต้น Development Server

```bash
npm run dev
```

เปิดเบราว์เซอร์ที่ `http://localhost:3000`

### 2. โครงสร้างหน้าเว็บ

- **หน้าแรก (/)** - แสดงฟีเจอร์และสินค้าแนะนำ
- **เกี่ยวกับ (/about)** - ข้อมูลเกี่ยวกับโปรเจค
- **สินค้า (/products)** - รายการสินค้าพร้อมการกรอง
- **ติดต่อ (/contact)** - ฟอร์มติดต่อ

### 3. การสร้าง Component ใหม่

สร้างไฟล์ใน `app/components/`:

```vue
<!-- app/components/MyComponent.vue -->
<template>
  <div class="my-component">
    <h2>{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<style scoped>
.my-component {
  padding: 1rem;
}
</style>
```

ใช้งานโดยไม่ต้อง import (auto-import):
```vue
<MyComponent title="Hello" />
```

### 4. การสร้าง Page ใหม่

สร้างไฟล์ใน `app/pages/`:

```vue
<!-- app/pages/new-page.vue -->
<template>
  <div>
    <h1>New Page</h1>
    <p>This is a new page</p>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'New Page',
  description: 'Description of the new page'
})
</script>
```

เข้าถึงได้ที่: `http://localhost:3000/new-page`

### 5. การสร้าง API Endpoint

สร้างไฟล์ใน `server/api/`:

```typescript
// server/api/users.get.ts
export default defineEventHandler((event) => {
  return {
    users: [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' }
    ]
  }
})
```

เรียกใช้ API:
```typescript
const { data } = await useFetch('/api/users')
```

### 6. การใช้งาน Composables

#### Dark Mode
```typescript
const { isDark, toggleTheme } = useTheme()
```

#### Shopping Cart
```typescript
const { items, addItem, totalPrice } = useCart()

addItem({
  id: 1,
  name: 'Product',
  price: 100,
  image: '/image.jpg'
})
```

#### Toast Notifications
```typescript
const { success, error, warning, info } = useToast()

success('บันทึกสำเร็จ')
error('เกิดข้อผิดพลาด')
```

### 7. การใช้งาน Middleware

สร้างไฟล์ middleware:

```typescript
// app/middleware/my-middleware.ts
export default defineNuxtRouteMiddleware((to, from) => {
  console.log('Navigating to:', to.path)
  
  // Redirect if needed
  if (to.path === '/secret') {
    return navigateTo('/login')
  }
})
```

ใช้ใน page:
```vue
<script setup>
definePageMeta({
  middleware: 'my-middleware'
})
</script>
```

## 🛠️ เทคโนโลยีที่ใช้

### Core
- **Nuxt 4.2.1** - The Intuitive Vue Framework
- **Vue 3.5.25** - Progressive JavaScript Framework
- **TypeScript 5.7.2** - Typed JavaScript

### Modules & Libraries
- **@nuxt/fonts** - Font optimization
- **@nuxt/image** - Image optimization
- **@pinia/nuxt** - State management
- **@nuxt/eslint** - Code linting

### Build Tools
- **Vite** - Next generation frontend tooling
- **Nitro** - Universal server framework
- **SASS** - CSS preprocessor

## 💡 ตัวอย่าง Code

### Fetching Data

```vue
<script setup lang="ts">
// ใช้ useApi composable
const { data, pending, error } = await useApi('/api/products')

// หรือใช้ useFetch โดยตรง
const { data: users } = await useFetch('/api/users')
</script>

<template>
  <div>
    <LoadingSpinner v-if="pending" />
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else>
      <div v-for="item in data" :key="item.id">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>
```

### Form Handling

```vue
<script setup lang="ts">
const form = reactive({
  name: '',
  email: ''
})

const handleSubmit = async () => {
  const { data } = await $fetch('/api/contact', {
    method: 'POST',
    body: form
  })
  
  console.log('Success:', data)
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="form.name" type="text" placeholder="Name" />
    <input v-model="form.email" type="email" placeholder="Email" />
    <button type="submit">Submit</button>
  </form>
</template>
```

### State Management

```typescript
// Using useState (built-in)
const counter = useState('counter', () => 0)

const increment = () => {
  counter.value++
}
```

## 🎨 Styling

โปรเจคนี้ใช้ SCSS พร้อม CSS Variables สำหรับ theming

### Custom Styles

```scss
// ใช้ variables
.my-component {
  color: var(--text-color);
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  
  // SCSS nesting
  &:hover {
    background: var(--bg-secondary);
  }
}
```

### Dark Mode

```scss
:root {
  --text-color: #1a202c;
}

:root.dark {
  --text-color: #f7fafc;
}
```

## 🔒 Environment Variables

สร้างไฟล์ `.env`:

```env
# Private (server-only)
API_SECRET=your-secret-key

# Public (exposed to client)
API_BASE_URL=https://api.example.com
```

ใช้งาน:

```typescript
const config = useRuntimeConfig()

// Server-only
console.log(config.apiSecret)

// Public (client & server)
console.log(config.public.apiBase)
```

## 📱 Responsive Design

โปรเจครองรับ responsive design:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

```scss
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
}
```

## 🚀 Deployment

### Static Hosting (Netlify, Vercel, etc.)

```bash
npm run generate
```

อัพโหลดโฟลเดอร์ `.output/public`

### Node.js Server

```bash
npm run build
npm run preview
```

Deploy โฟลเดอร์ `.output`

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD ["node", ".output/server/index.mjs"]
```

## 📚 เอกสารเพิ่มเติม

- [Nuxt 4 Documentation](https://nuxt.com)
- [Vue 3 Documentation](https://vuejs.org)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [คู่มือการใช้งานแบบละเอียด](./nuxt-concept/GUIDE.md)

## 🤝 Contributing

ยินดีรับ Pull Requests และ Issues!

## 📄 License

MIT License

---

สร้างด้วย ❤️ โดยใช้ Nuxt 4

Concept of NuxtJS framework
