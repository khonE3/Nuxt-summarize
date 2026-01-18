<template>
  <div class="contact-page">
    <div class="container">
      <h1 class="page-title text-responsive-lg">ติดต่อเรา</h1>

      <div class="contact-content">
        <!-- Contact Info -->
        <div class="contact-info">
          <h2 class="section-subtitle">ช่องทางติดต่อ</h2>

          <div class="info-grid">
            <UCard v-for="info in contactInfo" :key="info.title" class="info-card card-hover" :ui="{ body: 'p-5' }">
              <div class="info-content">
                <div class="info-icon-wrap">
                  <UIcon :name="info.icon" class="info-icon" />
                </div>
                <div>
                  <h3 class="info-title">{{ info.title }}</h3>
                  <p v-for="line in info.lines" :key="line" class="info-line">
                    {{ line }}
                  </p>
                </div>
              </div>
            </UCard>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="contact-form-container">
          <h2 class="section-subtitle">ส่งข้อความถึงเรา</h2>

          <UCard class="form-card" :ui="{ body: 'p-6 sm:p-8' }">
            <form @submit.prevent="handleSubmit" class="contact-form">
              <UFormField label="ชื่อ-นามสกุล" required name="name" class="mb-5">
                <UInput v-model="form.name" placeholder="กรอกชื่อ-นามสกุล" size="lg" color="neutral" variant="outline"
                  :ui="{ root: 'bg-white dark:bg-gray-900' }" :disabled="isSubmitting" class="w-full" />
              </UFormField>

              <UFormField label="อีเมล" required name="email" class="mb-5">
                <UInput v-model="form.email" type="email" placeholder="example@email.com" size="lg" color="neutral"
                  variant="outline" :ui="{ root: 'bg-white dark:bg-gray-900' }" :disabled="isSubmitting"
                  class="w-full" />
              </UFormField>

              <UFormField label="เบอร์โทรศัพท์" name="phone" class="mb-5">
                <UInput v-model="form.phone" type="tel" placeholder="08x-xxx-xxxx" size="lg" color="neutral"
                  variant="outline" :ui="{ root: 'bg-white dark:bg-gray-900' }" :disabled="isSubmitting"
                  class="w-full" />
              </UFormField>

              <UFormField label="หัวข้อ" required name="subject" class="mb-5">
                <UInput v-model="form.subject" placeholder="หัวข้อที่ต้องการติดต่อ" size="lg" color="neutral"
                  variant="outline" :ui="{ root: 'bg-white dark:bg-gray-900' }" :disabled="isSubmitting"
                  class="w-full" />
              </UFormField>

              <UFormField label="ข้อความ" required name="message" class="mb-6">
                <UTextarea v-model="form.message" :rows="5" placeholder="กรอกข้อความที่ต้องการติดต่อ" size="lg"
                  color="neutral" variant="outline" :ui="{ root: 'bg-white dark:bg-gray-900' }" :disabled="isSubmitting"
                  class="w-full" />
              </UFormField>

              <UButton type="submit" size="xl" block :loading="isSubmitting" :disabled="isSubmitting" color="primary"
                class="font-bold transition-transform active:scale-95">
                <UIcon name="i-heroicons-paper-airplane-solid" class="mr-2" />
                {{ isSubmitting ? 'กำลังส่ง...' : 'ส่งข้อความ' }}
              </UButton>
            </form>
          </UCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const toast = useToast()

useSeoMeta({
  title: 'ติดต่อเรา - Nuxt 4 Demo',
  description: 'ติดต่อเราผ่านช่องทางต่างๆ',
  ogTitle: 'ติดต่อเรา - Nuxt 4 Demo',
})

const contactInfo = [
  {
    icon: 'i-heroicons-envelope-solid',
    title: 'อีเมล',
    lines: ['info@example.com', 'support@example.com']
  },
  {
    icon: 'i-heroicons-phone-solid',
    title: 'โทรศัพท์',
    lines: ['02-xxx-xxxx', '081-xxx-xxxx']
  },
  {
    icon: 'i-heroicons-map-pin-solid',
    title: 'ที่อยู่',
    lines: ['123 ถนนสุขุมวิท', 'กรุงเทพมหานคร 10110']
  },
  {
    icon: 'i-heroicons-clock-solid',
    title: 'เวลาทำการ',
    lines: ['จันทร์ - ศุกร์: 9:00 - 18:00', 'เสาร์ - อาทิตย์: 10:00 - 16:00']
  }
]

const form = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  if (!form.name || !form.email || !form.subject || !form.message) {
    toast.add({
      title: 'กรุณากรอกข้อมูลให้ครบถ้วน',
      color: 'error',
      icon: 'i-heroicons-exclamation-circle'
    })
    return
  }

  isSubmitting.value = true

  try {
    // จำลองการส่งข้อมูล
    await new Promise(resolve => setTimeout(resolve, 1500))

    toast.add({
      title: 'ส่งข้อความเรียบร้อยแล้ว',
      description: 'เราจะติดต่อกลับโดยเร็วที่สุด',
      color: 'success',
      icon: 'i-heroicons-check-circle'
    })

    // รีเซ็ตฟอร์ม
    form.name = ''
    form.email = ''
    form.phone = ''
    form.subject = ''
    form.message = ''
  } catch (err) {
    toast.add({
      title: 'เกิดข้อผิดพลาด',
      description: 'กรุณาลองใหม่อีกครั้ง',
      color: 'error',
      icon: 'i-heroicons-x-circle'
    })
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-page {
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .container {
    padding: 0 1.5rem;
  }
}

.page-title {
  font-weight: 800;
  text-align: center;
  margin-bottom: 2.5rem;
  color: var(--color-neutral-900);
}

.dark .page-title {
  color: var(--color-neutral-100);
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

@media (min-width: 1024px) {
  .contact-content {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
}

.section-subtitle {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--color-neutral-900);
}

.dark .section-subtitle {
  color: var(--color-neutral-100);
}

/* Info Grid */
.info-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-content {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.info-icon-wrap {
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 220, 130, 0.1);
  border-radius: 0.75rem;
}

.info-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: #00dc82;
}

.info-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: var(--color-neutral-900);
}

.dark .info-title {
  color: var(--color-neutral-100);
}

.info-line {
  font-size: 0.9rem;
  color: var(--color-neutral-500);
  margin: 0;
  line-height: 1.5;
}

/* Form */
.form-card {
  height: fit-content;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
</style>
