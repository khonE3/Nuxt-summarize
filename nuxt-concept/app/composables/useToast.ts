/**
 * Composable สำหรับแสดง Toast Notification
 */

interface Toast {
  id: number
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
  duration: number
}

export const useToast = () => {
  const toasts = useState<Toast[]>('toasts', () => [])
  let toastId = 0
  
  const addToast = (message: string, type: Toast['type'] = 'info', duration: number = 3000) => {
    const id = toastId++
    
    toasts.value.push({
      id,
      message,
      type,
      duration
    })
    
    // ลบ toast อัตโนมัติหลังจากเวลาที่กำหนด
    setTimeout(() => {
      removeToast(id)
    }, duration)
  }
  
  const removeToast = (id: number) => {
    toasts.value = toasts.value.filter(toast => toast.id !== id)
  }
  
  const success = (message: string, duration?: number) => {
    addToast(message, 'success', duration)
  }
  
  const error = (message: string, duration?: number) => {
    addToast(message, 'error', duration)
  }
  
  const warning = (message: string, duration?: number) => {
    addToast(message, 'warning', duration)
  }
  
  const info = (message: string, duration?: number) => {
    addToast(message, 'info', duration)
  }
  
  return {
    toasts: readonly(toasts),
    success,
    error,
    warning,
    info,
    removeToast
  }
}
