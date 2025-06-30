import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'
import mathjax3 from 'markdown-it-mathjax3'

export default defineConfig({
  title: "Dìana",
  description: 'My personal notes and articles about technology, security, and AI',
  base: '/Diana-Cl/',
  cleanUrls: true,
  ignoreDeadLinks: true,
  
  head: [
    ['link', { rel: 'icon', href: '/Diana-Cl/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Dìana - Tech Notes Collection' }],
    ['meta', { property: 'og:description', content: 'Exploring technology, security, and AI' }]
  ],

  markdown: {
    config: (md) => {
      md.use(footnote)
      md.use(mathjax3)
    },
    lineNumbers: true
  },

  themeConfig: {
    logo: '/Diana-Cl/logo.svg',
    siteTitle: 'Dìana',
    
    nav: [
      { text: '🏠 Home', link: '/' },
      { text: '🔒 Security', link: '/posts/REvil' },
      { text: '🤖 AI', link: '/posts/Gemini' },
      { text: '⚙️ Development', link: '/posts/cf-backend-selector' }
    ],

    sidebar: [
      {
        text: '🔒 Security Research',
        collapsed: false,
        items: [
          { text: 'REvil Ransomware', link: '/posts/REvil' },
          { text: 'Windows Activation', link: '/posts/windows-activation' }
        ]
      },
      {
        text: '🤖 AI & Technology',
        collapsed: false,
        items: [
          { text: 'Google Gemini', link: '/posts/Gemini' },
          { text: 'AI Assistants', link: '/posts/ai-agents' },
          { text: 'Stable Diffusion', link: '/posts/Stable-Diffusion' }
        ]
      },
      {
        text: '⚙️ Development',
        collapsed: false,
        items: [
          { text: 'Cloudflare Backend Selector', link: '/posts/cf-backend-selector' },
          { text: 'Upgrade PHP on CentOS 7', link: '/posts/Upgrade-PHP-version-on-CentOS-7' }
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
    },

    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    editLink: {
      pattern: 'https://github.com/Diana-Cl/Diana-Cl/edit/main/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Diana-Cl/Diana-Cl' },
      { icon: 'telegram', link: 'https://t.me/F_NiREvil/6448' }
    ],

    footer: {
      message: 'Made with 🩶 using VitePress',
      copyright: '© 2025 Diana - Sharing knowledge, one note at a time'
    }
  }
})
