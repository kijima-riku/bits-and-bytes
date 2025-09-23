interface TechBadgeProps {
    name: string
    color?: "blue" | "green" | "purple" | "orange" | "teal"
}

const colorVariants = {
    blue: "bg-primary/20 text-primary border-primary/30",
    green: "bg-green-500/20 text-green-400 border-green-500/30",
    purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    orange: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    teal: "bg-accent/20 text-accent border-accent/30",
}

export function TechBadge({ name, color = "blue" }: TechBadgeProps) {
    return (
        <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium border ${colorVariants[color]}`}
        >
      {name}
    </span>
    )
}
