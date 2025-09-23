'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ThemeToggle } from './theme-toggle'

const navigation = [
  { name: 'about', href: '/' },
  { name: 'articles', href: '/articles' },
  { name: 'projects', href: '/projects' },
  { name: 'stack', href: '/stack' },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <div className="space-y-6">
      <nav className="flex flex-col space-y-1">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              'text-muted-foreground hover:text-foreground transition-all duration-200 text-sm font-medium relative group',
              pathname === item.href && 'text-foreground',
            )}
          >
            <span className="relative z-10">{item.name}</span>
            {pathname === item.href && (
              <div className="absolute inset-0 bg-primary/10 rounded-md -z-0 animate-pulse" />
            )}
            <div className="absolute inset-0 bg-primary/5 rounded-md -z-0 scale-0 group-hover:scale-100 transition-transform duration-200" />
          </Link>
        ))}
      </nav>

      <ThemeToggle />
    </div>
  )
}
