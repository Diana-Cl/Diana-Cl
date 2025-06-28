import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'
import mathjax3 from 'markdown-it-mathjax3'

// .vitepress/config.js
export default {
  title: "Diana's Blog",
  description: 'My personal notes and articles.',
  base: '/Diana-Cl/', 
  lang: 'fa-IR',
  dir: 'rtl',
  cleanUrls: true,
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: '/Diana-Cl/Diana-Cl/posts/favicon.ico' }]
  ],

  markdown: {
    config: (md) => {
      md.use(footnote)
      md.use(mathjax3)
    }
  },

  themeConfig: {
    logo: '/logo.svg',
    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
    },

    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'All Posts',
        items: [
          { text: 'Google Gemini', link: '/posts/Gemini' },
          { text: 'REvil Ransomware', link: '/posts/REvil' },
          { text: 'Windows Activation', link: '/posts/windows-activation' },
          { text: 'AI Agents', link: '/posts/ai-agents' },
          { text: 'Cloudflare Backend Selector', link: '/posts/cf-backend-selector' },
          { text: 'Stable Diffusion', link: '/posts/Stable-Diffiusion' },
          { text: 'Upgrade PHP on CentOS 7', link: '/posts/Upgrade-PHP-version-on-CentOS-7' }
        ]
      }
    ],
    
    lastUpdated: {
      text: 'Last update:',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    
    editLink: {
      pattern: 'https://github.com/Diana-Cl/Diana-Cl/edit/main/posts/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Diana-Cl/Diana-Cl' },
      { icon: 'telegram', link: 'https://t.me/F_NiREvil' }
    ],

    footer: {
      message: 'Released under the REvil License.',
      copyright: '© 2025 Dìana - All Rights Reserved.'
    }
  }
}
