/**
 * API Endpoint: POST /api/contact
 * รับข้อมูลการติดต่อ
 */

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  // Validation
  if (!body.name || !body.email || !body.message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'กรุณากรอกข้อมูลให้ครบถ้วน'
    })
  }
  
  // ในโปรเจคจริงจะบันทึกลง Database และส่ง Email
  console.log('Contact form submitted:', body)
  
  // จำลอง delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  return {
    success: true,
    message: 'ส่งข้อความเรียบร้อยแล้ว'
  }
})
