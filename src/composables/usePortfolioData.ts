import { projects } from '../data/projects'
import { techStack } from '../data/techStack'
import { services } from '../data/services'
import { experience } from '../data/experience'
import { testimonials } from '../data/testimonials'
import { profile } from '../data/profile'

export function usePortfolioData() {
  const getProject = (id: string) => projects.find(p => p.id === id)
  const getFeaturedProjects = () => projects.filter(p => p.featured)

  return {
    projects,
    featuredProjects: getFeaturedProjects(),
    getProject,
    techStack,
    services,
    experience,
    testimonials,
    profile
  }
}
