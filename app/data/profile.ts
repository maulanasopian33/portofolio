// ============================================================
// DATA: profile.ts
// Source: Static (Dummy Data)
// 🔌 API-READY: Lihat blok komentar di bawah untuk pola API
// ============================================================

export interface ProfileStat {
  number: string
  label: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}

export interface Profile {
  name: string
  title: string
  tagline: string
  bio: string[]
  email: string
  location: string
  stats: ProfileStat[]
  socials: SocialLink[]
}

// --- Static Data (Aktif) ---
export const profile: Profile = {
  name: 'Maulana Sopian',
  title: 'Full Stack Web Developer',
  tagline: 'Architecting Scalable Digital Solutions.',
  email: 'hello@maulana.dev',
  location: 'Indonesia',
  bio: [
    'I am a results-driven Full Stack Web Developer with a passion for building robust, scalable, and user-centric applications. With extensive experience across the entire development lifecycle, I bridge the gap between elegant frontend design and powerful backend architecture.',
    'Specializing in the modern JavaScript ecosystem (Vue, React, Node.js), I help businesses transform complex requirements into streamlined digital products. My approach combines technical precision with a deep understanding of user experience and business goals.',
  ],
  stats: [
    { number: '4+',   label: 'Years Experience' },
    { number: '30+',  label: 'Projects Delivered' },
    { number: '100%', label: 'Client Satisfaction' },
  ],
  socials: [
    { platform: 'GitHub',   url: 'https://github.com',   icon: 'github' },
    { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
    { platform: 'Twitter',  url: 'https://twitter.com',  icon: 'twitter' },
  ],
}

// ============================================================
// 🔌 API-READY PATTERN (Tidak aktif — uncomment saat backend siap)
// ============================================================
//
// export async function fetchProfileFromApi(): Promise<Profile> {
//   return await $fetch<Profile>('/api/profile')
// }
