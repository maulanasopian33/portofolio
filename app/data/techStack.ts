// ============================================================
// DATA: techStack.ts
// Source: Static (Dummy Data)
// ============================================================

export interface TechItem {
  name: string
  slug: string  // SimpleIcons slug
  color: string // hex tanpa #
}

export const techStack: TechItem[] = [
  { name: 'Vue.js',      slug: 'vuedotjs',    color: '42b883' },
  { name: 'Nuxt.js',     slug: 'nuxtdotjs',   color: '00DC82' },
  { name: 'React',       slug: 'react',       color: '61DAFB' },
  { name: 'TypeScript',  slug: 'typescript',  color: '3178C6' },
  { name: 'Node.js',     slug: 'nodedotjs',   color: '339933' },
  { name: 'TailwindCSS', slug: 'tailwindcss', color: '06B6D4' },
  { name: 'Laravel',     slug: 'laravel',     color: 'FF2D20' },
  { name: 'PostgreSQL',  slug: 'postgresql',  color: '4169E1' },
  { name: 'Docker',      slug: 'docker',      color: '2496ED' },
  { name: 'Git',         slug: 'git',         color: 'F05032' },
  { name: 'Figma',       slug: 'figma',       color: 'F24E1E' },
  { name: 'Firebase',    slug: 'firebase',    color: 'FFCA28' },
]
