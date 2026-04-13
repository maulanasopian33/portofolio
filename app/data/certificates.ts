// ============================================================
// DATA: certificates.ts
// Source: Static (Dummy Data)
// 🔌 API-READY: Lihat blok komentar di bawah untuk pola API
// ============================================================

export interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  credentialUrl: string
  image: string
  badgeColor?: string
}

// --- Static Data (Aktif) ---
export const certificates: Certificate[] = [
  {
    id: '1',
    title: 'Google UX Design Professional Certificate',
    issuer: 'Google',
    date: 'Aug 2024',
    credentialUrl: '#',
    image: '',
    badgeColor: '#4285F4',
  },
  {
    id: '2',
    title: 'Meta Frontend Developer Professional Certificate',
    issuer: 'Meta',
    date: 'Dec 2023',
    credentialUrl: '#',
    image: '',
    badgeColor: '#0866FF',
  },
  {
    id: '3',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'May 2023',
    credentialUrl: '#',
    image: '',
    badgeColor: '#FF9900',
  },
  {
    id: '4',
    title: 'Vue.js Forge — Advanced Vue 3',
    issuer: 'Vue School',
    date: 'Jan 2023',
    credentialUrl: '#',
    image: '',
    badgeColor: '#42b883',
  },
]

// ============================================================
// 🔌 API-READY PATTERN (Tidak aktif — uncomment saat backend siap)
// ============================================================
//
// export async function fetchCertificatesFromApi(): Promise<Certificate[]> {
//   return await $fetch<Certificate[]>('/api/certificates')
// }
