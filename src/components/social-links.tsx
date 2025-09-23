import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/yourusername',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/yourprofile',
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/yourusername',
    icon: Twitter,
  },
  {
    name: 'Email',
    href: 'mailto:your.email@example.com',
    icon: Mail,
  },
]

export function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((link) => {
        const Icon = link.icon
        return (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            aria-label={link.name}
          >
            <Icon className="h-5 w-5" />
          </a>
        )
      })}
    </div>
  )
}
