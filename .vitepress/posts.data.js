// .vitepress/posts.data.js
import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/*.md', {
  excerpt: true,
  transform(raw) {
    return raw
      .filter(({ frontmatter }) => frontmatter && frontmatter.title) // فیلتر کردن پست‌های معتبر
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title || 'Untitled',
        url,
        excerpt: excerpt || frontmatter.description || '',
        date: formatDate(frontmatter.date || frontmatter.data || new Date()) // اضافه کردن fallback برای فیلد data
      }))
      .sort((a, b) => b.date.time - a.date.time)
  }
})

function formatDate(raw) {
  const date = new Date(raw)
  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
}
