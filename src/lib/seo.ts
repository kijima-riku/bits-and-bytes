import type { Metadata } from "next"

interface SEOProps {
    title?: string
    description?: string
    keywords?: string[]
    image?: string
    url?: string
    type?: "website" | "article"
    publishedTime?: string
    modifiedTime?: string
}

export function generateSEO({
                                title = "Tech Blog | Software Engineer Portfolio",
                                description = "Technical writing and insights from a software engineer pursuing opportunities in North America",
                                keywords = ["software engineering", "web development", "technical blog", "programming", "career"],
                                image = "/og-image.png",
                                url = "https://yourdomain.com",
                                type = "website",
                                publishedTime,
                                modifiedTime,
                            }: SEOProps = {}): Metadata {
    return {
        title,
        description,
        keywords,
        authors: [{ name: "Your Name", url: "https://yourdomain.com" }],
        creator: "Your Name",
        publisher: "Your Name",

        // Open Graph
        openGraph: {
            type,
            title,
            description,
            url,
            siteName: "Tech Blog",
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            ...(publishedTime && { publishedTime }),
            ...(modifiedTime && { modifiedTime }),
        },

        // Twitter
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
            creator: "@yourusername",
        },

        // Additional meta tags
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },

        // Verification
        verification: {
            google: "your-google-verification-code",
        },
    }
}
