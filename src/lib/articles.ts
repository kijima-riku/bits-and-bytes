export interface Article {
  slug: string
  title: string
  description: string
  publishedAt: string
  readingTime: string
  tags: string[]
  content?: string
}

// Mock articles data - in production, this would come from your CMS or markdown files
export const articles: Article[] = [
  {
    slug: 'optimizing-nextjs-performance',
    title:
      'Optimizing Next.js Performance: A Deep Dive into SSR and Static Generation',
    description:
      'Exploring advanced techniques for maximizing performance in Next.js applications through strategic use of SSR, SSG, and ISR.',
    publishedAt: '2024-01-15',
    readingTime: '8 min read',
    tags: ['Next.js', 'Performance', 'SSR', 'React'],
  },
  {
    slug: 'typescript-advanced-patterns',
    title: 'Advanced TypeScript Patterns for Scalable Applications',
    description:
      "Leveraging TypeScript's type system to build more maintainable and scalable codebases with advanced patterns and techniques.",
    publishedAt: '2024-01-08',
    readingTime: '12 min read',
    tags: ['TypeScript', 'Architecture', 'Patterns'],
  },
  {
    slug: 'react-server-components-guide',
    title: 'React Server Components: The Future of React Architecture',
    description:
      "Understanding React Server Components and how they're changing the way we think about client-server boundaries in modern web applications.",
    publishedAt: '2024-01-01',
    readingTime: '10 min read',
    tags: ['React', 'Server Components', 'Architecture'],
  },
  {
    slug: 'web-accessibility-modern-practices',
    title: 'Web Accessibility in 2024: Modern Practices and Tools',
    description:
      'A comprehensive guide to implementing accessibility best practices in modern web applications, including testing strategies and automation.',
    publishedAt: '2023-12-20',
    readingTime: '15 min read',
    tags: ['Accessibility', 'Web Standards', 'Testing'],
  },
]

export function getArticles(): Article[] {
  return articles.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  )
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

export function getArticleContent(slug: string): string {
  // In production, this would read from markdown files or CMS
  const mockContent = `
# ${getArticleBySlug(slug)?.title}

This is a comprehensive technical article about modern web development practices. In a real implementation, this content would be loaded from markdown files or a headless CMS.

## Introduction

Modern web development requires a deep understanding of performance optimization, accessibility, and scalable architecture patterns. This article explores advanced techniques and best practices.

## Key Concepts

### Performance Optimization

Performance is crucial for user experience and SEO. Here are some key strategies:

- **Code Splitting**: Implement dynamic imports to reduce initial bundle size
- **Image Optimization**: Use Next.js Image component for automatic optimization
- **Caching Strategies**: Leverage browser caching and CDN distribution

### Accessibility Best Practices

Building inclusive web applications requires attention to:

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance

## Implementation Examples

\`\`\`typescript
// Example of optimized component loading
const DynamicComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Skeleton />,
  ssr: false
})
\`\`\`

## Conclusion

These practices form the foundation of modern, scalable web applications. Continuous learning and adaptation to new technologies is essential for staying current in the rapidly evolving web development landscape.
  `
  return mockContent
}
