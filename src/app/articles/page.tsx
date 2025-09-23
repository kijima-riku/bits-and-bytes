import { ArticleCard } from '@/components/article-card'
import { getArticles } from '@/lib/articles'

export const metadata = {
  title: 'Articles | Tech Blog',
  description:
    'Technical articles about web development, performance optimization, and modern programming practices.',
}

export default function ArticlesPage() {
  const articles = getArticles()
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-6">
        <h1 className="text-2xl font-bold text-foreground">
          Technical Articles
        </h1>
        {articles.length === 0 ? (
          <p className="text-muted-foreground">No posts found in ./posts</p>
        ) : (
          <div className="space-y-6">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
