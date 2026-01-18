<template>
  <div class="contact-page pb-20">
    <!-- Header -->
    <div class="py-12 bg-gradient-to-b from-primary-50/50 to-transparent dark:from-primary-900/10">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl font-black mb-4">ติดต่อ <span class="text-gradient">เรา</span></h1>
        <p class="text-muted text-lg">มีคำถามหรือข้อสงสัย? ส่งข้อความหาเราได้ตลอด 24 ชั่วโมง</p>
      </div>
    </div>

    <div class="container max-w-6xl mx-auto px-4 sm:px-6 -mt-8">
      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Contact Info (Left) -->
        <div class="lg:col-span-1 space-y-6 animate-enter">
          <div
            class="card-crystal p-6 h-full bg-gradient-to-br from-white/80 to-white/40 dark:from-slate-800/80 dark:to-slate-900/40">
            <h3 class="text-xl font-bold mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">ข้อมูลการติดต่อ</h3>

            <div class="space-y-6">
              <div v-for="(item, i) in contactInfo" :key="i" class="flex items-start gap-4">
                <div
                  class="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0 text-primary-600 dark:text-primary-400">
                  <UIcon :name="item.icon" class="text-xl" />
                </div>
                <div>
                  <h4 class="font-semibold text-sm uppercase text-muted mb-1">{{ item.label }}</h4>
                  <p class="font-medium">{{ item.value }}</p>
                  <p v-if="item.subValue" class="text-sm text-muted mt-1">{{ item.subValue }}</p>
                </div>
              </div>
            </div>

            <!-- Map Placeholder -->
            <div
              class="mt-8 rounded-xl overflow-hidden h-40 bg-gray-100 dark:bg-gray-800 relative group cursor-pointer">
              <NuxtImg src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80"
                class="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
              <div class="absolute inset-0 flex items-center justify-center">
                <UButton color="white" size="sm" icon="i-heroicons-map-pin">ดูแผนที่</UButton>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form (Right) -->
        <div class="lg:col-span-2 animate-enter" style="animation-delay: 0.1s">
          <div class="card-crystal p-8">
            <h3 class="text-2xl font-bold mb-6">ส่งข้อความถึงเรา</h3>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <UFormField label="ชื่อ-นามสกุล" name="name" required>
                  <UInput v-model="form.name" placeholder="ระบุชื่อของคุณ" size="lg" icon="i-heroicons-user"
                    class="input-premium w-full" />
                </UFormField>

                <UFormField label="อีเมล" name="email" required>
                  <UInput v-model="form.email" type="email" placeholder="example@email.com" size="lg"
                    icon="i-heroicons-at-symbol" class="input-premium w-full" />
                </UFormField>
              </div>

              <div class="grid md:grid-cols-2 gap-6">
                <UFormField label="เบอร์โทรศัพท์" name="phone">
                  <UInput v-model="form.phone" type="tel" placeholder="0xx-xxx-xxxx" size="lg" icon="i-heroicons-phone"
                    class="input-premium w-full" />
                </UFormField>

                <UFormField label="หัวข้อเรื่อง" name="subject" required>
                  <UInput v-model="form.subject" placeholder="ระบุหัวข้อที่ต้องการติดต่อ" size="lg"
                    icon="i-heroicons-chat-bubble-left-ellipsis" class="input-premium w-full" />
                </UFormField>
              </div>

              <UFormField label="ข้อความ" name="message" required>
                <UTextarea v-model="form.message" placeholder="พิมพ์ข้อความของคุณที่นี่..." :rows="5" size="lg"
                  class="input-premium w-full" />
              </UFormField>

              <div class="flex justify-end pt-4">
                <UButton type="submit" size="xl" color="primary" class="rounded-xl px-8 font-bold w-full sm:w-auto"
                  :loading="isSubmitting">
                  ส่งข้อความ
                  <UIcon name="i-heroicons-paper-airplane" class="ml-2" />
                </UButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'ติดต่อเรา - Nuxt 4 Demo',
  description: 'ช่องทางการติดต่อและแผนที่ตั้ง'
})

const toast = useToast()

const form = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

const contactInfo = [
  { icon: 'i-heroicons-map-pin', label: 'ที่อยู่', value: '123 อาคารสาทรซิตี้ ชั้น 15', subValue: 'ถนนสาทรใต้ แขวงทุ่งมหาเมฆ เชตสาทร กทม. 10120' },
  { icon: 'i-heroicons-envelope', label: 'อีเมล', value: 'contact@nuxtdemo.com', subValue: 'ตอบกลับภายใน 24 ชั่วโมง' },
  { icon: 'i-heroicons-phone', label: 'โทรศัพท์', value: '02-123-4567', subValue: 'จันทร์ - ศุกร์, 9:00 - 18:00 น.' }
]

const handleSubmit = async () => {
  if (!form.name || !form.email || !form.subject || !form.message) {
    toast.add({ title: 'กรุณากรอกข้อมูลให้ครบถ้วน', color: 'error' })
    return
  }

  isSubmitting.value = true
  try {
    await new Promise(resolve => setTimeout(resolve, 1500))
    toast.add({ title: 'ส่งข้อความสำเร็จ', description: 'เราจะติดต่อกลับโดยเร็วที่สุด', color: 'success' })
    form.name = ''; form.email = ''; form.phone = ''; form.subject = ''; form.message = ''
  } catch (e) {
    toast.add({ title: 'เกิดข้อผิดพลาด', color: 'error' })
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.text-muted {
  color: var(--color-text-muted);
}
</style>
