# Nuxt 4 Demo - Complete Example Project

โปรเจคตัวอย่าง Nuxt 4 เวอร์ชันล่าสุด พร้อม **Nuxt UI** และฟีเจอร์ครบถ้วน

## ✨ Features

- 🎨 **Nuxt UI v4** - Modern UI component library
- 📱 **Fully Responsive** - รองรับทุกขนาดหน้าจอ
- 🌙 **Dark/Light Mode** - รองรับธีมมืดและสว่าง
- ⚡ **Vite + Nitro** - Build ที่รวดเร็ว
- 📘 **TypeScript** - Type-safe ตลอดทั้งโปรเจค
- 🍍 **Pinia** - State management
- 🎯 **Auto-imports** - Components และ composables
- 🔌 **Server API** - API endpoints พร้อมใช้

## 📦 Tech Stack

| Technology | Version |
|------------|---------|
| Nuxt | 4.2.1 |
| Nuxt UI | 4.3.0 |
| Vue | 3.5.25 |
| Tailwind CSS | 4.1.18 |
| Pinia | 2.3.0 |
| TypeScript | 5.7.2 |

## 🚀 Quick Start

```bash
# ติดตั้ง Dependencies
bun install

# รัน Development Server
bun run dev
```

เปิดเบราว์เซอร์ที่ http://localhost:3000

## 📁 Project Structure

```
nuxt-concept/
├── app/
│   ├── assets/css/          # Global CSS + Tailwind
│   ├── components/          # Vue components (Nuxt UI)
│   ├── composables/         # Composable functions
│   ├── layouts/             # Layout templates
│   ├── middleware/          # Route middleware
│   ├── pages/               # Auto-routing pages
│   └── app.vue              # Root component (UApp)
├── server/
│   ├── api/                 # API endpoints
│   └── middleware/          # Server middleware
├── public/                  # Static files
└── nuxt.config.ts           # Configuration
```

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | หน้าแรก - Hero, Features, Products |
| `/about` | เกี่ยวกับเรา - Tech stack |
| `/products` | สินค้า - Search, Filter |
| `/contact` | ติดต่อเรา - Form |

## 🎨 Nuxt UI Components Used

- `UApp` - Root wrapper
- `UButton` - Buttons
- `UCard` - Card containers
- `UInput` / `UTextarea` - Form inputs
- `UBadge` - Status badges
- `UIcon` - Heroicons
- `USlideover` - Mobile drawer
- `UProgress` - Loading states
- `useToast()` - Toast notifications

## 🛠️ Scripts

```bash
bun run dev        # Development server
bun run build      # Production build
bun run preview    # Preview production
bun run generate   # Static generation
bun run lint       # Lint code
bun run typecheck  # Type checking
```

## 📚 Documentation

- [GUIDE.md](./GUIDE.md) - คู่มือการใช้งานฉบับเต็ม (ภาษาไทย)
- [Nuxt Documentation](https://nuxt.com/docs)
- [Nuxt UI Documentation](https://ui.nuxt.com)

## 📝 License

MIT
