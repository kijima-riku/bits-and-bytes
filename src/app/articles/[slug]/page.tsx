import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import { Navigation } from "@/components/navigation"
import { SocialLinks } from "@/components/social-links"
import { TechBadge } from "@/components/tech-badge"
import { StructuredData } from "@/components/structured-data"
import { getArticleBySlug, getArticleContent, getArticles } from "@/lib/articles"
import { generateSEO } from "@/lib/seo"
import { generateArticleStructuredData } from "@/lib/structured-data"

interface ArticlePageProps {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    const articles = getArticles()
    return articles.map((article) => ({
        slug: article.slug,
    }))
}

export async function generateMetadata({ params }: ArticlePageProps) {
    const article = getArticleBySlug(params.slug)

    if (!article) {
        return generateSEO({
            title: "Article Not Found",
            description: "The requested article could not be found.",
        })
    }

    return generateSEO({
        title: `${article.title} | Tech Blog`,
        description: article.description,
        keywords: [...article.tags, "software engineering", "web development"],
        type: "article",
        publishedTime: article.publishedAt,
        url: `https://yourdomain.com/articles/${article.slug}`,
    })
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

export default function ArticlePage({ params }: ArticlePageProps) {
    const article = getArticleBySlug(params.slug)

    if (!article) {
        notFound()
    }

    const content = getArticleContent(params.slug)
    const publishedDate = new Date(article.publishedAt)
    const timeAgo = formatDistanceToNow(publishedDate, { addSuffix: true })

    return (
        <>
            <StructuredData data={generateArticleStructuredData(article)} />

            <div className="min-h-screen bg-background">
                <div className="max-w-6xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Left sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-12">
                                <div className="space-y-8">
                                    <div>
                                        <Link
                                            href="/articles"
                                            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 mb-6"
                                        >
                                            <ArrowLeft className="h-4 w-4 mr-2" />
                                            Back to articles
                                        </Link>

                                        <h1 className="text-3xl font-bold text-foreground mb-2">Your Name</h1>
                                        <p className="text-lg text-muted-foreground mb-4">Software Engineer</p>
                                    </div>

                                    <Navigation />

                                    <SocialLinks />
                                </div>
                            </div>
                        </div>

                        {/* Main content */}
                        <div className="lg:col-span-2">
                            <article className="space-y-8">
                                <header className="space-y-4">
                                    <h1 className="text-3xl font-bold text-foreground text-balance">{article.title}</h1>

                                    <p className="text-lg text-muted-foreground text-pretty">{article.description}</p>

                                    <div className="flex items-center justify-between text-sm text-muted-foreground">
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
                                </header>

                                <div className="prose prose-invert prose-lg max-w-none">
                                    <div
                                        className="text-foreground leading-relaxed"
                                        dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, "<br />") }}
                                    />
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
