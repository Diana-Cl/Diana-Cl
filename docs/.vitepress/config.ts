import { defineConfig } from 'vitepress';
import footnote from 'markdown-it-footnote';
import mathjax3 from 'markdown-it-mathjax3';
import attrs from 'markdown-it-attrs';
import { mermaid } from 'vitepress-plugin-mermaid';
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs';

const base = '/Diana-Cl/'
const siteUrl = `https://diana-cl.github.io${base}`;

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
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100..900&display=swap',
        rel: 'stylesheet',
      },
    ],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    [
      'link',
      { rel: 'stylesheet', href: 'https://unpkg.com/video.js@8.17.4/dist/video-js.min.css' },
    ],
    ['script', { src: 'https://unpkg.com/video.js@8.17.4/dist/video.min.js' }],
    [
      'style',
      {},
      `
      .video-js {
        width: 100%;
        max-width: 960px;
        height: auto;
        aspect-ratio: 16/9;
      }
    `,
    ],
  ],

  markdown: {
    config: md => {
      md.use(footnote);
      md.use(mathjax3);
      md.use(attrs);
      md.use(tabsMarkdownPlugin);
    },
    lineNumbers: true,
  },

  mermaid: {},

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      dir: 'ltr',
      title: 'Dìana',
      description: 'My personal notes and articles about technology, security, and AI',
      themeConfig: {
        nav: [
          { text: '🏠 Home', link: '/' },
          { text: '🔒 Security', link: '/security/' },
          { text: '🤖 AI', link: '/ai/' },
          { text: '⚙️ Development', link: '/development/' },
          { text: '🪟 Windows Activation', link: '/windows-activation/' },
        ],
        sidebar: {
          '/security/': [
            {
              text: '🔒 Security Research',
              collapsed: true,
              items: [
                { text: 'REvil', link: '/security/REvil' },
                { text: 'Cloudflare Backend Selector', link: '/security/cf-backend-selector' },
              ]
            }
          ],
          '/ai/': [
            {
              text: '🤖 AI & Technology',
              collapsed: false,
              items: [
                { text: 'Google Gemini', link: '/ai/Gemini' },
                { text: 'AI Assistants', link: '/ai/ai-agents' },
                { text: 'Stable Diffusion', link: '/ai/Stable-Diffusion' },
              ]
            }
          ],
          '/development/': [
            {
              text: '⚙️ Development',
              collapsed: true,
              items: [
                { text: 'Upgrade PHP on CentOS 7', link: '/development/Upgrade-PHP-version-on-CentOS-7' },
              ]
            }
          ],
          '/windows-activation/': [
            {
              text: 'Activation Guides',
              collapsed: false,
              items: [
                { text: 'HWID Activation', link: '/windows-activation/' },
                { text: 'KMS Activation', link: '/windows-activation/kms' },
                { text: 'Methods Chart', link: '/windows-activation/chart' },
                { text: 'Download Windows / Office', link: '/windows-activation/genuine-installation-media' },
              ],
            },
            {
              text: 'Activation Methods',
              collapsed: true,
              items: [
                { text: 'HWID Method Details', link: '/windows-activation/hwid' },
                { text: 'Ohook Method Details', link: '/windows-activation/ohook' },
                { text: 'TSforge Method Details', link: '/windows-activation/tsforge' },
                { text: 'KMS38 Method Details', link: '/windows-activation/kms38' },
                { text: 'Online KMS Method Details', link: '/windows-activation/online_kms' },
                { text: 'Change Windows Edition', link: '/windows-activation/change_windows_edition' },
                { text: 'Change Office Edition', link: '/windows-activation/change_office_edition' },
                { text: '$OEM$ Folders', link: '/windows-activation/oem-folder' },
                { text: 'Switches in Command line', link: '/windows-activation/command_line_switches' },
              ],
            },
            {
              text: 'Technical Details',
              collapsed: true,
              items: [
                { text: 'Win 10 After End-Of-Life', link: '/windows-activation/windows10_eol' },
                { text: 'Remove Malware', link: '/windows-activation/remove_malware' },
                { text: 'Clean Install Windows', link: '/windows-activation/clean_install_windows' },
                { text: 'Office License Is Not Genuine', link: '/windows-activation/office-license-is-not-genuine' },
                { text: 'Licensing Servers Issue', link: '/windows-activation/licensing-servers-issue' },
                { text: 'Issues Due To Gaming Spoofers', link: '/windows-activation/issues_due_to_gaming_spoofers' },
                { text: 'Change Edition Issues', link: '/windows-activation/change_edition_issues' },
                { text: 'Evaluation Editions', link: '/windows-activation/evaluation_editions' },
                { text: 'Fix Powershell', link: '/windows-activation/fix_powershell' },
                { text: 'Fix Windows Services', link: '/windows-activation/fix_service' },
                { text: 'Fix WPA Registry', link: '/windows-activation/fix-wpa-registry' },
                { text: 'In-place Repair Upgrade', link: '/windows-activation/in-place_repair_upgrade' },
                { text: 'Office c2r Custom Install', link: '/windows-activation/office_c2r' },
              ],
            },
            {
              text: 'Manual Activation Guides',
              collapsed: true,
              items: [
                { text: 'Manual HWID activation', link: '/windows-activation/manual_hwid_activation' },
                { text: 'Manual Ohook activation', link: '/windows-activation/manual_ohook_activation' },
                { text: 'Manual KMS38 activation', link: '/windows-activation/manual_kms38_activation' },
              ],
            },
            {
              text: 'Support',
              collapsed: true,
              items: [
                { text: 'Troubleshoot', link: '/windows-activation/troubleshoot' },
                { text: 'FAQ', link: '/windows-activation/faq' },
                { text: 'Credits', link: '/windows-activation/credits' },
              ],
            },
          ],
        },
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
    },
    fa: {
      label: 'فارسی',
      lang: 'fa-IR',
      dir: 'rtl',
      title: 'Dìana',
      description: 'یادداشت‌ها و مقالات شخصی من درباره فناوری، امنیت و هوش مصنوعی',
      themeConfig: {
        nav: [
          { text: '🏠 خانه', link: '/fa/' },
          { text: '🔒 امنیت', link: '/fa/security/' },
          { text: '🤖 هوش مصنوعی', link: '/fa/ai/' },
          { text: '⚙️ توسعه', link: '/fa/development/' },
          { text: '🪟 فعال‌سازی ویندوز', link: '/fa/windows-activation/' },
        ],
        sidebar: {
          '/fa/security/': [
            {
              text: '🔒 تحقیقات امنیتی',
              collapsed: true,
              items: [
                { text: 'REvil', link: '/fa/security/REvil' },
                { text: 'انتخابگر بک‌اند کلادفلر', link: '/fa/security/cf-backend-selector' },
              ]
            }
          ],
          '/fa/ai/': [
            {
              text: '🤖 هوش مصنوعی و فناوری',
              collapsed: false,
              items: [
                { text: 'گوگل جمینی', link: '/fa/ai/Gemini' },
                { text: 'دستیارهای هوش مصنوعی', link: '/fa/ai/ai-agents' },
                { text: 'استیبل دیفیوژن', link: '/fa/ai/Stable-Diffusion' },
              ]
            }
          ],
          '/fa/development/': [
            {
              text: '⚙️ توسعه',
              collapsed: true,
              items: [
                { text: 'آپگرید PHP روی CentOS 7', link: '/fa/development/Upgrade-PHP-version-on-CentOS-7' },
              ]
            }
          ],
          '/fa/windows-activation/': [
            {
              text: 'راهنمای فعال‌سازی',
              collapsed: false,
              items: [
                { text: 'فعال‌سازی با روش HWID', link: '/fa/windows-activation/intro' },
                { text: 'فعال‌سازی با روش KMS', link: '/fa/windows-activation/kms' },
                { text: 'مقایسه انواع روش‌ها', link: '/fa/windows-activation/chart' },
                { text: 'دانلود ویندوز / آفیس', link: '/fa/windows-activation/genuine-installation-media' },
              ],
            },
            {
              text: 'روش‌های فعال‌سازی',
              collapsed: true,
              items: [
                { text: 'جزئیات روش HWID', link: '/fa/windows-activation/hwid' },
                { text: 'جزئیات روش Ohook', link: '/fa/windows-activation/ohook' },
                { text: 'جزئیات روش TSforge', link: '/fa/windows-activation/tsforge' },
                { text: 'جزئیات روش KMS38', link: '/fa/windows-activation/kms38' },
                { text: 'جزئیات روش Online KMS', link: '/fa/windows-activation/online_kms' },
                { text: 'تغییر نسخه ویندوز', link: '/fa/windows-activation/change_windows_edition' },
                { text: 'تغییر نسخه آفیس', link: '/fa/windows-activation/change_office_edition' },
                { text: 'پوشه‌های $OEM$', link: '/fa/windows-activation/oem-folder' },
                { text: 'سوئیچ‌ها در خط فرمان', link: '/fa/windows-activation/command_line_switches' },
              ],
            },
            {
              text: 'جزئیات فنی',
              collapsed: true,
              items: [
                { text: 'ویندوز ۱۰ بعد از پایان پشتیبانی', link: '/fa/windows-activation/windows10_eol' },
                { text: 'حذف بدافزارها', link: '/fa/windows-activation/remove_malware' },
                { text: 'نصب تمیز ویندوز', link: '/fa/windows-activation/clean_install_windows' },
                { text: 'لایسنس آفیس اصل نیست', link: '/fa/windows-activation/office-license-is-not-genuine' },
                { text: 'مشکل سرورهای لایسنس', link: '/fa/windows-activation/licensing-servers-issue' },
                { text: 'مشکلات ناشی از اسپوفرهای گیم', link: '/fa/windows-activation/issues_due_to_gaming_spoofers' },
                { text: 'مشکلات تغییر نسخه', link: '/fa/windows-activation/change_edition_issues' },
                { text: 'نسخه‌های ارزیابی', link: '/fa/windows-activation/evaluation_editions' },
                { text: 'رفع مشکل پاورشل', link: '/fa/windows-activation/fix_powershell' },
                { text: 'رفع مشکل سرویس‌های ویندوز', link: '/fa/windows-activation/fix_service' },
                { text: 'رفع مشکل رجیستری WPA', link: '/fa/windows-activation/fix-wpa-registry' },
                { text: 'آپگرید تعمیری در محل', link: '/fa/windows-activation/in-place_repair_upgrade' },
                { text: 'نصب سفارشی Office c2r', link: '/fa/windows-activation/office_c2r' },
              ],
            },
            {
              text: 'راهنمای فعال‌سازی دستی',
              collapsed: true,
              items: [
                { text: 'نصب دستی HWID', link: '/fa/windows-activation/manual_hwid_activation' },
                { text: 'نصب دستی Ohook', link: '/fa/windows-activation/manual_ohook_activation' },
                { text: 'نصب دستی KMS38', link: '/fa/windows-activation/manual_kms38_activation' },
              ],
            },
            {
              text: 'پشتیبانی',
              collapsed: true,
              items: [
                { text: 'گزارش مشکلات', link: '/fa/windows-activation/troubleshoot' },
                { text: 'سوالات متداول', link: '/fa/windows-activation/faq' },
                { text: 'منابع', link: '/fa/windows-activation/credits' },
              ],
            },
          ],
        },
        editLink: {
          pattern: 'https://github.com/Diana-Cl/Diana-Cl/edit/main/docs/:path',
          text: 'این صفحه را در گیت‌هاب ویرایش کنید',
        },
        docFooter: {
          prev: 'صفحه قبلی',
          next: 'صفحه بعدی',
        },
        lastUpdated: {
          text: 'آخرین بروزرسانی',
        },
        logo: '/logo-h.svg',
        search: {
          provider: 'local'
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