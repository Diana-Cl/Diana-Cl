// .vitepress/posts.data.js
import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/*.md', {
  excerpt: true,
  transform(raw) {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title || 'Untitled',
        url,
        excerpt: excerpt || frontmatter.description || '',
        date: formatDate(frontmatter.date || new Date())
      }))
      .sort((a, b) => b.date.time - a.date.time)
  }
})

function formatDate(raw) {
  const date = new Date(raw)
  return {
    time: +date,
    string: date.toLocaleDateString('fa-IR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
}
