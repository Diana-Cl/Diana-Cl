import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'
import mathjax3 from 'markdown-it-mathjax3'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dìana",
  description: 'My personal notes and articles',
  base: '/Diana-Cl/',
  cleanUrls: true,
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: '/Diana-Cl/favicon.ico' }]
  ],

  markdown: {
    config: (md) => {
      md.use(footnote)
      md.use(mathjax3)
    }
  },

  themeConfig: {
    logo: '/Diana-Cl/logo.svg',
    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
    },

    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'All notes',
        items: [
          { text: 'Google Gemini', link: '/posts/Gemini' },
          { text: 'Ransomware Evil', link: '/posts/REvil' },
          { text: 'Windows Activation', link: '/posts/windows-activation' },
          { text: 'AI Assistants', link: '/posts/ai-agents' },
          { text: 'Cloudflare Backend Selector', link: '/posts/cf-backend-selector' },
          { text: 'Stable Diffusion', link: '/posts/Stable-Diffusion' },
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
      pattern: 'https://github.com/Diana-Cl/Diana-Cl/edit/main/:path',
      text: 'Edit this page on GitHub'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/NiREvil/vless' },
      { icon: 'telegram', link: 'https://t.me/F_NiREvil/6448' }
    ],
    footer: {
      message: 'Released under the MIT License',
      copyright: '© 2025 REvil - All Rights Reserved'
    }
  }
})
