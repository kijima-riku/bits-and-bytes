import type { ReactNode } from "react"
import { Sidebar } from "@/components/sidebar"

export function TwoColumnLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <aside className="lg:col-span-1">
                        <div className="sticky top-12">
                            <Sidebar />
                        </div>
                    </aside>
                    <main className="lg:col-span-2">{children}</main>
                </div>
            </div>
        </div>
    )
}
