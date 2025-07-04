// .vitepress/posts.data.js
import { createContentLoader } from 'vitepress'

// .vitepress/posts.data.js
import { createContentLoader } from 'vitepress'

// به صورت ایده‌آل باید از config اصلی مقدار base رو بخونیم
// اما فعلا برای سادگی، مستقیما از رشته استفاده می‌کنیم چون مقدارش رو میدونیم
const base = '/Diana-Cl/';

function stripHtml(html) {
  if (!html) return '';
  // این regex ساده تگ‌های HTML را حذف می‌کند.
  return html.replace(/<\/?[^>]+(>|$)/g, "");
}

export default createContentLoader('posts/*.md', {
  // excerpt: true, // اگر خودمان excerpt را پردازش می‌کنیم، شاید بهتر باشد این را false کنیم و به frontmatter.description یا محتوای اولیه اتکا کنیم
  // یا اینکه خروجی excerpt پیش‌فرض را بگیریم و تمیز کنیم. فعلا با true باقی می‌ماند.
  excerpt: true,
  transform(raw) {
    return raw
      .filter(({ frontmatter }) => frontmatter && frontmatter.title) // فیلتر کردن پست‌های معتبر
      .map(({ url, frontmatter, excerpt }) => {
        let cleanExcerpt = '';
        if (excerpt) { // اگر excerpt توسط createContentLoader با HTML تولید شده
          cleanExcerpt = stripHtml(excerpt);
        } else if (frontmatter.description) { // در غیر این صورت از description استفاده کن
          cleanExcerpt = frontmatter.description;
        }
        // اگر هنوز خالی است، می‌توانیم چند کلمه اول محتوا را بگیریم (پیچیده‌تر)

        return {
          title: frontmatter.title || 'Untitled',
          // اینجا base رو به url اضافه می‌کنیم
          url: `${base}${url.startsWith('/') ? url.substring(1) : url}`,
          excerpt: cleanExcerpt, // استفاده از خلاصه پاک شده
          date: formatDate(frontmatter.date || frontmatter.data || new Date()) // اضافه کردن fallback برای فیلد data
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
