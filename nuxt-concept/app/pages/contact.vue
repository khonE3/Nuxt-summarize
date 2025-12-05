<template>
  <div class="contact-page">
    <div class="container">
      <h1 class="page-title">ติดต่อเรา</h1>
      
      <div class="contact-content">
        <div class="contact-info">
          <h2>ช่องทางติดต่อ</h2>
          
          <div class="info-item">
            <div class="icon">📧</div>
            <div>
              <h3>อีเมล</h3>
              <p>info@example.com</p>
              <p>support@example.com</p>
            </div>
          </div>
          
          <div class="info-item">
            <div class="icon">📱</div>
            <div>
              <h3>โทรศัพท์</h3>
              <p>02-xxx-xxxx</p>
              <p>081-xxx-xxxx</p>
            </div>
          </div>
          
          <div class="info-item">
            <div class="icon">📍</div>
            <div>
              <h3>ที่อยู่</h3>
              <p>123 ถนนสุขุมวิท</p>
              <p>กรุงเทพมหานคร 10110</p>
            </div>
          </div>
          
          <div class="info-item">
            <div class="icon">⏰</div>
            <div>
              <h3>เวลาทำการ</h3>
              <p>จันทร์ - ศุกร์: 9:00 - 18:00</p>
              <p>เสาร์ - อาทิตย์: 10:00 - 16:00</p>
            </div>
          </div>
        </div>
        
        <div class="contact-form-container">
          <h2>ส่งข้อความถึงเรา</h2>
          
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-group">
              <label for="name">ชื่อ-นามสกุล *</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                placeholder="กรอกชื่อ-นามสกุล"
              />
            </div>
            
            <div class="form-group">
              <label for="email">อีเมล *</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                placeholder="example@email.com"
              />
            </div>
            
            <div class="form-group">
              <label for="phone">เบอร์โทรศัพท์</label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                placeholder="08x-xxx-xxxx"
              />
            </div>
            
            <div class="form-group">
              <label for="subject">หัวข้อ *</label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                required
                placeholder="หัวข้อที่ต้องการติดต่อ"
              />
            </div>
            
            <div class="form-group">
              <label for="message">ข้อความ *</label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="5"
                placeholder="กรอกข้อความที่ต้องการติดต่อ"
              ></textarea>
            </div>
            
            <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
              {{ isSubmitting ? 'กำลังส่ง...' : 'ส่งข้อความ' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'ติดต่อเรา - Nuxt 4 Demo',
  description: 'ติดต่อเราผ่านช่องทางต่างๆ',
  ogTitle: 'ติดต่อเรา - Nuxt 4 Demo',
})

const { success, error: showError } = useToast()

const form = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  
  try {
    // จำลองการส่งข้อมูล
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // แสดงข้อความสำเร็จ
    success('ส่งข้อความเรียบร้อยแล้ว เราจะติดต่อกลับโดยเร็วที่สุด')
    
    // รีเซ็ตฟอร์ม
    form.name = ''
    form.email = ''
    form.phone = ''
    form.subject = ''
    form.message = ''
  } catch (err) {
    showError('เกิดข้อผิดพลาดในการส่งข้อความ กรุณาลองใหม่อีกครั้ง')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped lang="scss">
.contact-page {
  padding: 2rem 0;
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .page-title {
    font-size: 3rem;
    font-weight: 800;
    text-align: center;
    margin-bottom: 3rem;
    color: var(--text-color);
  }
  
  .contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    
    @media (max-width: 968px) {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    
    h2 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 2rem;
      color: var(--text-color);
    }
  }
  
  .contact-info {
    .info-item {
      display: flex;
      gap: 1.5rem;
      margin-bottom: 2rem;
      padding: 1.5rem;
      background: var(--card-bg);
      border-radius: 12px;
      
      .icon {
        font-size: 2rem;
        flex-shrink: 0;
      }
      
      h3 {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: var(--text-color);
      }
      
      p {
        color: var(--text-muted);
        margin-bottom: 0.25rem;
      }
    }
  }
  
  .contact-form-container {
    .contact-form {
      .form-group {
        margin-bottom: 1.5rem;
        
        label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: var(--text-color);
        }
        
        input,
        textarea {
          width: 100%;
          padding: 0.875rem 1rem;
          border: 2px solid var(--border-color);
          border-radius: 8px;
          font-size: 1rem;
          background: var(--input-bg);
          color: var(--text-color);
          transition: border-color 0.3s;
          font-family: inherit;
          
          &:focus {
            outline: none;
            border-color: var(--primary-color);
          }
          
          &::placeholder {
            color: var(--text-muted);
          }
        }
        
        textarea {
          resize: vertical;
          min-height: 120px;
        }
      }
      
      .btn {
        width: 100%;
        padding: 1rem 2rem;
        border: none;
        border-radius: 8px;
        font-size: 1.125rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
        
        &.btn-primary {
          background: var(--primary-color);
          color: white;
          
          &:hover:not(:disabled) {
            background: var(--primary-hover);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
          }
          
          &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
          }
        }
      }
    }
  }
}
</style>
