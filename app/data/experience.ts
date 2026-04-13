// ============================================================
// DATA: experience.ts
// Source: Static (Dummy Data)
// ============================================================

export interface ExperienceItem {
  id: string
  period: string
  role: string
  company: string
  location: string
  description: string
  tech?: string[]
}

export const experience: ExperienceItem[] = [
  {
    id: '1',
    period: '2023 — Present',
    role: 'Senior Full Stack Developer',
    company: 'Tech Startup Co.',
    location: 'Remote',
    description:
      'Leading frontend architecture for a B2B SaaS platform serving 10,000+ users. Migrated legacy jQuery codebase to Vue 3, reducing bundle size by 40% and improving load times significantly.',
    tech: ['Vue 3', 'Nuxt.js', 'Node.js', 'PostgreSQL'],
  },
  {
    id: '2',
    period: '2021 — 2023',
    role: 'Full Stack Developer',
    company: 'Digital Agency XYZ',
    location: 'Jakarta, Indonesia',
    description:
      'Developed and maintained 15+ client websites and web applications. Collaborated closely with designers to deliver pixel-perfect implementations on time and within budget.',
    tech: ['React', 'Laravel', 'MySQL', 'Docker'],
  },
  {
    id: '3',
    period: '2020 — 2021',
    role: 'Junior Frontend Developer',
    company: 'Freelance',
    location: 'Remote',
    description:
      'Kickstarted my professional career building landing pages, e-commerce stores, and portfolio sites for small businesses across Southeast Asia.',
    tech: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
  },
]
