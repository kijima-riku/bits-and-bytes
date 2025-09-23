import { notFound } from 'next/navigation'
import { formatDistanceToNow } from 'date-fns'
import { TechBadge } from '@/components/tech-badge'
import { StructuredData } from '@/components/structured-data'
import { generateSEO } from '@/lib/seo'
import { generateArticleStructuredData } from '@/lib/structured-data'
import { getArticles, getArticleBySlug } from '@/lib/articles'
import { getArticleHtml } from '@/lib/articleContents'

export const revalidate = 60

export async function generateStaticParams() {
  return getArticles().map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) {
    return generateSEO({
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    })
  }
  return generateSEO({
    title: `${article.title} | Tech Blog`,
    description: article.description,
    keywords: [...article.tags, 'software engineering', 'web development'],
    type: 'article',
    publishedTime: article.publishedAt,
    url: `https://yourdomain.com/articles/${article.slug}`,
  })
}

const tagColors = {
  'Next.js': 'blue',
  React: 'blue',
  TypeScript: 'blue',
  Performance: 'green',
  SSR: 'green',
  Architecture: 'purple',
  Patterns: 'purple',
  'Server Components': 'teal',
  Accessibility: 'orange',
  'Web Standards': 'orange',
  Testing: 'orange',
} as const

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return notFound()
  const html = await getArticleHtml(slug)
  if (!html) return notFound()

  const timeAgo = formatDistanceToNow(new Date(article.publishedAt), {
    addSuffix: true,
  })

  return (
    <>
      <StructuredData data={generateArticleStructuredData(article)} />
      <div className="min-h-screen bg-background">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <article className="space-y-8">
                <header className="space-y-4">
                  <h1 className="text-3xl font-bold text-foreground text-balance">
                    {article.title}
                  </h1>
                  <p className="text-lg text-muted-foreground text-pretty">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <time
                        dateTime={article.publishedAt}
                        suppressHydrationWarning
                      >
                        {timeAgo}
                      </time>
                      <span>{article.readingTime}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <TechBadge
                        key={tag}
                        name={tag}
                        color={
                          tagColors[tag as keyof typeof tagColors] || 'blue'
                        }
                      />
                    ))}
                  </div>
                </header>
                <div
                  className="prose prose-lg max-w-none dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
