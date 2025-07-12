import { createContentLoader } from 'vitepress'

const base = '/Diana-Cl/';
const EXCERPT_MAX_LENGTH = 150;

function stripHtmlAndTruncate(html, maxLength) {
  if (!html) return '';
  let text = html
    .replace(/<\/?[^>]+(>|$)/g, "")
    .replace(/&ZeroWidthSpace;|&nbsp;/gi, ' ')
    .replace(/\s\s+/g, ' ')
    .trim();
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

function formatDate(raw) {
  const date = raw ? new Date(raw) : new Date();
  if (isNaN(date.getTime())) return { time: 0, string: 'N/A' };
  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  };
}

export default createContentLoader('/*.md', {
  excerpt: true,
  transform(raw) {
    return raw
      .filter(({ frontmatter }) => frontmatter?.title)
      .map(({ url, frontmatter, excerpt }) => {

        const lang = 'en';
        return {
          title: frontmatter.title,
          url: `${base}${url.startsWith('/') ? url.substring(1) : url}`,
          excerpt: stripHtmlAndTruncate(frontmatter.description || excerpt, EXCERPT_MAX_LENGTH),
          date: formatDate(frontmatter.date),
          lang
        };
      })
      .sort((a, b) => b.date.time - a.date.time);
  }
});
