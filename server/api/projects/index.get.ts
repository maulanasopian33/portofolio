// ============================================================
// SERVER API STUB: GET /api/projects
// Status: TIDAK AKTIF — Siap digunakan saat backend/database tersedia
//
// Cara mengaktifkan:
// 1. Hubungkan ke database (Prisma, Drizzle, Mongoose, dll)
// 2. Implementasikan query di dalam handler
// 3. Update composables/usePortfolioData.ts → uncomment API pattern
// ============================================================

import { projects } from '~/data/projects'
import type { Project } from '~/data/projects'

export default defineEventHandler(async (_event) => {
  // ── Implementasi Database (uncomment saat siap) ──────────
  // const db = useDatabase() // atau import Prisma client
  // const projects = await db.project.findMany({
  //   orderBy: { createdAt: 'desc' },
  // })
  // return projects
  // ─────────────────────────────────────────────────────────

  // Sementara: kembalikan static data
  // Simulasi delay seperti real API (hapus saat production)
  // await new Promise(resolve => setTimeout(resolve, 100))

  return projects satisfies Project[]
})
