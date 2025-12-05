# Nuxt 4 - คู่มือการใช้งานฉบับเต็ม

## 📋 สารบัญ

1. [คำสั่งพื้นฐาน](#คำสั่งพื้นฐาน)
2. [โครงสร้างโฟลเดอร์](#โครงสร้างโฟลเดอร์)
3. [Nuxt UI Components](#nuxt-ui-components)
4. [การสร้าง Components](#การสร้าง-components)
5. [การสร้าง Pages](#การสร้าง-pages)
6. [การสร้าง API](#การสร้าง-api)
7. [Composables](#composables)
8. [Middleware](#middleware)
9. [State Management](#state-management)
10. [Styling](#styling)
11. [Deployment](#deployment)

## 🚀 คำสั่งพื้นฐาน

### ติดตั้ง Dependencies
```bash
# ใช้ bun (แนะนำ)
bun install

# หรือใช้ npm
npm install
```

### เริ่มต้น Development Server
```bash
bun run dev
# Server จะรันที่ http://localhost:3000
```

### Build สำหรับ Production
```bash
bun run build
```

### Preview Production Build
```bash
bun run preview
```

### Generate Static Site
```bash
bun run generate
```

### Type Check
```bash
bun run typecheck
```

### Cleanup
```bash
bun run cleanup
```

## 📁 โครงสร้างโฟลเดอร์

```
nuxt-concept/
├── app/                    # Application source
│   ├── assets/            # Static assets (CSS, images)
│   ├── components/        # Vue components
│   ├── composables/       # Composable functions
│   ├── layouts/           # Layout components
│   ├── middleware/        # Route middleware
│   ├── pages/             # Page components (auto-routing)
│   ├── plugins/           # Nuxt plugins
│   └── app.vue            # Root component
├── server/                # Server-side code
│   ├── api/              # API endpoints
│   ├── middleware/       # Server middleware
│   └── utils/            # Server utilities
├── public/               # Public static files
├── nuxt.config.ts        # Nuxt configuration
├── tsconfig.json         # TypeScript config
└── package.json          # Dependencies
```

## 🎯 Nuxt UI Components

โปรเจคนี้ใช้ **Nuxt UI v4** สำหรับ UI components สมัยใหม่

### 1. ติดตั้ง Nuxt UI

```bash
bun add @nuxt/ui tailwindcss
bun add -D @iconify-json/heroicons @iconify-json/simple-icons
```

### 2. Configuration

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  ui: {
    fonts: false,
    theme: {
      colors: ['primary', 'secondary', 'success', 'error']
    }
  }
})
```

```css
/* app/assets/css/main.css */
@import "tailwindcss";
@import "@nuxt/ui";
```

### 3. UApp Wrapper

```vue
<!-- app/app.vue -->
<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
```

### 4. UButton

```vue
<template>
  <!-- Basic buttons -->
  <UButton color="primary">Primary</UButton>
  <UButton color="neutral" variant="outline">Outline</UButton>
  <UButton color="error" variant="soft">Soft</UButton>
  
  <!-- With icon -->
  <UButton icon="i-heroicons-shopping-cart-20-solid">
    Add to Cart
  </UButton>
  
  <!-- Loading state -->
  <UButton :loading="isLoading" @click="submit">
    Submit
  </UButton>
</template>
```

### 5. UCard

```vue
<template>
  <UCard 
    class="card-hover"
    :ui="{ body: 'p-6' }"
  >
    <template #header>
      <h3>Card Title</h3>
    </template>
    
    <p>Card content goes here</p>
    
    <template #footer>
      <UButton>Action</UButton>
    </template>
  </UCard>
</template>
```

### 6. Form Components

```vue
<template>
  <form @submit.prevent="handleSubmit">
    <UFormField label="ชื่อ" required>
      <UInput 
        v-model="form.name" 
        placeholder="กรอกชื่อ"
        size="lg"
      />
    </UFormField>
    
    <UFormField label="ข้อความ">
      <UTextarea 
        v-model="form.message" 
        :rows="5"
      />
    </UFormField>
    
    <UButton type="submit" block>
      ส่งข้อมูล
    </UButton>
  </form>
</template>
```

### 7. Toast Notifications

```vue
<script setup>
const toast = useToast()

const showSuccess = () => {
  toast.add({
    title: 'สำเร็จ!',
    description: 'บันทึกข้อมูลเรียบร้อย',
    color: 'success',
    icon: 'i-heroicons-check-circle'
  })
}

const showError = () => {
  toast.add({
    title: 'เกิดข้อผิดพลาด',
    color: 'error',
    icon: 'i-heroicons-x-circle'
  })
}
</script>
```

### 8. Mobile Drawer (USlideover)

```vue
<template>
  <UButton @click="isOpen = true">
    Open Menu
  </UButton>
  
  <USlideover v-model:open="isOpen" side="right">
    <template #content>
      <nav class="p-4">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
      </nav>
    </template>
  </USlideover>
</template>

<script setup>
const isOpen = ref(false)
</script>
```

### 9. Icons

```vue
<template>
  <!-- Heroicons -->
  <UIcon name="i-heroicons-home-20-solid" />
  <UIcon name="i-heroicons-shopping-cart" />
  
  <!-- Simple Icons (brands) -->
  <UIcon name="i-simple-icons-github" />
  <UIcon name="i-simple-icons-facebook" />
</template>
```

### 10. Dark Mode Toggle

```vue
<script setup>
const colorMode = useColorMode()

const toggleDark = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <UButton 
    :icon="colorMode.value === 'dark' ? 'i-heroicons-sun-20-solid' : 'i-heroicons-moon-20-solid'"
    @click="toggleDark"
  />
</template>
```

## 🎨 การสร้าง Components

### 1. Component พื้นฐาน

สร้างไฟล์ `app/components/MyButton.vue`:

```vue
<template>
  <button :class="buttonClass" @click="handleClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  disabled: false
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonClass = computed(() => ({
  'btn': true,
  [`btn-${props.variant}`]: true,
  'disabled': props.disabled
}))

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<style scoped>
.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-primary {
  background: var(--primary-color);
  color: white;
}

.btn-secondary {
  background: var(--secondary-color);
  color: white;
}

.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
```

### 2. ใช้งาน Component

```vue
<template>
  <div>
    <!-- Auto-import, ไม่ต้อง import -->
    <MyButton variant="primary" @click="handleClick">
      Click Me
    </MyButton>
  </div>
</template>

<script setup lang="ts">
const handleClick = () => {
  console.log('Button clicked!')
}
</script>
```

### 3. Component ที่มี Nested Folder

สร้าง `app/components/forms/InputText.vue`:

```vue
<template>
  <div class="input-group">
    <label v-if="label" :for="inputId">{{ label }}</label>
    <input
      :id="inputId"
      v-model="modelValue"
      :type="type"
      :placeholder="placeholder"
      :required="required"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string
  label?: string
  type?: string
  placeholder?: string
  required?: boolean
}

defineProps<Props>()
defineEmits<{
  'update:modelValue': [value: string]
}>()

const inputId = computed(() => `input-${Math.random()}`)
</script>
```

ใช้งาน:
```vue
<FormsInputText v-model="name" label="Name" />
```

## 📄 การสร้าง Pages

### 1. Page พื้นฐาน

สร้าง `app/pages/blog.vue`:

```vue
<template>
  <div class="blog-page">
    <h1>Blog</h1>
    <div v-for="post in posts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.excerpt }}</p>
      <NuxtLink :to="`/blog/${post.slug}`">
        Read More
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
// SEO Meta
useSeoMeta({
  title: 'Blog',
  description: 'Read our latest blog posts'
})

// Fetch data
const { data: posts } = await useFetch('/api/posts')
</script>
```

Route: `/blog`

### 2. Dynamic Route

สร้าง `app/pages/blog/[slug].vue`:

```vue
<template>
  <div class="post-page">
    <h1>{{ post.title }}</h1>
    <div v-html="post.content"></div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug

const { data: post } = await useFetch(`/api/posts/${slug}`)

useSeoMeta({
  title: post.value?.title,
  description: post.value?.excerpt
})
</script>
```

Route: `/blog/my-first-post`

### 3. Nested Routes

โครงสร้าง:
```
pages/
├── dashboard/
│   ├── index.vue         # /dashboard
│   ├── settings.vue      # /dashboard/settings
│   └── profile.vue       # /dashboard/profile
```

### 4. Catch-all Route

สร้าง `app/pages/[...slug].vue`:

```vue
<template>
  <div>
    <h1>404 - Page Not Found</h1>
    <p>Path: {{ $route.path }}</p>
    <NuxtLink to="/">Go Home</NuxtLink>
  </div>
</template>
```

## 🔌 การสร้าง API

### 1. GET Endpoint

สร้าง `server/api/posts.get.ts`:

```typescript
export default defineEventHandler(async (event) => {
  // Query parameters
  const query = getQuery(event)
  const page = query.page || 1
  const limit = query.limit || 10
  
  // ดึงข้อมูลจาก Database (mock)
  const posts = [
    { id: 1, title: 'Post 1', slug: 'post-1' },
    { id: 2, title: 'Post 2', slug: 'post-2' }
  ]
  
  return {
    data: posts,
    meta: {
      page,
      limit,
      total: posts.length
    }
  }
})
```

### 2. POST Endpoint

สร้าง `server/api/posts.post.ts`:

```typescript
export default defineEventHandler(async (event) => {
  // อ่าน body
  const body = await readBody(event)
  
  // Validation
  if (!body.title || !body.content) {
    throw createError({
      statusCode: 400,
      message: 'Title and content are required'
    })
  }
  
  // บันทึกข้อมูล (mock)
  const newPost = {
    id: Date.now(),
    ...body,
    createdAt: new Date()
  }
  
  return {
    success: true,
    data: newPost
  }
})
```

### 3. Dynamic Route API

สร้าง `server/api/posts/[id].get.ts`:

```typescript
export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')
  
  // ดึงข้อมูลตาม ID
  const post = {
    id,
    title: `Post ${id}`,
    content: 'Content here...'
  }
  
  return post
})
```

### 4. DELETE Endpoint

สร้าง `server/api/posts/[id].delete.ts`:

```typescript
export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  // ลบข้อมูล (mock)
  console.log(`Deleting post ${id}`)
  
  return {
    success: true,
    message: 'Post deleted'
  }
})
```

## 🎣 Composables

### 1. สร้าง Composable

สร้าง `app/composables/useCounter.ts`:

```typescript
export const useCounter = (initialValue: number = 0) => {
  const count = useState('counter', () => initialValue)
  
  const increment = () => {
    count.value++
  }
  
  const decrement = () => {
    count.value--
  }
  
  const reset = () => {
    count.value = initialValue
  }
  
  return {
    count: readonly(count),
    increment,
    decrement,
    reset
  }
}
```

### 2. ใช้งาน Composable

```vue
<script setup lang="ts">
const { count, increment, decrement, reset } = useCounter(0)
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="reset">Reset</button>
  </div>
</template>
```

### 3. Composable ที่ซับซ้อน

สร้าง `app/composables/useFetch Data.ts`:

```typescript
interface FetchOptions {
  immediate?: boolean
  onSuccess?: (data: any) => void
  onError?: (error: any) => void
}

export const useFetchData = <T>(url: string, options: FetchOptions = {}) => {
  const data = ref<T | null>(null)
  const error = ref<Error | null>(null)
  const loading = ref(false)
  
  const fetchData = async () => {
    loading.value = true
    error.value = null
    
    try {
      const response = await $fetch<T>(url)
      data.value = response
      options.onSuccess?.(response)
    } catch (err: any) {
      error.value = err
      options.onError?.(err)
    } finally {
      loading.value = false
    }
  }
  
  if (options.immediate) {
    fetchData()
  }
  
  return {
    data: readonly(data),
    error: readonly(error),
    loading: readonly(loading),
    refetch: fetchData
  }
}
```

## 🛡️ Middleware

### 1. Route Middleware

สร้าง `app/middleware/auth.ts`:

```typescript
export default defineNuxtRouteMiddleware((to, from) => {
  const isAuthenticated = false // ตรวจสอบ authentication
  
  if (!isAuthenticated) {
    return navigateTo('/login')
  }
})
```

ใช้ใน page:
```vue
<script setup>
definePageMeta({
  middleware: 'auth'
})
</script>
```

### 2. Global Middleware

สร้าง `app/middleware/analytics.global.ts`:

```typescript
export default defineNuxtRouteMiddleware((to, from) => {
  // Track page view
  if (process.client) {
    console.log('Page view:', to.path)
    // Send to analytics service
  }
})
```

### 3. Server Middleware

สร้าง `server/middleware/auth.ts`:

```typescript
export default defineEventHandler((event) => {
  const token = getCookie(event, 'auth-token')
  
  if (!token && event.path.startsWith('/api/protected')) {
    throw createError({
      statusCode: 401,
      message: 'Unauthorized'
    })
  }
})
```

## 🗄️ State Management

### 1. Using useState

```typescript
// Global state
const user = useState('user', () => ({
  name: '',
  email: ''
}))

// ใช้งาน
user.value.name = 'John'
```

### 2. Using Pinia

สร้าง `stores/user.ts`:

```typescript
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: '',
    email: '',
    isLoggedIn: false
  }),
  
  getters: {
    fullName: (state) => `${state.name} (${state.email})`
  },
  
  actions: {
    async login(email: string, password: string) {
      const data = await $fetch('/api/auth/login', {
        method: 'POST',
        body: { email, password }
      })
      
      this.name = data.name
      this.email = data.email
      this.isLoggedIn = true
    },
    
    logout() {
      this.$reset()
    }
  }
})
```

ใช้งาน:
```vue
<script setup>
const userStore = useUserStore()

const handleLogin = async () => {
  await userStore.login('user@example.com', 'password')
}
</script>

<template>
  <div>
    <p v-if="userStore.isLoggedIn">
      Welcome, {{ userStore.fullName }}
    </p>
    <button @click="handleLogin">Login</button>
    <button @click="userStore.logout">Logout</button>
  </div>
</template>
```

## 🎨 Styling

### 1. Global CSS

แก้ไข `app/assets/css/main.scss`:

```scss
// Import fonts
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

// Variables
:root {
  --primary: #667eea;
  --secondary: #764ba2;
}

// Global styles
body {
  font-family: 'Inter', sans-serif;
  color: var(--text-color);
}
```

### 2. Scoped CSS

```vue
<style scoped>
.my-component {
  padding: 1rem;
}
</style>
```

### 3. CSS Modules

```vue
<style module>
.container {
  padding: 2rem;
}
</style>

<template>
  <div :class="$style.container">
    Content
  </div>
</template>
```

### 4. Dynamic Classes

```vue
<script setup>
const isActive = ref(false)
</script>

<template>
  <div :class="{ active: isActive, 'my-class': true }">
    Content
  </div>
</template>
```

## 🚀 Deployment

### 1. Vercel

```bash
# ติดตั้ง Vercel CLI
bun add -g vercel

# Deploy
vercel
```

### 2. Netlify

```bash
# Build
bun run generate

# Deploy folder: .output/public
```

### 3. Node.js Server

```bash
# Build
bun run build

# Run
node .output/server/index.mjs
```

### 4. Docker (with Bun)

```dockerfile
FROM oven/bun:1.0 AS builder

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

FROM node:20-alpine AS runner

WORKDIR /app
COPY --from=builder /app/.output .output

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
```

```bash
# Build
docker build -t nuxt-app .

# Run
docker run -p 3000:3000 nuxt-app
```

## 📚 Tips & Best Practices

### 1. Auto Import
- Components จาก `components/` จะ auto-import
- Composables จาก `composables/` จะ auto-import
- Utils จาก `utils/` จะ auto-import

### 2. Type Safety
- ใช้ TypeScript ทุกไฟล์
- Define interfaces สำหรับ props
- Type API responses

### 3. Performance
- ใช้ `lazy: true` สำหรับ data ที่ไม่จำเป็นต้อง SSR
- ใช้ `<NuxtImg>` สำหรับรูปภาพ
- Code splitting ด้วย `defineAsyncComponent`

### 4. SEO
- ใช้ `useSeoMeta()` ในทุกหน้า
- เพิ่ม structured data
- สร้าง sitemap

---

**มีคำถามเพิ่มเติม?** อ่าน [Nuxt Documentation](https://nuxt.com)
