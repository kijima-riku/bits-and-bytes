import { AnimatedText } from "@/components/animated-text"
import { Navigation } from "@/components/navigation"
import { SocialLinks } from "@/components/social-links"

export function Sidebar() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">
                    <AnimatedText text="Riku Kijima" />
                </h1>
                <p className="text-lg text-muted-foreground mb-4">
                    <AnimatedText text="Software Engineer" delay={300} />
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                    Building scalable web applications and sharing insights about modern development practices.
                </p>
            </div>

            <Navigation />
            <SocialLinks />
        </div>
    )
}
