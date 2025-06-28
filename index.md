---
# https://vitepress.dev/reference/default-theme-home-pa>
layout: home

hero:
  name: "Diana's Notes"
  text: "A Collection of My Notes"
  tagline: Exploring technology, security, and everything in between.
  actions:
    - theme: brand
      text: Get start with Gemini
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

<div class="vp-doc">
  <h2>Latest Posts</h2>
  <ul>
    <li v-for="post of posts">
      <a :href="post.url">{{ post.title }}</a>
      <br>
      <small>{{ post.date.string }}</small>
    </li>
  </ul>
</div>
