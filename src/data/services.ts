export interface Service {
  icon: string
  title: string
  description: string
}

export const services: Service[] = [
  {
    icon: '💻',
    title: 'Frontend Development',
    description: 'Building responsive, performant, and accessible web applications using modern frameworks like Vue and React.'
  },
  {
    icon: '🎨',
    title: 'UI/UX Implementation',
    description: 'Translating complex designs into pixel-perfect, interactive code with a focus on smooth user experiences.'
  },
  {
    icon: '⚡',
    title: 'Performance Optimization',
    description: 'Optimizing web applications for speed, SEO, and Core Web Vitals to ensure maximum reach and engagement.'
  }
]
