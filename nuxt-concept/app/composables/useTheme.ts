/**
 * Composable สำหรับจัดการธีม (Light/Dark Mode)
 */
export const useTheme = () => {
  const isDark = useState<boolean>('theme-dark', () => false)
  
  // โหลดธีมจาก localStorage เมื่อเริ่มต้น
  onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    isDark.value = savedTheme === 'dark'
    applyTheme()
  })
  
  // ใช้งานธีม
  const applyTheme = () => {
    if (process.client) {
      if (isDark.value) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }
  
  // สลับธีม
  const toggleTheme = () => {
    isDark.value = !isDark.value
    if (process.client) {
      localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
      applyTheme()
    }
  }
  
  // ตั้งค่าธีม
  const setTheme = (dark: boolean) => {
    isDark.value = dark
    if (process.client) {
      localStorage.setItem('theme', dark ? 'dark' : 'light')
      applyTheme()
    }
  }
  
  return {
    isDark: readonly(isDark),
    toggleTheme,
    setTheme
  }
}
