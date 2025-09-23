export function generateArticleStructuredData(article: {
  title: string
  description: string
  publishedAt: string
  slug: string
  readingTime: string
  tags: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      '@type': 'Person',
      name: 'Your Name',
      url: 'https://yourdomain.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Tech Blog',
      logo: {
        '@type': 'ImageObject',
        url: 'https://yourdomain.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://yourdomain.com/articles/${article.slug}`,
    },
    keywords: article.tags.join(', '),
    wordCount: article.readingTime,
  }
}

export function generatePersonStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Your Name',
    jobTitle: 'Software Engineer',
    description:
      'Software engineer passionate about crafting accessible, performant web applications',
    url: 'https://yourdomain.com',
    sameAs: [
      'https://github.com/yourusername',
      'https://linkedin.com/in/yourprofile',
      'https://twitter.com/yourusername',
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Web Development',
      'Software Engineering',
    ],
  }
}

export function generateWebsiteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Tech Blog',
    description: 'Technical writing and insights from a software engineer',
    url: 'https://yourdomain.com',
    author: {
      '@type': 'Person',
      name: 'Your Name',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://yourdomain.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }
}
