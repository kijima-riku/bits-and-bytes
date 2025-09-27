import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { TechBadge } from './tech-badge'
import type { Project } from '@/lib/projects'

interface ProjectCardProps {
  project: Project
}

const tagColors = {
  'Next.js': 'blue',
  React: 'blue',
  'React.js': 'blue',
  TypeScript: 'blue',
  'Vue.js': 'green',
  'Node.js': 'green',
  Python: 'orange',
  PostgreSQL: 'blue',
  MySQL: 'blue',
  MongoDB: 'green',
  Prisma: 'purple',
  Stripe: 'purple',
  'Tailwind CSS': 'teal',
  'Socket.io': 'green',
  Express: 'green',
  'Material-UI': 'blue',
  'D3.js': 'orange',
  FastAPI: 'orange',
  Docker: 'blue',
  'OpenAI API': 'purple',
  Supabase: 'green',
  'Vercel AI SDK': 'blue',
  Java: 'purple',
  PHP: 'purple',
  WebSocket: 'green',
  RPC: 'green',
  Locking: 'orange',
  'REST API': 'teal',
} as const

function formatPeriod(start: string, end?: string) {
  const toLabel = (ym: string) => {
    const [y, m] = ym.split('-').map((v) => parseInt(v, 10))
    const d = new Date(y, (m || 1) - 1, 1)
    return d.toLocaleString('en-US', { month: 'short', year: 'numeric' })
  }
  const startLabel = toLabel(start)
  const endLabel = end ? toLabel(end) : 'Present'
  return `${startLabel} – ${endLabel}`
}

export function ProjectCard({ project }: ProjectCardProps) {
  const period = formatPeriod(project.start, project.end)

  return (
    <div className="group">
      <div className="space-y-4 p-6 rounded-lg border border-border/50 hover:border-border transition-colors duration-200 hover:bg-card/50">
        {project.imageUrl && (
          <div className="relative aspect-video rounded-md overflow-hidden bg-muted">
            <Image
              src={project.imageUrl || '/placeholder.svg'}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-200 group-hover:scale-105"
            />
          </div>
        )}

        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-sm font-medium text-muted-foreground">
                {period}
              </p>
            </div>

            <div className="flex items-center space-x-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  aria-label="View live demo"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          <p
            className="text-base font-medium text-foreground leading-snug"
            aria-label="Project summary"
          >
            {project.description}
          </p>

          <div className="h-px bg-border/60" />

          <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
            {project.longDescription}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <TechBadge
                key={tech}
                name={tech}
                color={tagColors[tech as keyof typeof tagColors] || 'blue'}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
