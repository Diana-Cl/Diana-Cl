---
layout: home
lang: "en-US"

hero:
  name: "Diana's Blog"
  text: "A Collection of My Notes"
  tagline: Exploring technology, security, and everything in between.
  actions:
    - theme: brand
      text: Get Started with Gemini
      link: /posts/Gemini
    - theme: alt
      text: View on GitHub
      link: https://github.com/Diana-Cl/Diana-Cl

features:
  - title: "Security Research"
    details: "Deep dives into malware analysis, security vulnerabilities, and threat intelligence."
  - title: "Development Guides"
    details: "Practical guides for web development, server configuration, and more."
  - title: "AI & Technology"
    details: "Exploring the latest in artificial intelligence, from language models to diffusion techniques."
---

<script setup>
import { data as posts } from './.vitepress/posts.data.js'
</script>

<div class="vp-doc" style="margin-top: 2rem;">
  <h2>Latest Posts</h2>
  <div class="posts-list">
    <article v-for="post of posts" :key="post.url" class="post-item">
      <h3>
        <a :href="post.url" class="post-link">{{ post.title }}</a>
      </h3>
      <p class="post-date">{{ post.date.string }}</p>
      <p class="post-excerpt" v-if="post.excerpt">{{ post.excerpt }}</p>
    </article>
  </div>
</div>

<style scoped>
.posts-list {
  display: grid;
  gap: 1.5rem;
  margin-top: 1rem;
}

.post-item {
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.post-item:hover {
  border-color: var(--vp-c-brand);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.post-link {
  color: var(--vp-c-brand);
  text-decoration: none;
  font-weight: 600;
}

.post-link:hover {
  text-decoration: underline;
}

.post-date {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  margin: 0.5rem 0;
}

.post-excerpt {
  color: var(--vp-c-text-1);
  margin: 0;
}
</style>
