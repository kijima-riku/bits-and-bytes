import { ProjectCard } from "@/components/project-card"
import { getProjects, getFeaturedProjects } from "@/lib/projects"

export const metadata = {
    title: "Projects | Tech Blog",
    description: "A showcase of software engineering projects and technical implementations.",
}

export default function ProjectsPage() {
    const featuredProjects = getFeaturedProjects()
    const allProjects = getProjects()
    const otherProjects = allProjects.filter((project) => !project.featured)

    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <div className="space-y-12">
                            <div>
                                <h1 className="text-2xl font-bold text-foreground mb-2">Featured Projects</h1>
                                <p className="text-muted-foreground mb-8">
                                    A selection of projects that showcase my technical skills and problem-solving approach.
                                </p>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {featuredProjects.map((project) => (
                                        <ProjectCard key={project.id} project={project} featured />
                                    ))}
                                </div>
                            </div>

                            {otherProjects.length > 0 && (
                                <div>
                                    <h2 className="text-xl font-bold text-foreground mb-6">Other Projects</h2>
                                    <div className="grid grid-cols-1 gap-6">
                                        {otherProjects.map((project) => (
                                            <ProjectCard key={project.id} project={project} />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
