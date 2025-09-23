export interface TechCategory {
    name: string
    technologies: Technology[]
}

export interface Technology {
    name: string
    level: "Beginner" | "Intermediate" | "Advanced" | "Expert"
    years: number
    description: string
    color: "blue" | "green" | "purple" | "orange" | "teal"
}

export const techStack: TechCategory[] = [
    {
        name: "Frontend Development",
        technologies: [
            {
                name: "React",
                level: "Expert",
                years: 5,
                description: "Building complex UIs with hooks, context, and performance optimization",
                color: "blue",
            },
            {
                name: "Next.js",
                level: "Expert",
                years: 4,
                description: "Full-stack applications with SSR, SSG, and API routes",
                color: "blue",
            },
            {
                name: "TypeScript",
                level: "Advanced",
                years: 4,
                description: "Type-safe development with advanced patterns and generics",
                color: "blue",
            },
            {
                name: "Tailwind CSS",
                level: "Advanced",
                years: 3,
                description: "Utility-first CSS framework for rapid UI development",
                color: "teal",
            },
            {
                name: "Vue.js",
                level: "Intermediate",
                years: 2,
                description: "Component-based development with Composition API",
                color: "green",
            },
        ],
    },
    {
        name: "Backend Development",
        technologies: [
            {
                name: "Node.js",
                level: "Advanced",
                years: 4,
                description: "Server-side JavaScript with Express and Fastify",
                color: "green",
            },
            {
                name: "Python",
                level: "Advanced",
                years: 5,
                description: "Web development with Django/FastAPI and data analysis",
                color: "orange",
            },
            {
                name: "PostgreSQL",
                level: "Advanced",
                years: 4,
                description: "Relational database design and optimization",
                color: "blue",
            },
            {
                name: "MongoDB",
                level: "Intermediate",
                years: 3,
                description: "NoSQL database for flexible data modeling",
                color: "green",
            },
            {
                name: "Redis",
                level: "Intermediate",
                years: 2,
                description: "Caching and session management",
                color: "orange",
            },
        ],
    },
    {
        name: "DevOps & Tools",
        technologies: [
            {
                name: "Docker",
                level: "Advanced",
                years: 3,
                description: "Containerization and microservices architecture",
                color: "blue",
            },
            {
                name: "AWS",
                level: "Intermediate",
                years: 3,
                description: "Cloud infrastructure and serverless deployment",
                color: "orange",
            },
            {
                name: "Vercel",
                level: "Advanced",
                years: 3,
                description: "Frontend deployment and edge functions",
                color: "blue",
            },
            {
                name: "Git",
                level: "Expert",
                years: 6,
                description: "Version control and collaborative development workflows",
                color: "purple",
            },
        ],
    },
    {
        name: "Testing & Quality",
        technologies: [
            {
                name: "Jest",
                level: "Advanced",
                years: 4,
                description: "Unit and integration testing for JavaScript applications",
                color: "green",
            },
            {
                name: "Cypress",
                level: "Intermediate",
                years: 2,
                description: "End-to-end testing and browser automation",
                color: "green",
            },
            {
                name: "ESLint",
                level: "Advanced",
                years: 4,
                description: "Code quality and consistency enforcement",
                color: "purple",
            },
        ],
    },
]

export function getTechStack(): TechCategory[] {
    return techStack
}

export function getAllTechnologies(): Technology[] {
    return techStack.flatMap((category) => category.technologies)
}
