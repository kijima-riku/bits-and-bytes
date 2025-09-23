import { TechSkill } from "@/components/tech-skill"
import { getTechStack } from "@/lib/tech-stack"
import {TwoColumnLayout} from "@/components/two-column-layout";

export const metadata = {
    title: "Tech Stack | Tech Blog",
    description: "Technologies, tools, and frameworks I work with as a software engineer.",
}

export default function StackPage() {
    const techStack = getTechStack()

    return (
        <TwoColumnLayout>
        <div className="min-h-screen bg-background">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <div className="space-y-12">
                            <div>
                                <h1 className="text-2xl font-bold text-foreground mb-2">Technology Stack</h1>
                                <p className="text-muted-foreground mb-8">
                                    A comprehensive overview of the technologies, frameworks, and tools I use in my development work.
                                </p>
                            </div>

                            {techStack.map((category) => (
                                <div key={category.name} className="space-y-6">
                                    <h2 className="text-xl font-bold text-foreground">{category.name}</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {category.technologies.map((technology) => (
                                            <TechSkill key={technology.name} technology={technology} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </TwoColumnLayout>
    )
}
