// ============================================================
// DATA: skills.ts
// Skill categories dengan proficiency level
// ============================================================

export interface Skill {
  name: string
  level: number  // 0-100
  category: string
}

export interface SkillCategory {
  id: string
  label: string
  icon: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'Vue.js / Nuxt.js', level: 95, category: 'frontend' },
      { name: 'React / Next.js',  level: 85, category: 'frontend' },
      { name: 'TypeScript',       level: 88, category: 'frontend' },
      { name: 'CSS / Tailwind',   level: 92, category: 'frontend' },
      { name: 'GSAP / Animation', level: 75, category: 'frontend' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js / Express', level: 88, category: 'backend' },
      { name: 'Laravel / PHP',     level: 80, category: 'backend' },
      { name: 'REST API Design',   level: 90, category: 'backend' },
      { name: 'GraphQL',           level: 72, category: 'backend' },
      { name: 'Python / FastAPI',  level: 65, category: 'backend' },
    ],
  },
  {
    id: 'database',
    label: 'Database & Cloud',
    icon: '🗄️',
    skills: [
      { name: 'PostgreSQL / MySQL', level: 85, category: 'database' },
      { name: 'MongoDB',            level: 78, category: 'database' },
      { name: 'Redis',              level: 70, category: 'database' },
      { name: 'Firebase',           level: 80, category: 'database' },
      { name: 'Supabase',           level: 75, category: 'database' },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps & Tools',
    icon: '🚀',
    skills: [
      { name: 'Docker',          level: 75, category: 'devops' },
      { name: 'Git / GitHub',    level: 95, category: 'devops' },
      { name: 'CI/CD Pipeline',  level: 70, category: 'devops' },
      { name: 'Linux / VPS',     level: 72, category: 'devops' },
      { name: 'Nginx',           level: 68, category: 'devops' },
    ],
  },
]

export function getLevelLabel(level: number): string {
  if (level >= 90) return 'Expert'
  if (level >= 75) return 'Advanced'
  if (level >= 60) return 'Intermediate'
  return 'Learning'
}
