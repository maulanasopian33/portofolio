// ============================================================
// SERVER API STUB: GET /api/projects/:id
// Status: TIDAK AKTIF — Siap digunakan saat backend/database tersedia
// ============================================================

import { projects } from '~/data/projects'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Project ID is required',
    })
  }

  // ── Implementasi Database (uncomment saat siap) ──────────
  // const project = await db.project.findUnique({ where: { id } })
  // ─────────────────────────────────────────────────────────

  const project = projects.find((p) => p.id === id)

  if (!project) {
    throw createError({
      statusCode: 404,
      statusMessage: `Project with id "${id}" not found`,
    })
  }

  return project
})
