export interface TechCategory {
  name: string
  technologies: Technology[]
}

export interface Technology {
  name: string
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
  years: number
  description: string
  color: 'blue' | 'green' | 'purple' | 'orange' | 'teal'
}

export const techStack: TechCategory[] = [
  {
    name: 'Frontend Development',
    technologies: [
      {
        name: 'Next.js',
        level: 'Intermediate',
        years: 1,
        description:
          'Built an internal management app; focused on rendering strategy, state management, and efficient client–server communication.',
        color: 'blue',
      },
      {
        name: 'React',
        level: 'Intermediate',
        years: 1,
        description:
          'Developed complex views with component composition and predictable state updates for maintainable UIs.',
        color: 'blue',
      },
      {
        name: 'Vue.js',
        level: 'Beginner',
        years: 0.25,
        description: 'State management pattern and basic component design.',
        color: 'green',
      },
    ],
  },
  {
    name: 'Backend Development',
    technologies: [
      {
        name: 'PHP',
        level: 'Beginner',
        years: 1,
        description:
          'Owned mobile app and admin APIs; designed clear contracts, validation, and consistent error handling.',
        color: 'purple',
      },
      {
        name: 'Java',
        level: 'Advanced',
        years: 1,
        description:
          'Enterprise chat backend: class design, reusable coding conventions, and real-time WebSocket RPC.',
        color: 'purple',
      },
    ],
  },
  {
    name: 'Databases',
    technologies: [
      {
        name: 'MySQL',
        level: 'Advanced',
        years: 2,
        description:
          'Scalable schema design, reading execution plans, and SQL optimization for lower latency.',
        color: 'blue',
      },
    ],
  },
  {
    name: 'Real-time & Protocols',
    technologies: [
      {
        name: 'WebSocket',
        level: 'Intermediate',
        years: 1,
        description:
          'Implemented RPC-style real-time messaging for an enterprise chat application.',
        color: 'green',
      },
      {
        name: 'RPC',
        level: 'Intermediate',
        years: 1,
        description:
          'Designed event and contract boundaries to keep real-time flows reliable and debuggable.',
        color: 'green',
      },
    ],
  },
]

export function getTechStack(): TechCategory[] {
  return techStack
}

export function getAllTechnologies(): Technology[] {
  return techStack.flatMap((category) => category.technologies)
}
