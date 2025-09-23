import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'

const ROOT = process.cwd()
const POSTS_DIR = path.join(ROOT, 'posts')

function getArticleMarkdown(slug: string): string | undefined {
  const full = path.join(POSTS_DIR, `${slug}.md`)
  if (!fs.existsSync(full)) return undefined
  return fs.readFileSync(full, 'utf-8')
}

export async function getArticleHtml(
  slug: string,
): Promise<string | undefined> {
  const md = getArticleMarkdown(slug)
  if (!md) return undefined

  const { content } = matter(md)

  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content)

  return String(file)
}
