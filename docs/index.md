---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
index: true
lang: "fa-IR"
dir: "rtl"

hero:
  name: "یادداشت‌های من"
  text: "دیانا"
  tagline: "کاوش در فناوری، امنیت و هر چیزی در این بین."
  actions:
    - theme: brand
      text: شروع با جمنای
      link: /topics/Gemini
    - theme: alt
      text: مشاهده در گیت‌هاب
      link: https://github.com/Diana-Cl/Diana-Cl

features:
  - title: "🔒 تحقیقات امنیتی"
    details: "بررسی‌های عمیق در زمینه تحلیل بدافزار، آسیب‌پذیری‌های امنیتی و اطلاعات تهدید."
  - title: "⚙️ راهنماهای توسعه"
    details: "راهنماهای کاربردی برای پیکربندی سرور، توسعه وب و موارد دیگر."
  - title: "🤖 هوش مصنوعی و فناوری"
    details: "کاوش در جدیدترین‌های هوش مصنوعی، از مدل‌های زبان تا تکنیک‌های دیفیوژن."
---

<script setup>
import { data } from '/.vitepress/posts.data.js'
import { useData } from 'vitepress'
const { lang } = useData()
const posts = data[lang.value] ?? []
</script>

<div class="latest-posts-section">
  <h2 class="section-title">Latest Posts</h2>
  <div class="posts-grid" v-if="posts && posts.length > 0">
    <article v-for="post of posts" :key="post.url" class="post-card">
      <div class="post-content">
        <h3 class="post-title">
          <a :href="post.url" class="post-link">{{ post.title }}</a>
        </h3>
        <p class="post-date"> {{ post.date.string }}</p>
        <p class="post-excerpt" v-if="post.excerpt">{{ post.excerpt }}</p>
        <div class="post-actions">
          <a :href="post.url" class="read-more">Read More →</a>
        </div>
      </div>
    </article>
  </div>
  <div v-else class="no-posts">
    <p>No posts available at the moment.</p>
  </div>
</div>

<style scoped>
.latest-posts-section {
  max-width: 1152px;
  margin: 3rem auto 0;
  padding: 0 24px;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  border-radius: 2px;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.post-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.post-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.post-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand-1);
}

.post-card:hover::before {
  transform: scaleX(1);
}

.post-content {
  padding: 2rem;
}

.post-title {
  margin: 0 0 1rem 0;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.4;
}

.post-link {
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.3s ease;
}

.post-link:hover {
  color: var(--vp-c-brand-1);
}

.post-date {
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.post-excerpt {
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.post-actions {
  display: flex;
  justify-content: flex-end;
}

.read-more {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.read-more:hover {
  background: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand-1);
}

.no-posts {
  text-align: center;
  padding: 3rem;
  color: var(--vp-c-text-2);
}

@media (max-width: 768px) {
  .latest-posts-section {
    padding: 0 16px;
  }

  .posts-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .post-content {
    padding: 1.5rem;
  }

  .section-title {
    font-size: 1.75rem;
  }
}

@media (prefers-color-scheme: dark) {
  .post-card {
    background: var(--vp-c-bg-alt);
  }

  .post-card:hover {
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
  }
}
</style>
