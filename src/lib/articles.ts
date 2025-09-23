import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

export type Article = {
  slug: string
  title: string
  description: string
  publishedAt: string
  readingTime: string
  tags: string[]
}

type Frontmatter = {
  title?: string
  description?: string
  date?: string
  tags?: string[]
}

const ROOT = process.cwd()
const POSTS_DIR = path.join(ROOT, 'posts')
const ALLOWED_EXTS = ['.md']

function getMarkdownFiles(dir: string = POSTS_DIR): string[] {
  if (!fs.existsSync(dir)) return []
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const files: string[] = []
  for (const e of entries) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) continue
    if (e.isFile() && ALLOWED_EXTS.includes(path.extname(e.name).toLowerCase()))
      files.push(p)
  }
  return files
}

function filepathToSlug(fp: string): string {
  const ext = path.extname(fp)
  return path.basename(fp, ext)
}

function isFrontmatter(x: unknown): x is Frontmatter {
  if (typeof x !== 'object' || x === null) return false
  const o = x as Record<string, unknown>
  const okTitle = !('title' in o) || typeof o.title === 'string'
  const okDesc = !('description' in o) || typeof o.description === 'string'
  const okDate = !('date' in o) || typeof o.date === 'string'
  const okTags =
    !('tags' in o) ||
    (Array.isArray(o.tags) && o.tags.every((t) => typeof t === 'string'))
  return okTitle && okDesc && okDate && okTags
}

function readingTime(text: string, wpm = 220): string {
  const words = text.trim().split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.round(words / wpm))
  return `${minutes} min read`
}

export function getArticles(): Article[] {
  const files = getMarkdownFiles()
  const list: Article[] = files.map((fp) => {
    const raw = fs.readFileSync(fp, 'utf-8')
    const { data, content } = matter(raw)
    const fm = isFrontmatter(data) ? data : {}
    const slug = filepathToSlug(fp)
    const title = fm.title ?? slug
    const description = fm.description ?? ''
    const publishedAt = fm.date ?? new Date().toISOString()
    const tags = fm.tags ?? []
    return {
      slug,
      title,
      description,
      publishedAt,
      tags,
      readingTime: readingTime(content),
    }
  })
  return list.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  )
}

export function getArticleBySlug(slug: string): Article | undefined {
  const full = path.join(POSTS_DIR, `${slug}.md`)
  if (!fs.existsSync(full)) return undefined
  const raw = fs.readFileSync(full, 'utf-8')
  const { data, content } = matter(raw)
  const fm = isFrontmatter(data) ? data : {}
  const title = fm.title ?? slug
  const description = fm.description ?? ''
  const publishedAt = fm.date ?? new Date().toISOString()
  const tags = fm.tags ?? []
  return {
    slug,
    title,
    description,
    publishedAt,
    tags,
    readingTime: readingTime(content),
  }
}
