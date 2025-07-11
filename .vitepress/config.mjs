import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'
import mathjax3 from 'markdown-it-mathjax3'
import attrs from 'markdown-it-attrs'

const base = '/Diana-Cl/'
const siteUrl = `https://Diana-Cl.github.io${base}`

export default defineConfig({
  base: base,
  cleanUrls: true,
  ignoreDeadLinks: true,
  title: "Dìana",
  description: 'My personal notes and articles about technology, security, and AI',
  base: '/Diana-Cl/',
  cleanUrls: true,
  ignoreDeadLinks: true,
  
export default defineConfig({
  base: base,
  cleanUrls: true,
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'icon', href: `${base}favicon.ico` }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100..900&display=swap', rel: 'stylesheet' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/video.js@8.17.4/dist/video-js.min.css' }],
    ['script', { src: 'https://unpkg.com/video.js@8.17.4/dist/video.min.js' }]
  ],

  markdown: {
    config: (md) => {
      md.use(footnote)
      md.use(mathjax3)
      md.use(attrs)
      md.use(tabsMarkdownPlugin)
    },
    lineNumbers: true
  },

  mermaid: {},

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'Dìana',
      description: 'My personal notes and articles about technology, security, and AI',
      themeConfig: {
        nav: [
          { text: '🏠 Home', link: '/' },
          { text: '🔒 Security', link: '/REvil' },
          { text: '🤖 AI', link: '/Gemini' },
          { text: '⚙️ Development', link: '/cf-backend-selector' }
        ],
    
        sidebar: [
          {
            text: '🔒 Security Research',
            collapsed: false,
            items: [
              { text: 'Ransomware Evil', link: '/REvil' },
              { text: 'Windows Activation', link: '/windows-activation' }
            ]
          },
          {
            text: '🤖 AI & Technology',
            collapsed: false,
            items: [
              { text: 'Google Gemini', link: '/Gemini' },
              { text: 'AI Assistants', link: '/ai-agents' },
              { text: 'Stable Diffusion', link: '/Stable-Diffusion' }
            ]
          },
          {
            text: '⚙️ Development',
            collapsed: false,
            items: [
              { text: 'Cloudflare Backend Selector', link: '/cf-backend-selector' },
              { text: 'Upgrade PHP on CentOS 7', link: '/Upgrade-PHP-version-on-CentOS-7' }
            ]
          }
        ],
    
  themeConfig: {
    logo: '/logo-h.svg',
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
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    
        editLink: {
          pattern: 'https://github.com/Diana-Cl/Diana-Cl/edit/main/docs/:path',
          text: 'Edit this page on GitHub'
        },
    
        socialLinks: [
          { icon: 'github', link: 'https://github.com/Diana-Cl/' },
          { icon: 'telegram', link: 'https://t.me/F_NiREvil/6448' }
        ],
    
        footer: {
          message: 'Made with using VitePress',
          copyright: '© 2025 Dìana - Sharing knowledge, one note at a time'
        }
      },

  vite: {
    optimizeDeps: {
      include: ['video.js']
    }
  }
})
