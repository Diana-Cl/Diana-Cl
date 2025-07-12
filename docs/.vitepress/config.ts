import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'
import mathjax3 from 'markdown-it-mathjax3'
import attrs from 'markdown-it-attrs'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

const base = '/Diana-Cl/'

export default defineConfig({
  base: base,
  cleanUrls: true,
  ignoreDeadLinks: true,
  title: "Dìana",
  description: 'My personal notes and articles about technology, security, and AI',

  head: [
    ['link', { rel: 'icon', href: `${base}favicon.ico` }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100..900&display=swap', rel: 'stylesheet' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/video.js@8.17.4/dist/video-js.min.css' }],
    ['script', { src: 'https://unpkg.com/video.js@8.17.4/dist/video.min.js' }],
    ['style', {}, `
      .video-js {
        width: 100%;
        max-width: 960px;
        height: auto;
        aspect-ratio: 16/9;
      }
    `]
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
      lang: 'fa-IR',
      title: 'Dìana',
      description: 'My personal notes and articles about technology, security, and AI',
      themeConfig: {
        nav: [
          { text: '🏠 Home', link: '/' },
          { text: '🔒 Security', link: '/REvil' },
          { text: '🤖 AI', link: '/Gemini' },
          { text: '⚙️ Development', link: '/en/' }
        ],
        sidebar: [
          {
            text: '🔒 Security Research',
            collapsed: false,
            items: [
              { text: 'Ransomware Evil', link: '/REvil' },
              { text: 'Instant Activation AEG', link: '/en/' },
              { text: 'Cloudflare Backend Selector', link: '/cf-backend-selector' }
            ]
          },
          {
            text: '🤖 AI & Technology',
            collapsed: false,
            items: [
              { text: 'Google Gemini', link: '/Gemini' },
              { text: 'AI Assistants', link: '/ai-agents' },
              { text: 'Stable Diffusion', link: '/Stable-Diffusion' },
              { text: 'Upgrade PHP on CentOS 7', link: '/Upgrade-PHP-version-on-CentOS-7' }
            ]
          },
          {
            text: '⚙️ Development',
            collapsed: true,
            items: [
              { text: 'Windiws Activation — HWID Method', link: '/en/' },
              { text: 'Windows Activation — KMS Method', link: '/en/kms' },
              { text: 'Methods Chart', link: '/en/chart' },
              { text: 'TSforge', link: '/en/tsforge' },
              { text: 'KMS38', link: '/en/kms38' },
              { text: 'Online KMS', link: '/en/online_kms' },
              { text: 'Remove Malware', link: '/en/remove_malware' },
              { text: 'Clean Install Windows', link: '/en/clean_install_windows' },
              { text: 'Office c2r Custom Install', link: '/en/office_c2r' },
              { text: 'Fix WPA Registry', link: '/en/fix-wpa-registry' },
              { text: '$OEM$ Folders', link: '/en/oem-folder' },
              { text: 'Switches in Command line', link: '/en/command_line_switches' },
              { text: 'Evaluation Editions', link: '/en/evaluation_editions' },
              { text: 'Manual HWID activation', link: '/en/manual_hwid_activation' },
              { text: 'FAQ', link: '/en/faq' }
            ]
          }
        ],
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
          copyright: '© 2025 Dìana — Sharing knowledge, one note at a time',
          message: 'Made with using VitePress'
        }
      }
    }
  },

  vite: {
    optimizeDeps: {
      include: ['video.js']
    }
  }
})
