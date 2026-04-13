// ============================================================
// DATA: testimonials.ts
// Source: Static (Dummy Data)
// ============================================================

export interface Testimonial {
  id: string
  text: string
  name: string
  role: string
  company: string
  initials: string
  rating?: number
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    text: 'Maulana delivered exceptional work on our dashboard project. His attention to detail and ability to translate complex requirements into clean, maintainable code is truly impressive.',
    name: 'Sarah Chen',
    role: 'Product Manager',
    company: 'TechCorp',
    initials: 'SC',
    rating: 5,
  },
  {
    id: '2',
    text: 'Working with Maulana was a fantastic experience. He brought new ideas to the table, communicated proactively, and delivered the project ahead of schedule.',
    name: 'David Kim',
    role: 'CTO',
    company: 'StartupXYZ',
    initials: 'DK',
    rating: 5,
  },
  {
    id: '3',
    text: 'The e-commerce platform Maulana built for us has been rock solid. Great developer, great communicator. Would highly recommend for any complex web project.',
    name: 'Rina Putri',
    role: 'Founder & CEO',
    company: 'BrandCo',
    initials: 'RP',
    rating: 5,
  },
]
