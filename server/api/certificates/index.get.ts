// ============================================================
// SERVER API STUB: GET /api/certificates
// Status: TIDAK AKTIF — Siap digunakan saat backend/database tersedia
// ============================================================

import { certificates } from '~/data/certificates'
import type { Certificate } from '~/data/certificates'

export default defineEventHandler(async (_event) => {
  // ── Implementasi Database (uncomment saat siap) ──────────
  // const certs = await db.certificate.findMany({
  //   orderBy: { date: 'desc' },
  // })
  // return certs
  // ─────────────────────────────────────────────────────────

  return certificates satisfies Certificate[]
})
