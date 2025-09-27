import type React from 'react'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Suspense } from 'react'
import { ScrollProgress } from '@/components/scroll-progress'
import { FloatingElements } from '@/components/floating-elements'
import { CursorFollower } from '@/components/cursor-follower'
import { StructuredData } from '@/components/structured-data'
import { Sidebar } from '@/components/sidebar' // ← 追加
import { generateSEO } from '@/lib/seo'
import {
  generateWebsiteStructuredData,
  generatePersonStructuredData,
} from '@/lib/structured-data'
import './globals.css'

export const metadata: Metadata = generateSEO()

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <StructuredData data={generateWebsiteStructuredData()} />
        <StructuredData data={generatePersonStructuredData()} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//linkedin.com" />
        <link rel="dns-prefetch" href="//twitter.com" />
      </head>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <ScrollProgress />
        <FloatingElements />
        <CursorFollower />
        <div className="min-h-screen bg-background">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <aside className="lg:col-span-1">
                <div className="sticky top-12">
                  <Sidebar />
                </div>
              </aside>
              <main className="lg:col-span-2">
                <Suspense fallback={null}>{children}</Suspense>
              </main>
            </div>
          </div>
        </div>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
