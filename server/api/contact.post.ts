// ============================================================
// SERVER API STUB: POST /api/contact
// Status: TIDAK AKTIF — Siap digunakan saat backend tersedia
//
// Cara mengaktifkan:
// 1. Setup email service (Nodemailer, Resend, SendGrid, dll)
// 2. Implementasikan pengiriman email di dalam handler
// 3. Update composables/useContactForm.ts → uncomment $fetch call
// ============================================================

interface ContactPayload {
  name: string
  email: string
  subject: string
  message: string
}

export default defineEventHandler(async (event) => {
  const body = await readBody<ContactPayload>(event)

  // ── Validasi Input ────────────────────────────────────────
  if (!body.name || !body.email || !body.subject || !body.message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'All fields are required',
      data: { missing: ['name', 'email', 'subject', 'message'].filter((f) => !body[f as keyof ContactPayload]) },
    })
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(body.email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid email address',
    })
  }

  // ── Kirim Email (uncomment dan pilih salah satu) ──────────
  //
  // OPSI 1: Menggunakan Nodemailer
  // const transporter = nodemailer.createTransporter({ ... })
  // await transporter.sendMail({
  //   from: body.email,
  //   to: 'hello@maulana.dev',
  //   subject: `[Portfolio] ${body.subject}`,
  //   text: `From: ${body.name}\n\n${body.message}`,
  // })
  //
  // OPSI 2: Menggunakan Resend (recommended)
  // const resend = new Resend(process.env.RESEND_API_KEY)
  // await resend.emails.send({
  //   from: 'onboarding@resend.dev',
  //   to: 'hello@maulana.dev',
  //   subject: `[Portfolio] ${body.subject}`,
  //   html: `<p>From: ${body.name} (${body.email})</p><p>${body.message}</p>`,
  // })
  //
  // OPSI 3: Simpan ke database
  // await db.contactMessage.create({ data: body })
  // ─────────────────────────────────────────────────────────

  // Sementara: log saja
  console.log('[API /contact] Pesan diterima:', {
    name: body.name,
    email: body.email,
    subject: body.subject,
    timestamp: new Date().toISOString(),
  })

  return {
    success: true,
    message: 'Pesan berhasil dikirim',
    timestamp: new Date().toISOString(),
  }
})
