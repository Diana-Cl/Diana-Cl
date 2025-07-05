// .vitepress/posts.data.js
import { createContentLoader } from 'vitepress'

const base = '/Diana-Cl/';
const EXCERPT_MAX_LENGTH = 150;

function stripHtmlAndTruncate(html, maxLength) {
  if (!html) return '';
  let text = html;
  text = text.replace(/<\/?[^>]+(>|$)/g, "");
  text = text.replace(/&ZeroWidthSpace;/gi, ' ');
  text = text.replace(/&nbsp;/gi, ' ');
  text = text.replace(/\s\s+/g, ' ').trim();

  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
}

export default createContentLoader('posts/*.md', {
  excerpt: true, 
  transform(raw) {
    return raw
      .filter(({ frontmatter }) => frontmatter && frontmatter.title)
      .map(({ url, frontmatter, excerpt: autoExcerpt }) => { 
        let finalExcerpt = '';

        if (frontmatter.description) {
          finalExcerpt = stripHtmlAndTruncate(frontmatter.description, EXCERPT_MAX_LENGTH);
        } else if (autoExcerpt) {
          finalExcerpt = stripHtmlAndTruncate(autoExcerpt, EXCERPT_MAX_LENGTH);
        }

        return {
          title: frontmatter.title || 'Untitled',
          url: `${base}${url.startsWith('/') ? url.substring(1) : url}`,
          excerpt: finalExcerpt,
          date: formatDate(frontmatter.date || frontmatter.data || new Date())
        };
      })
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
