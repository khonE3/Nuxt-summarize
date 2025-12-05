/**
 * Server Utility: Database Mock
 * จำลองการเชื่อมต่อกับ Database
 */

export const useDatabase = () => {
  return {
    async query(sql: string, params?: any[]) {
      // จำลองการ query
      console.log('Database query:', sql, params)
      return []
    },
    
    async execute(sql: string, params?: any[]) {
      // จำลองการ execute
      console.log('Database execute:', sql, params)
      return { affectedRows: 1 }
    }
  }
}
