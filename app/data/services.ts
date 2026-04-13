// ============================================================
// DATA: services.ts
// Source: Static (Dummy Data)
// ============================================================

export interface Service {
  id: string
  icon: string
  title: string
  description: string
  highlights?: string[]
}

export const services: Service[] = [
  {
    id: 'frontend',
    icon: '🎨',
    title: 'Frontend Development',
    description:
      'Crafting pixel-perfect, performant web interfaces using Vue.js, React, and modern CSS. Focus on accessibility, responsiveness, and delightful user experiences.',
    highlights: ['Vue 3 / React', 'Nuxt.js / Next.js', 'Responsive Design', 'Web Performance'],
  },
  {
    id: 'backend',
    icon: '⚙️',
    title: 'Backend Development',
    description:
      'Building scalable APIs and server-side applications with Node.js, Laravel, and cloud-native architectures. RESTful & GraphQL expertise.',
    highlights: ['Node.js / Express', 'Laravel / PHP', 'REST & GraphQL', 'Database Design'],
  },
  {
    id: 'fullstack',
    icon: '🚀',
    title: 'Full Stack Solutions',
    description:
      'End-to-end product development from database design to production deployment. Seamlessly integrating frontend and backend for cohesive, maintainable systems.',
    highlights: ['System Architecture', 'CI/CD Pipeline', 'Cloud Deployment', 'Code Review'],
  },
  {
    id: 'consulting',
    icon: '💡',
    title: 'Technical Consulting',
    description:
      'Strategic technical guidance for startups and established businesses. Code reviews, architecture planning, and performance optimization audits.',
    highlights: ['Tech Stack Advisory', 'Performance Audit', 'Code Review', 'Team Mentoring'],
  },
]
