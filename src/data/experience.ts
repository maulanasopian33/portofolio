export interface Experience {
  period: string
  role: string
  company: string
  description: string
}

export const experience: Experience[] = [
  {
    period: '2023 - Present',
    role: 'Senior Frontend Developer',
    company: 'Tech Solutions Inc.',
    description: 'Leading the frontend team in rebuilding the core product dashboard using Vue 3 and TypeScript. Improved load times by 40%.'
  },
  {
    period: '2021 - 2023',
    role: 'Frontend Developer',
    company: 'Digital Agency Creative',
    description: 'Collaborated with designers to deliver pixel-perfect websites for high-profile clients using React and GSAP.'
  },
  {
    period: '2020 - 2021',
    role: 'Junior Web Developer',
    company: 'StartUp Hub',
    description: 'Assisted in developing and maintaining client websites. Learned the fundamentals of modern web development workflows.'
  }
]
