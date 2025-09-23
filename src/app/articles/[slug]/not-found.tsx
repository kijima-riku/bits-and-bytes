import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-foreground">Article Not Found</h1>
                <p className="text-muted-foreground">The article you&#39;re looking for doesn&#39;t exist or has been moved.</p>
                <Link
                    href="/articles"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to articles
                </Link>
            </div>
        </div>
    )
}
