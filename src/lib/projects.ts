export interface Project {
    id: string
    title: string
    description: string
    longDescription: string
    technologies: string[]
    githubUrl?: string
    liveUrl?: string
    imageUrl?: string
    featured: boolean
    year: string
}

export const projects: Project[] = [
    {
        id: "ecommerce-platform",
        title: "E-commerce Platform",
        description: "Full-stack e-commerce solution with modern payment integration and admin dashboard.",
        longDescription:
            "A comprehensive e-commerce platform built with Next.js and TypeScript, featuring user authentication, product management, shopping cart functionality, and Stripe payment integration. The admin dashboard provides real-time analytics and inventory management capabilities.",
        technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
        githubUrl: "https://github.com/yourusername/ecommerce-platform",
        liveUrl: "https://ecommerce-demo.vercel.app",
        imageUrl: "/modern-ecommerce-dashboard.png",
        featured: true,
        year: "2024",
    },
    {
        id: "task-management-app",
        title: "Task Management App",
        description: "Collaborative task management application with real-time updates and team features.",
        longDescription:
            "A modern task management application inspired by tools like Notion and Linear. Features include drag-and-drop task organization, real-time collaboration, team workspaces, and advanced filtering capabilities. Built with a focus on performance and user experience.",
        technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "Material-UI"],
        githubUrl: "https://github.com/yourusername/task-manager",
        liveUrl: "https://taskmanager-demo.vercel.app",
        imageUrl: "/task-management-dashboard.png",
        featured: true,
        year: "2023",
    },
    {
        id: "weather-analytics",
        title: "Weather Analytics Dashboard",
        description: "Data visualization dashboard for weather patterns and climate analysis.",
        longDescription:
            "An interactive dashboard for visualizing weather data and climate trends. Features include historical data analysis, predictive modeling, and customizable charts. Integrates with multiple weather APIs to provide comprehensive meteorological insights.",
        technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "PostgreSQL", "Docker"],
        githubUrl: "https://github.com/yourusername/weather-analytics",
        imageUrl: "/weather-data-visualization-dashboard.jpg",
        featured: false,
        year: "2023",
    },
    {
        id: "ai-content-generator",
        title: "AI Content Generator",
        description: "AI-powered content generation tool for marketing and creative writing.",
        longDescription:
            "A sophisticated content generation platform leveraging OpenAI's GPT models. Features include template-based generation, tone adjustment, SEO optimization suggestions, and batch processing capabilities. Designed for content creators and marketing teams.",
        technologies: ["Next.js", "OpenAI API", "Supabase", "Vercel AI SDK", "Tailwind CSS"],
        githubUrl: "https://github.com/yourusername/ai-content-generator",
        liveUrl: "https://ai-content-demo.vercel.app",
        imageUrl: "/ai-content-generation-interface.jpg",
        featured: true,
        year: "2024",
    },
]

export function getProjects(): Project[] {
    return projects.sort((a, b) => Number.parseInt(b.year) - Number.parseInt(a.year))
}

export function getFeaturedProjects(): Project[] {
    return projects
        .filter((project) => project.featured)
        .sort((a, b) => Number.parseInt(b.year) - Number.parseInt(a.year))
}

export function getProjectById(id: string): Project | undefined {
    return projects.find((project) => project.id === id)
}
