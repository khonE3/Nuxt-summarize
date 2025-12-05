/**
 * Composable สำหรับดึงข้อมูล API พร้อม caching
 */

interface FetchOptions {
  method?: 'get' | 'post' | 'put' | 'delete'
  body?: any
  headers?: Record<string, string>
}

export const useApi = <T = any>(url: string, options?: FetchOptions) => {
  const config = useRuntimeConfig()
  
  // สร้าง full URL
  const fullUrl = url.startsWith('http') ? url : `${config.public.apiBase}${url}`
  
  // ใช้ useFetch ของ Nuxt สำหรับ SSR และ caching
  const { data, pending, error, refresh } = useFetch<T>(fullUrl, {
    method: options?.method || 'get',
    body: options?.body,
    headers: options?.headers,
    // Cache options
    key: url,
    // Lazy loading
    lazy: false
  })
  
  return {
    data,
    pending,
    error,
    refresh
  }
}

/**
 * Composable สำหรับเรียก API แบบ manual (ไม่ต้อง auto-fetch)
 */
export const useFetchApi = () => {
  const config = useRuntimeConfig()
  
  const fetchData = async <T = any>(url: string, options?: FetchOptions): Promise<T> => {
    const fullUrl = url.startsWith('http') ? url : `${config.public.apiBase}${url}`
    
    try {
      const response = await $fetch<T>(fullUrl, {
        method: (options?.method || 'get') as any,
        body: options?.body,
        headers: options?.headers
      })
      
      return response as T
    } catch (error) {
      console.error('API Error:', error)
      throw error
    }
  }
  
  return {
    fetchData
  }
}
