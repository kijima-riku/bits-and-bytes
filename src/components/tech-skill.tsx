import { TechBadge } from "./tech-badge"
import type { Technology } from "@/lib/tech-stack"

interface TechSkillProps {
    technology: Technology
}

const levelColors = {
    Beginner: "orange",
    Intermediate: "blue",
    Advanced: "green",
    Expert: "purple",
} as const

export function TechSkill({ technology }: TechSkillProps) {
    return (
        <div className="space-y-3 p-4 rounded-lg border border-border/50 hover:border-border transition-colors duration-200 hover:bg-card/50">
            <div className="flex items-start justify-between">
                <div className="space-y-1">
                    <h3 className="font-semibold text-foreground">{technology.name}</h3>
                    <p className="text-xs text-muted-foreground">{technology.years} years experience</p>
                </div>
                <TechBadge name={technology.level} color={levelColors[technology.level]} />
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">{technology.description}</p>
        </div>
    )
}
