// ============================================================
// SERVER API STUB: GET /api/profile
// Status: TIDAK AKTIF — Siap digunakan saat backend/database tersedia
// ============================================================

import { profile } from '~/data/profile'

export default defineEventHandler(async (_event) => {
  // ── Implementasi Database (uncomment saat siap) ──────────
  // const profileData = await db.profile.findFirst()
  // return profileData
  // ─────────────────────────────────────────────────────────

  return profile
})
