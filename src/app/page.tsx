import { TechBadge } from '@/components/tech-badge'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              <section className="group">
                <div className="space-y-6 p-6 rounded-lg border border-transparent hover:border-border/50 transition-all duration-300 hover:bg-card/30">
                  <p className="text-foreground leading-relaxed">
                    I’m a backend-leaning software engineer (age 23, Japan) who
                    builds reliable, performant web applications. I care about
                    clean contracts, predictable behavior, and shipping features
                    that stay fast under real traffic.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    My recent work centers on Java + MySQL services with
                    real-time communication (WebSocket RPC), safe concurrency
                    (optimistic / pessimistic locking), and query
                    analysis/optimization. I also deliver solid frontend when
                    needed—primarily with React, Next.js, and
                    TypeScript—choosing rendering and data-fetching strategies
                    that minimize client JS and keep UIs responsive.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    I’m improving my English and engineering skills to pursue
                    opportunities in North America. (Updated: September 2025)
                  </p>
                </div>
              </section>

              <section className="group">
                <div className="border-l-2 border-primary/30 pl-6 hover:border-primary/50 transition-colors duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">
                      2025 — Present
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                    Backend Engineer — Enterprise Chat Platform
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    End-to-end backend feature development in a real-time chat
                    system: query investigation and optimization, WebSocket RPC
                    event design/implementation, and concurrency control using
                    optimistic and pessimistic locking. I collaborate across API
                    boundaries, database schema, and TypeScript contracts to
                    keep the system correct and fast.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <TechBadge name="Java" color="purple" />
                    <TechBadge name="MySQL" color="blue" />
                    <TechBadge name="TypeScript" color="blue" />
                    <TechBadge name="WebSocket" color="green" />
                    <TechBadge name="RPC" color="green" />
                    <TechBadge name="Locking" color="orange" />
                  </div>
                </div>
              </section>

              {/* Previous */}
              <section className="group">
                <div className="border-l-2 border-primary/30 pl-6 hover:border-primary/50 transition-colors duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">
                      2023 — 2024
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                    Backend / Full-stack Engineer — E-Scooter Rental Service
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Built mobile app backend APIs in PHP. Proposed and delivered
                    the admin dashboard from 0→1: React.js frontend, PHP
                    backend, and MySQL schema. Implemented auth, rental/return
                    flows, fleet & pricing management, and basic analytics for
                    operators—prioritizing clear API contracts and maintainable
                    data models.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <TechBadge name="PHP" color="purple" />
                    <TechBadge name="React.js" color="blue" />
                    <TechBadge name="MySQL" color="blue" />
                    <TechBadge name="REST API" color="teal" />
                  </div>
                </div>
              </section>

              {/* Strengths (optional but recommended) */}
              <section className="group">
                <div className="space-y-3 p-6 rounded-lg border border-transparent hover:border-border/50 transition-all duration-300 hover:bg-card/30">
                  <h4 className="text-sm font-semibold text-foreground/90">
                    Strengths
                  </h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>
                      Real-time systems: WebSocket RPC design, backpressure, and
                      idempotency.
                    </li>
                    <li>
                      Data modeling &amp; performance: scalable schemas,
                      EXPLAIN-driven SQL tuning.
                    </li>
                    <li>
                      Correctness under concurrency: optimistic/pessimistic
                      locking with tight scope.
                    </li>
                    <li>
                      Pragmatic frontend: RSC-first mindset, minimal client JS,
                      predictable state.
                    </li>
                    <li>
                      Clear API contracts: versioned payloads, validation,
                      consistent error shapes.
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
