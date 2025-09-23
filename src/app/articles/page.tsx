import { Navigation } from "@/components/navigation"
import { SocialLinks } from "@/components/social-links"
import { ArticleCard } from "@/components/article-card"
import { getArticles } from "@/lib/articles"

export const metadata = {
    title: "Articles | Tech Blog",
    description: "Technical articles about web development, performance optimization, and modern programming practices.",
}

export default function ArticlesPage() {
    const articles = getArticles()

    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-12">
                            <div className="space-y-8">
                                <div>
                                    <h1 className="text-3xl font-bold text-foreground mb-2">Your Name</h1>
                                    <p className="text-lg text-muted-foreground mb-4">Software Engineer</p>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Technical insights and development practices.
                                    </p>
                                </div>

                                <Navigation />

                                <SocialLinks />
                            </div>
                        </div>
                    </div>

                    {/* Main content */}
                    <div className="lg:col-span-2">
                        <div className="space-y-8">
                            <div>
                                <h1 className="text-2xl font-bold text-foreground mb-2">Technical Articles</h1>
                                <p className="text-muted-foreground">
                                    Insights on modern web development, performance optimization, and software engineering best practices.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {articles.map((article) => (
                                    <ArticleCard key={article.slug} article={article} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
