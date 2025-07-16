import { createContentLoader } from 'vitepress'

const base = '/Diana-Cl/';
const EXCERPT_MAX_LENGTH = 150;
const MAX_POSTS_PER_SECTION = 3;
const MAX_TOTAL_POSTS = 12;

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
  if (url.includes('/security/')) return 'security';
  if (url.includes('/ai/')) return 'ai';
  if (url.includes('/development/')) return 'development';
  if (url.includes('/windows-activation/')) return 'windows-activation';
  return 'other';
}

function getCategoryIcon(category) {
  const icons = {
    'security': '🔒',
    'ai': '🤖',
    'development': '⚙️',
    'windows-activation': '🪟',
    'other': '📄'
  };
  return icons[category] || '📄';
}

function getCategoryTitle(category, lang = 'en') {
  const titles = {
    'security': lang === 'fa' ? 'امنیت' : 'Security',
    'ai': lang === 'fa' ? 'هوش مصنوعی' : 'AI',
    'development': lang === 'fa' ? 'توسعه' : 'Development',
    'windows-activation': lang === 'fa' ? 'فعال‌سازی ویندوز' : 'Windows Activation',
    'other': lang === 'fa' ? 'سایر' : 'Other'
  };
  return titles[category] || (lang === 'fa' ? 'سایر' : 'Other');
}

export default createContentLoader([
  '{security,ai,development,windows-activation}/*.md',
  'fa/{security,ai,development,windows-activation}/*.md'
], {
  excerpt: true,
  transform(raw) {
    const sortedPosts = raw
      .filter(({ frontmatter }) => frontmatter?.title)
      .map(({ url, frontmatter, excerpt }) => {
        const lang = url.includes('/fa/') ? 'fa' : 'en';
        const category = categorizePost(url);
        
        return {
          title: frontmatter.title,
          url: `${base}${url.startsWith('/') ? url.substring(1) : url}`,
          excerpt: stripHtmlAndTruncate(frontmatter.description || excerpt, EXCERPT_MAX_LENGTH),
          date: formatDate(frontmatter.date, lang),
          lang,
          category,
          categoryIcon: getCategoryIcon(category),
          categoryTitle: getCategoryTitle(category, lang),
          tags: frontmatter.tags || [],
          author: frontmatter.author || 'Dìana'
        };
      })
      .sort((a, b) => b.date.time - a.date.time);

    const postsByCategory = {};
    
    sortedPosts.forEach(post => {
      const key = `${post.category}-${post.lang}`;
      if (!postsByCategory[key]) {
        postsByCategory[key] = [];
      }
      if (postsByCategory[key].length < MAX_POSTS_PER_SECTION) {
        postsByCategory[key].push(post);
      }
    });

    const finalPosts = Object.values(postsByCategory)
      .flat()
      .sort((a, b) => b.date.time - a.date.time)
      .slice(0, MAX_TOTAL_POSTS);

    return {
      posts: finalPosts,
      categories: {
        security: finalPosts.filter(p => p.category === 'security'),
        ai: finalPosts.filter(p => p.category === 'ai'),
        development: finalPosts.filter(p => p.category === 'development'),
        windowsActivation: finalPosts.filter(p => p.category === 'windows-activation')
      },
      byLang: {
        en: finalPosts.filter(p => p.lang === 'en'),
        fa: finalPosts.filter(p => p.lang === 'fa')
      }
    };
  }
});