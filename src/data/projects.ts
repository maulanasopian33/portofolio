export interface Project {
  id: string
  title: string
  category: string
  description: string
  tech: string[]
  image: string
  featured: boolean
  overview?: string
  challenge?: string
  solution?: string
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Dashboard',
    category: 'Web Application',
    description: 'A comprehensive analytics dashboard for online retailers, featuring real-time data visualization and sales tracking.',
    tech: ['Vue 3', 'ApexCharts', 'Tailwind'],
    image: '',
    featured: true,
    overview: 'This dashboard was built to provide shop owners with immediate insights into their business performance. It aggregates data from multiple sources and presents it in an intuitive interface.',
    challenge: 'Handling real-time WebSocket data updates without causing UI lag was the primary challenge, specifically with complex chart re-rendering.',
    solution: 'We implemented a throttled data buffer and optimized the chart update cycles to ensure 60fps performance even during high-traffic events.'
  },
  {
    id: '2',
    title: 'Portfolio V1',
    category: 'Personal Website',
    description: 'A minimalist personal portfolio website focusing on typography and clean layout design.',
    tech: ['React', 'GSAP', 'Styled Components'],
    image: '',
    featured: true,
    overview: 'My first portfolio site, designed to showcase my journey as a junior developer.',
    challenge: 'Learning and implementing GSAP animations for the first time to create a unique scrolling experience.',
    solution: 'Deep dived into GSAP documentation and created reusable animation hooks.'
  },
  {
    id: '3',
    title: 'Task Management App',
    category: 'Productivity Tool',
    description: 'A Kanban-style task manager with team collaboration features and real-time updates.',
    tech: ['Vue 3', 'Firebase', 'Pinia'],
    image: '',
    featured: false,
    overview: 'A collaborative tool designed for small remote teams to track progress.',
    challenge: 'Structuring the Firebase database to support efficient complex queries.',
    solution: 'Designed a denormalized data structure optimized for read operations.'
  },
  {
    id: '4',
    title: 'Finance Tracker',
    category: 'Mobile App',
    description: 'A cross-platform mobile application for tracking personal expenses and budgeting.',
    tech: ['Flutter', 'Dart', 'SQLite'],
    image: '',
    featured: false,
    overview: 'An offline-first mobile app to help users manage their finances on the go.',
    challenge: 'Ensuring data consistency between local storage and cloud backup.',
    solution: 'Implemented a custom sync engine that handles conflict resolution.'
  }
]
