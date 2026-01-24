export interface Testimonial {
  text: string
  name: string
  role: string
  company: string
  initials: string
}

export const testimonials: Testimonial[] = [
  {
    text: '"Maulana is an exceptional developer who consistently delivers high-quality code. His attention to detail in UI implementation is outstanding."',
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'Tech Solutions',
    initials: 'SJ'
  },
  {
    text: '"Working with Maulana was a breeze. He understood our requirements perfectly and suggested improvements that made the final product even better."',
    name: 'David Chen',
    role: 'CTO',
    company: 'StartUp Hub',
    initials: 'DC'
  }
]
