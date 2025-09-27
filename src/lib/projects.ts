export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  liveUrl?: string
  imageUrl?: string
  start: string
  end?: string
}

function sortByStartDesc(a: Project, b: Project) {
  return b.start.localeCompare(a.start)
}

export const projects: Project[] = [
  {
    id: 'enterprise-chat-backend',
    title: 'Enterprise Chat Application — Backend Development',
    description:
      'Backend feature development for a business chat application (Java / MySQL / TypeScript).',
    longDescription:
      'Jan 2025 – Present. Responsible for end-to-end backend feature development in a business chat platform. Work includes query analysis and optimization during new feature delivery, WebSocket RPC event design and implementation, and concurrency control with both optimistic and pessimistic locking. Collaborated across API, database schema, and TypeScript-facing contracts to ensure reliable real-time messaging.',
    technologies: [
      'Java',
      'MySQL',
      'TypeScript',
      'WebSocket',
      'RPC',
      'Locking',
    ],
    start: '2025-01',
  },
  {
    id: 'escooter-rental',
    title: 'E-Scooter Rental Service',
    description:
      'Rental mobile app backend (PHP) and admin dashboard (React frontend + PHP backend) with MySQL.',
    longDescription:
      'Aug 2023 – Sep 2024. Built the backend APIs for the rental mobile application in PHP. Proposed and led the admin dashboard from 0→1, handling everything end-to-end: React.js frontend, PHP backend, and MySQL schema. Covered authentication, rental/return flows, fleet and pricing management, and basic analytics for operators.',
    technologies: ['PHP', 'React.js', 'MySQL', 'REST API'],
    start: '2023-08',
    end: '2024-09',
  },
].sort(sortByStartDesc)

export function getProjects(): Project[] {
  return [...projects].sort(sortByStartDesc)
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}
