// .vitepress/posts.data.js
import { createContentLoader } from 'vitepress'

const base = '/Diana-Cl/';
const EXCERPT_MAX_LENGTH = 150; // حداکثر طول خلاصه به کاراکتر

function stripHtmlAndTruncate(html, maxLength) {
  if (!html) return '';
  let text = html;
  // 1. حذف تگ‌های HTML
  text = text.replace(/<\/?[^>]+(>|$)/g, "");
  // 2. جایگزینی &ZeroWidthSpace;, &nbsp; و سایر موجودیت‌های فضای خالی با یک فاصله معمولی
  text = text.replace(/&ZeroWidthSpace;/gi, ' ');
  text = text.replace(/&nbsp;/gi, ' ');
  // 3. حذف فاصله‌های اضافی متعدد و trim کردن
  text = text.replace(/\s\s+/g, ' ').trim();

  // 4. برش متن به maxLength و اضافه کردن "..." در صورت نیاز
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
}

export default createContentLoader('posts/*.md', {
  excerpt: true, // به VitePress می‌گوییم خودش خلاصه (شامل HTML) را تولید کند یا محتوای قبل از <!-- more --> را بگیرد
  transform(raw) {
    return raw
      .filter(({ frontmatter }) => frontmatter && frontmatter.title)
      .map(({ url, frontmatter, excerpt: autoExcerpt }) => { // `excerpt` را به `autoExcerpt` تغییر نام دادم برای وضوح
        let finalExcerpt = '';

        if (frontmatter.description) {
          // اگر frontmatter.description وجود دارد، از آن استفاده کن (بعد از تمیز کردن و برش احتمالی)
          finalExcerpt = stripHtmlAndTruncate(frontmatter.description, EXCERPT_MAX_LENGTH);
        } else if (autoExcerpt) {
          // در غیر این صورت، از خلاصه‌ی خودکار تولید شده توسط VitePress استفاده کن
          // (که ممکن است شامل HTML باشد یا کل محتوای پست اگر <!-- more --> نباشد)
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
    string: date.toLocaleDateString('en-US', { // می‌توانید 'fa-IR' را برای تاریخ شمسی امتحان کنید اگر کتابخانه مورد نیاز نصب باشد
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
}
