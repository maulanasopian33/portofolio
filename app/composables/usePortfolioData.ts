// ============================================================
// COMPOSABLE: usePortfolioData
// Menyediakan akses ke semua data portfolio
//
// Active : Static data dari ~/data/*.ts
// 🔌 API  : Lihat blok komentar useAsyncData untuk pola API
// ============================================================

import { projects }      from '~/data/projects'
import { techStack }     from '~/data/techStack'
import { services }      from '~/data/services'
import { experience }    from '~/data/experience'
import { testimonials }  from '~/data/testimonials'
import { profile }       from '~/data/profile'
import { certificates }  from '~/data/certificates'

import type { Project }     from '~/data/projects'
import type { Certificate } from '~/data/certificates'

export function usePortfolioData() {
  // --- Helpers ---
  const getProject = (id: string): Project | null =>
    projects.find((p) => p.id === id) ?? null

  const getFeaturedProjects = (): Project[] =>
    projects.filter((p) => p.featured)

  const getProjectsByCategory = (category: string): Project[] =>
    projects.filter((p) => p.category === category)

  return {
    // Data
    profile,
    projects,
    techStack,
    services,
    experience,
    testimonials,
    certificates,

    // Computed helpers
    featuredProjects: getFeaturedProjects(),

    // Methods
    getProject,
    getFeaturedProjects,
    getProjectsByCategory,
  }
}

// ============================================================
// 🔌 API-READY COMPOSABLES (Tidak aktif — uncomment saat backend siap)
// Gunakan ini di pages/ untuk data fetching SSR-first via useAsyncData
// ============================================================

// /**
//  * Fetch semua projects dari API (SSR-friendly)
//  */
// export async function useProjectsApi() {
//   const { data: projects, status } = await useAsyncData(
//     'projects',
//     () => $fetch<Project[]>('/api/projects'),
//     { default: () => [] as Project[] }
//   )
//   return { projects, status }
// }

// /**
//  * Fetch satu project berdasarkan ID dari API (SSR-friendly)
//  */
// export async function useProjectApi(id: string) {
//   const { data: project, status } = await useAsyncData(
//     `project-${id}`,
//     () => $fetch<Project>(`/api/projects/${id}`),
//     { default: () => null }
//   )
//   return { project, status }
// }

// /**
//  * Fetch profil dari API (SSR-friendly)
//  */
// export async function useProfileApi() {
//   const { data: profileData } = await useAsyncData(
//     'profile',
//     () => $fetch('/api/profile')
//   )
//   return { profile: profileData }
// }

// /**
//  * Fetch certificates dari API (SSR-friendly)
//  */
// export async function useCertificatesApi() {
//   const { data: certificates } = await useAsyncData(
//     'certificates',
//     () => $fetch<Certificate[]>('/api/certificates'),
//     { default: () => [] as Certificate[] }
//   )
//   return { certificates }
// }
