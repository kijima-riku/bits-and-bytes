import { Navigation } from "@/components/navigation"
import { SocialLinks } from "@/components/social-links"
import { TechBadge } from "@/components/tech-badge"
import { AnimatedText } from "@/components/animated-text"

export default function HomePage() {
    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-12">
                            <div className="space-y-8">
                                <div>
                                    <h1 className="text-3xl font-bold text-foreground mb-2">
                                        <AnimatedText text="Your Name" />
                                    </h1>
                                    <p className="text-lg text-muted-foreground mb-4">
                                        <AnimatedText text="Software Engineer" delay={1000} />
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Building scalable web applications and sharing insights about modern development practices.
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
                            <section className="group">
                                <div className="space-y-6 p-6 rounded-lg border border-transparent hover:border-border/50 transition-all duration-300 hover:bg-card/30">
                                    <p className="text-foreground leading-relaxed">
                                        I'm a software engineer passionate about crafting accessible, performant web applications that blend
                                        thoughtful design with robust engineering. My expertise lies at the intersection of frontend
                                        development and system architecture, creating experiences that not only look great but are
                                        meticulously built for performance and scalability.
                                    </p>

                                    <p className="text-muted-foreground leading-relaxed">
                                        Currently seeking opportunities in North America, I specialize in modern web technologies including
                                        React, Next.js, and TypeScript. I contribute to open-source projects and write about development
                                        best practices, performance optimization, and emerging web technologies.
                                    </p>

                                    <p className="text-muted-foreground leading-relaxed">
                                        In my spare time, I enjoy exploring new technologies, contributing to developer communities, and
                                        sharing knowledge through technical writing and mentoring.
                                    </p>
                                </div>
                            </section>

                            <section className="group">
                                <div className="border-l-2 border-primary/30 pl-6 hover:border-primary/50 transition-colors duration-300">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs text-muted-foreground uppercase tracking-wide">2024 — Present</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                                        Senior Software Engineer
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                        Building and maintaining scalable web applications using modern technologies. Leading frontend
                                        architecture decisions and mentoring junior developers.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <TechBadge name="React" color="blue" />
                                        <TechBadge name="Next.js" color="blue" />
                                        <TechBadge name="TypeScript" color="blue" />
                                        <TechBadge name="Node.js" color="green" />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
