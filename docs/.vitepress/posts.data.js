import { createContentLoader } from 'vitepress'

const base = '/Diana-Cl/';
const EXCERPT_MAX_LENGTH = 150;
const MAX_POSTS_PER_SECTION = 5;
const MAX_TOTAL_POSTS = 15;

function stripHtmlAndTruncate(html, maxLength) {
  if (!html) return '';
  let text = html
    .replace(/<\/?[^>]+(>|$)/g, "")
    .replace(/&ZeroWidthSpace;|&nbsp;/gi, ' ')
    .replace(/\s\s+/g, ' ')
    .trim();
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

function formatDate(raw, lang = 'en') {
  const date = raw ? new Date(raw) : new Date();
  if (isNaN(date.getTime())) return { time: 0, string: 'N/A' };

  const locale = lang === 'fa' ? 'fa-IR' : 'en-US';
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  return {
    time: +date,
    string: date.toLocaleDateString(locale, options)
  };
}

function categorizePost(url) {
  if (url.includes('/wa/')) return 'windows-activation';
  if (url.includes('/topics/')) return 'topics';
  return 'other';
}

function getCategoryIcon(category) {
  const icons = {
    'windows-activation': '🪟',
    'topics': '📚',
    'other': '📄'
  };
  return icons[category] || '📄';
}

function getCategoryTitle(category, lang = 'en') {
  const titles = {
    'windows-activation': lang === 'fa' ? 'فعال‌سازی ویندوز' : 'Windows Activation',
    'topics': lang === 'fa' ? 'موضوعات عمومی' : 'General Topics',
    'other': lang === 'fa' ? 'سایر' : 'Other'
  };
  return titles[category] || (lang === 'fa' ? 'سایر' : 'Other');
}

export default createContentLoader(
  ['wa/*.md', 'topics/*.md', 'en/wa/*.md', 'en/topics/*.md'],
  {
    excerpt: true,
    transform(raw) {
      const posts = raw
        .filter(
          ({ frontmatter, url }) =>
            frontmatter.title &&
            !frontmatter.index &&
            !url.endsWith('index.md')
        )
        .map((page) => processPost(page, base))
        .sort((a, b) => b.date.time - a.date.time);

      return {
        'fa-IR': posts.filter((p) => p.lang === 'fa').slice(0, MAX_TOTAL_POSTS),
        'en-US': posts.filter((p) => p.lang === 'en').slice(0, MAX_TOTAL_POSTS),
      };
    },
  }
);

function processPost(page, base) {
  const lang = page.url.includes('/en/') ? 'en' : 'fa';
  const category = categorizePost(page.url);
  return {
    title: page.frontmatter.title,
    url: `${base}${page.url.replace(/\.md$/, '')}`,
    excerpt: stripHtmlAndTruncate(
      page.frontmatter.description || page.excerpt,
      EXCERPT_MAX_LENGTH
    ),
    date: formatDate(page.frontmatter.date || page.frontmatter.lastUpdated, lang),
    lang,
    category,
    categoryIcon: getCategoryIcon(category),
    categoryTitle: getCategoryTitle(category, lang),
    tags: page.frontmatter.tags || [],
    author: page.frontmatter.author || 'Dìana',
  };
}
