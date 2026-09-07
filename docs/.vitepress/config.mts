import { defineConfig } from 'vitepress';
import footnote from 'markdown-it-footnote';
import mathjax3 from 'markdown-it-mathjax3';
import attrs from 'markdown-it-attrs';
import { withMermaid } from 'vitepress-plugin-mermaid';

const base = '/Diana-Cl/';

export default withMermaid(defineConfig({
  base: base,
  cleanUrls: true,
  ignoreDeadLinks: true,

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
    config: (md) => {
      md.use(footnote);
      md.use(mathjax3);
      md.use(attrs);
    },
    lineNumbers: true,
  },

  mermaid: {
    theme: 'default',
  },

  themeConfig: {
    logo: '/logo-h.svg',
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Diana-Cl/' },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l-.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/></svg>'
        },
        link: 'https://t.me/NiREvil_GP',
        ariaLabel: 'Telegram'
      }
    ],
  },

  locales: {
    root: {
      label: 'فارسی',
      lang: 'fa-IR',
      dir: 'rtl',
      title: 'Diana',
      description: 'یادداشت‌های شخصی درباره تکنولوژی و امنیت',
      themeConfig: {
        returnToTopLabel: 'بازگشت به بالا',
        sidebarMenuLabel: 'منوی جانبی',
        darkModeSwitchLabel: 'تغییر تم',
        langMenuLabel: 'تغییر زبان',
        outline: { level: [2, 3], label: 'در این صفحه' },
        docFooter: { prev: 'صفحه قبلی', next: 'صفحه بعدی' },
        lastUpdated: {
          text: 'آخرین بروزرسانی',
          formatOptions: { dateStyle: 'medium', timeStyle: 'short' }
        },
        editLink: {
          pattern: 'https://github.com/Diana-Cl/Diana-Cl/edit/main/docs/:path',
          text: 'این صفحه را در گیت‌هاب ویرایش کنید',
        },
        nav: [
          { text: '🏠 خانه', link: '/' },
          { text: '📚 یادداشت‌ها', link: '/topics/' },
          { text: '🪟 فعال‌سازی ویندوز', link: '/wa/' },
        ],
        sidebar: {
          '/topics/': [
            {
              text: '📚 یادداشت‌ها',
              items: [
                { text: 'آرامش قبل از بحران', link: '/topics/crisis' },
                { text: 'گوگل جمنای', link: '/topics/Gemini' },
                { text: 'آموزش Markdown', link: '/topics/markdown' },
                { text: 'راه‌اندازی وورکر zizifn', link: '/topics/zizifn' },
                { text: 'پوکر – تگزاس هولدم', link: '/topics/poker-texas' },
                { text: 'ابزار‌های هوش مصنوعی', link: '/topics/ai' },
                { text: 'تفاوت معماری پردازنده‌ها', link: '/topics/cpu-abi-android' },
                { text: 'ترموکس', link: '/topics/termux' },
                { text: 'اینترنت زمان قطعی برق', link: '/topics/iran-core' },
                { text: 'خواب عمیق اپلیکیشن‌ها', link: '/topics/sleeping-apps' },
                { text: 'امپراتوری سایبری', link: '/topics/REvil' },
                { text: 'نکوباکس اندروید', link: '/topics/nekobox' },
                { text: 'Surface VS DELL', link: '/topics/surface-vs-dell' },
                { text: 'توربوتل', link: '/topics/turbotel' },
                { text: 'کرمان', link: '/topics/kerman' },
                { text: 'انتخابگر بک‌اند کلادفلر', link: '/topics/cf-backend-selector' },
                { text: 'آپگرید PHP روی CentOS 7', link: '/topics/Upgrade-PHP-version-on-CentOS-7' },
              ]
            }
          ],
          '/wa/': [
            {
              text: 'راهنمای فعال‌سازی',
              collapsed: true,
              items: [
                { text: 'فعال‌سازی با روش HWID', link: '/wa/' },
                { text: 'فعال‌سازی با روش KMS', link: '/wa/kms' },
                { text: 'مقایسه انواع روش‌ها', link: '/wa/chart' },
                { text: 'دانلود ویندوز – آفیس', link: '/wa/genuine-installation-media' },
              ],
            },
            {
              text: 'روش‌های فعال‌سازی',
              collapsed: true,
              items: [
                { text: 'جزئیات روش HWID', link: '/wa/hwid' },
                { text: 'جزئیات روش Ohook', link: '/wa/ohook' },
                { text: 'جزئیات روش TSforge', link: '/wa/tsforge' },
                { text: 'جزئیات روش KMS38', link: '/wa/kms38' },
                { text: 'جزئیات روش Online KMS', link: '/wa/online_kms' },
                { text: 'تغییر نسخه ویندوز', link: '/wa/change_windows_edition' },
                { text: 'تغییر نسخه آفیس', link: '/wa/change_office_edition' },
                { text: 'پوشه‌های $OEM$', link: '/wa/oem-folder' },
                { text: 'سوئیچ‌ها در خط فرمان', link: '/wa/command_line_switches' },
              ],
            },
            {
              text: 'جزئیات فنی',
              collapsed: true,
              items: [
                { text: 'ویندوز ۱۰ بعد از پایان پشتیبانی', link: '/wa/windows10_eol' },
                { text: 'حذف بدافزارها', link: '/wa/remove_malware' },
                { text: 'نصب تمیز و اصولی ویندوز', link: '/wa/clean_install_windows' },
                { text: 'لایسنس آفیس اصل نیست', link: '/wa/office-license-is-not-genuine' },
                { text: 'مشکل سرورهای لایسنس', link: '/wa/licensing-servers-issue' },
                { text: 'مشکلات ناشی از اسپوفرهای گیم', link: '/wa/issues_due_to_gaming_spoofers' },
                { text: 'مشکلات تغییر نسخه', link: '/wa/change_edition_issues' },
                { text: 'نسخه‌های ارزیابی', link: '/wa/evaluation_editions' },
                { text: 'رفع مشکل پاورشل', link: '/wa/fix_powershell' },
                { text: 'رفع مشکل سرویس‌های ویندوز', link: '/wa/fix_service' },
                { text: 'رفع مشکل رجیستری WPA', link: '/wa/fix-wpa-registry' },
                { text: 'آپگرید تعمیری در محل', link: '/wa/in-place_repair_upgrade' },
                { text: 'نصب سفارشی Office c2r', link: '/wa/office_c2r' },
              ],
            },
            {
              text: 'راهنمای فعال‌سازی دستی',
              collapsed: true,
              items: [
                { text: 'نصب دستی HWID', link: '/wa/manual_hwid_activation' },
                { text: 'نصب دستی Ohook', link: '/wa/manual_ohook_activation' },
                { text: 'نصب دستی KMS38', link: '/wa/manual_kms38_activation' },
              ],
            },
            {
              text: 'پشتیبانی',
              collapsed: true,
              items: [
                { text: 'گزارش مشکلات', link: '/wa/troubleshoot' },
                { text: 'سوالات متداول', link: '/wa/faq' },
                { text: 'منابع', link: '/wa/credits' },
              ],
            },
          ],
        },
      },
    },

    en: {
      label: 'English',
      lang: 'en-US',
      dir: 'ltr',
      title: 'Diana',
      description: 'My personal notes and articles about technology, security, and AI',
      themeConfig: {
        returnToTopLabel: 'Return to top',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Appearance',
        langMenuLabel: 'Change language',
        outline: { level: [2, 3], label: 'On this page' },
        docFooter: { prev: 'Previous page', next: 'Next page' },
        lastUpdated: {
          text: 'Last updated',
          formatOptions: { dateStyle: 'medium', timeStyle: 'short' },
        },
        editLink: {
          pattern: 'https://github.com/Diana-Cl/Diana-Cl/edit/main/docs/:path',
          text: 'Edit this page on GitHub',
        },
        nav: [
          { text: '🏠 Home', link: '/en/' },
          { text: '📚 Notes', link: '/en/topics/' },
          { text: '🪟 Windows Activation', link: '/en/wa/' },
        ],
        sidebar: {
          '/en/topics/': [
            {
              text: '📚 Notes',
              items: [
                { text: 'Google Gemini', link: '/en/topics/Gemini' },
                { text: 'Poker – Texas Holdem', link: '/en/topics/poker-texas' },
                { text: 'Markdown', link: '/en/topics/markdown' },
                { text: 'Serverless runtime', link: '/en/topics/zizifn' },
                { text: 'AI Tools', link: '/en/topics/ai' },
                { text: 'Processor Architecture', link: '/en/topics/cpu-abi-android' },
                { text: 'Termux', link: '/en/topics/termux' },
                { text: 'Iran Core', link: '/en/topics/iran-core' },
                { text: 'Sleeping Apps', link: '/en/topics/sleeping-apps' },
                { text: 'The Fallen Crown', link: '/en/topics/REvil' },
                { text: 'Exclave vs Nekobox', link: '/en/topics/nekobox' },
                { text: 'Upgrade PHP On CentOS 7', link: '/en/topics/Upgrade-PHP-version-on-CentOS-7' },
                { text: 'Cloudflare Back-end Selector', link: '/en/topics/cf-backend-selector' },
              ]
            }
          ],
          '/en/wa/': [
            {
              text: 'Activation Guides',
              collapsed: true,
              items: [
                { text: 'HWID Activation', link: '/en/wa/' },
                { text: 'KMS Activation', link: '/en/wa/kms' },
                { text: 'Methods Chart', link: '/en/wa/chart' },
                { text: 'Download Windows / Office', link: '/en/wa/genuine-installation-media' },
              ],
            },
            {
              text: 'Activation Methods',
              collapsed: true,
              items: [
                { text: 'HWID Method Details', link: '/en/wa/hwid' },
                { text: 'Ohook Method Details', link: '/en/wa/ohook' },
                { text: 'TSforge Method Details', link: '/en/wa/tsforge' },
                { text: 'KMS38 Method Details', link: '/en/wa/kms38' },
                { text: 'Online KMS Method Details', link: '/en/wa/online_kms' },
                { text: 'Change Windows Edition', link: '/en/wa/change_windows_edition' },
                { text: 'Change Office Edition', link: '/en/wa/change_office_edition' },
                { text: ' $OEM$ Folders', link: '/en/wa/oem-folder' },
                { text: 'Switches in Command line', link: '/en/wa/command_line_switches' },
              ],
            },
            {
              text: 'Technical Details',
              collapsed: true,
              items: [
                { text: 'Win 10 After End-Of-Life', link: '/en/wa/windows10_eol' },
                { text: 'Remove Malware', link: '/en/wa/remove_malware' },
                { text: 'Clean Install Windows', link: '/en/wa/clean_install_windows' },
                { text: 'Office License Is Not Genuine', link: '/en/wa/office-license-is-not-genuine' },
                { text: 'Licensing Servers Issue', link: '/en/wa/licensing-servers-issue' },
                { text: 'Issues Due To Gaming Spoofers', link: '/en/wa/issues_due_to_gaming_spoofers' },
                { text: 'Change Edition Issues', link: '/en/wa/change_edition_issues' },
                { text: 'Evaluation Editions', link: '/en/wa/evaluation_editions' },
                { text: 'Fix Powershell', link: '/en/wa/fix_powershell' },
                { text: 'Fix Windows Services', link: '/en/wa/fix_service' },
                { text: 'Fix WPA Registry', link: '/en/wa/fix-wpa-registry' },
                { text: 'In-place Repair Upgrade', link: '/en/wa/in-place_repair_upgrade' },
                { text: 'Office c2r Custom Install', link: '/en/wa/office_c2r' },
              ],
            },
            {
              text: 'Manual Activation Guides',
              collapsed: true,
              items: [
                { text: 'Manual HWID activation', link: '/en/wa/manual_hwid_activation' },
                { text: 'Manual Ohook activation', link: '/en/wa/manual_ohook_activation' },
                { text: 'Manual KMS38 activation', link: '/en/wa/manual_kms38_activation' },
              ],
            },
            {
              text: 'Support',
              collapsed: true,
              items: [
                { text: 'Troubleshoot', link: '/en/wa/troubleshoot' },
                { text: 'FAQ', link: '/en/wa/faq' },
                { text: 'Credits', link: '/en/wa/credits' },
              ],
            },
          ],
        },
      },
    },
  },

  vite: {
    optimizeDeps: {
      include: ['mermaid'],
      exclude: [
        'video.js',
        '@nolebase/vitepress-plugin-inline-link-preview/client',
      ],
    },
    ssr: {
      noExternal: [
        /@nolebase\/vitepress-plugin-.*/,
        '@nolebase/ui',
      ],
    },
  },
}));
