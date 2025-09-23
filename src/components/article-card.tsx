import Link from "next/link"
import { formatDistanceToNow } from "date-fns"
import { TechBadge } from "./tech-badge"
import type { Article } from "@/lib/articles"

interface ArticleCardProps {
    article: Article
}

const tagColors = {
    "Next.js": "blue",
    React: "blue",
    TypeScript: "blue",
    Performance: "green",
    SSR: "green",
    Architecture: "purple",
    Patterns: "purple",
    "Server Components": "teal",
    Accessibility: "orange",
    "Web Standards": "orange",
    Testing: "orange",
} as const

export function ArticleCard({ article }: ArticleCardProps) {
    const publishedDate = new Date(article.publishedAt)
    const timeAgo = formatDistanceToNow(publishedDate, { addSuffix: true })

    return (
        <article className="group">
            <Link href={`/articles/${article.slug}`} className="block">
                <div className="space-y-3 p-6 rounded-lg border border-border/50 hover:border-border transition-colors duration-200 hover:bg-card/50">
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200 text-balance">
                            {article.title}
                        </h2>
                        <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{article.description}</p>
                    </div>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center space-x-4">
                            <time dateTime={article.publishedAt}>{timeAgo}</time>
                            <span>{article.readingTime}</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag) => (
                            <TechBadge key={tag} name={tag} color={tagColors[tag as keyof typeof tagColors] || "blue"} />
                        ))}
                    </div>
                </div>
            </Link>
        </article>
    )
}
