import type { MetadataRoute } from "next"
import { getArticles } from "@/lib/articles"

export default function sitemap(): MetadataRoute.Sitemap {
    const articles = getArticles()

    const articleUrls = articles.map((article) => ({
        url: `https://yourdomain.com/articles/${article.slug}`,
        lastModified: new Date(article.publishedAt),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }))

    return [
        {
            url: "https://yourdomain.com",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: "https://yourdomain.com/articles",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: "https://yourdomain.com/projects",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://yourdomain.com/stack",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        ...articleUrls,
    ]
}
