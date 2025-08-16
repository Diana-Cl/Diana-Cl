// docs/.vitepress/config.ts
import { defineConfig } from "file:///data/data/com.termux/files/home/Diana-Cl/node_modules/vitepress/dist/node/index.js";
import footnote from "file:///data/data/com.termux/files/home/Diana-Cl/node_modules/markdown-it-footnote/index.mjs";
import mathjax3 from "file:///data/data/com.termux/files/home/Diana-Cl/node_modules/markdown-it-mathjax3/index.js";
import attrs from "file:///data/data/com.termux/files/home/Diana-Cl/node_modules/markdown-it-attrs/index.js";
import { tabsMarkdownPlugin } from "file:///data/data/com.termux/files/home/Diana-Cl/node_modules/vitepress-plugin-tabs/dist/index.js";
import { InlineLinkPreviewElementTransform } from "file:///data/data/com.termux/files/home/Diana-Cl/node_modules/@nolebase/vitepress-plugin-inline-link-preview/dist/markdown-it/index.mjs";
var base = "/Diana-Cl/";
var siteUrl = `https://Diana-Cl.github.io${base}`;
var config_default = defineConfig({
  base,
  cleanUrls: true,
  ignoreDeadLinks: true,
  head: [
    ["link", { rel: "icon", href: `${base}favicon.ico` }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100..900&display=swap",
        rel: "stylesheet"
      }
    ],
    ["meta", { name: "theme-color", content: "#5f67ee" }],
    [
      "link",
      { rel: "stylesheet", href: "https://unpkg.com/video.js@8.17.4/dist/video-js.min.css" }
    ],
    ["script", { src: "https://unpkg.com/video.js@8.17.4/dist/video.min.js" }],
    [
      "style",
      {},
      `
      .video-js {
        width: 100%;
        max-width: 960px;
        height: auto;
        aspect-ratio: 16/9;
      }
    `
    ]
  ],
  markdown: {
    config: (md) => {
      md.use(footnote);
      md.use(mathjax3);
      md.use(attrs);
      md.use(tabsMarkdownPlugin);
      md.use(InlineLinkPreviewElementTransform, {
        tag: "NolebaseInlineLinkPreview"
      });
    },
    lineNumbers: true
  },
  mermaid: {},
  locales: {
    root: {
      label: "\u0641\u0627\u0631\u0633\u06CC",
      lang: "fa-IR",
      dir: "rtl",
      title: "",
      description: "",
      themeConfig: {
        logo: "/logo-h.svg",
        nav: [
          { text: "\u{1F3E0} \u062E\u0627\u0646\u0647", link: "/" },
          { text: "\u{1F4DA} \u06CC\u0627\u062F\u062F\u0627\u0634\u062A\u200C\u0647\u0627", link: "/topics/" },
          { text: "\u{1FA9F} \u0641\u0639\u0627\u0644\u200C\u0633\u0627\u0632\u06CC \u0648\u06CC\u0646\u062F\u0648\u0632", link: "/wa/" }
        ],
        sidebar: {
          "/topics/": [
            {
              text: "\u{1F4DA} \u06CC\u0627\u062F\u062F\u0627\u0634\u062A\u200C\u0647\u0627",
              items: [
                { text: "\u06AF\u0648\u06AF\u0644 \u062C\u0645\u0646\u0627\u06CC", link: "/topics/Gemini" },
                { text: "\u067E\u0648\u06A9\u0631 \u2013 \u062A\u06AF\u0632\u0627\u0633 \u0647\u0648\u0644\u062F\u0645", link: "/topics/poker-texas" },
                { text: "\u062F\u0633\u062A\u06CC\u0627\u0631\u0647\u0627\u06CC \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06CC", link: "/topics/ai-agents" },
                { text: "\u062A\u0631\u0645\u0627\u06A9\u0633", link: "/topics/termux" },
                { text: "\u062E\u0648\u0627\u0628 \u0639\u0645\u06CC\u0642 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646\u200C\u0647\u0627", link: "/topics/sleeping-apps" },
                { text: "\u0627\u0633\u062A\u06CC\u0628\u0644 \u062F\u06CC\u0641\u06CC\u0648\u0698\u0646", link: "/topics/Stable-Diffusion" },
                { text: "\u0627\u0645\u067E\u0631\u0627\u062A\u0648\u0631\u06CC \u0633\u0627\u06CC\u0628\u0631\u06CC", link: "/topics/REvil" },
                { text: "\u0627\u0646\u062A\u062E\u0627\u0628\u06AF\u0631 \u0628\u06A9\u200C\u0627\u0646\u062F \u06A9\u0644\u0627\u062F\u0641\u0644\u0631", link: "/topics/cf-backend-selector" },
                { text: "\u0622\u067E\u06AF\u0631\u06CC\u062F PHP \u0631\u0648\u06CC CentOS 7", link: "/topics/Upgrade-PHP-version-on-CentOS-7" }
              ]
            }
          ],
          "/wa/": [
            {
              text: "\u0631\u0627\u0647\u0646\u0645\u0627\u06CC \u0641\u0639\u0627\u0644\u200C\u0633\u0627\u0632\u06CC",
              collapsed: true,
              items: [
                { text: "\u0641\u0639\u0627\u0644\u200C\u0633\u0627\u0632\u06CC \u0628\u0627 \u0631\u0648\u0634 HWID", link: "/wa/" },
                { text: "\u0641\u0639\u0627\u0644\u200C\u0633\u0627\u0632\u06CC \u0628\u0627 \u0631\u0648\u0634 KMS", link: "/wa/kms" },
                { text: "\u0645\u0642\u0627\u06CC\u0633\u0647 \u0627\u0646\u0648\u0627\u0639 \u0631\u0648\u0634\u200C\u0647\u0627", link: "/wa/chart" },
                { text: "\u062F\u0627\u0646\u0644\u0648\u062F \u0648\u06CC\u0646\u062F\u0648\u0632 \u2013 \u0622\u0641\u06CC\u0633", link: "/wa/genuine-installation-media" }
              ]
            },
            {
              text: "\u0631\u0648\u0634\u200C\u0647\u0627\u06CC \u0641\u0639\u0627\u0644\u200C\u0633\u0627\u0632\u06CC",
              collapsed: true,
              items: [
                { text: "\u062C\u0632\u0626\u06CC\u0627\u062A \u0631\u0648\u0634 HWID", link: "/wa/hwid" },
                { text: "\u062C\u0632\u0626\u06CC\u0627\u062A \u0631\u0648\u0634 Ohook", link: "/wa/ohook" },
                { text: "\u062C\u0632\u0626\u06CC\u0627\u062A \u0631\u0648\u0634 TSforge", link: "/wa/tsforge" },
                { text: "\u062C\u0632\u0626\u06CC\u0627\u062A \u0631\u0648\u0634 KMS38", link: "/wa/kms38" },
                { text: "\u062C\u0632\u0626\u06CC\u0627\u062A \u0631\u0648\u0634 Online KMS", link: "/wa/online_kms" },
                { text: "\u062A\u063A\u06CC\u06CC\u0631 \u0646\u0633\u062E\u0647 \u0648\u06CC\u0646\u062F\u0648\u0632", link: "/wa/change_windows_edition" },
                { text: "\u062A\u063A\u06CC\u06CC\u0631 \u0646\u0633\u062E\u0647 \u0622\u0641\u06CC\u0633", link: "/wa/change_office_edition" },
                { text: "\u067E\u0648\u0634\u0647\u200C\u0647\u0627\u06CC $OEM$", link: "/wa/oem-folder" },
                { text: "\u0633\u0648\u0626\u06CC\u0686\u200C\u0647\u0627 \u062F\u0631 \u062E\u0637 \u0641\u0631\u0645\u0627\u0646", link: "/wa/command_line_switches" }
              ]
            },
            {
              text: "\u062C\u0632\u0626\u06CC\u0627\u062A \u0641\u0646\u06CC",
              collapsed: true,
              items: [
                { text: "\u0648\u06CC\u0646\u062F\u0648\u0632 \u06F1\u06F0 \u0628\u0639\u062F \u0627\u0632 \u067E\u0627\u06CC\u0627\u0646 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC", link: "/wa/windows10_eol" },
                { text: "\u062D\u0630\u0641 \u0628\u062F\u0627\u0641\u0632\u0627\u0631\u0647\u0627", link: "/wa/remove_malware" },
                { text: "\u0646\u0635\u0628 \u062A\u0645\u06CC\u0632 \u0648 \u0627\u0635\u0648\u0644\u06CC \u0648\u06CC\u0646\u062F\u0648\u0632", link: "/wa/clean_install_windows" },
                { text: "\u0644\u0627\u06CC\u0633\u0646\u0633 \u0622\u0641\u06CC\u0633 \u0627\u0635\u0644 \u0646\u06CC\u0633\u062A", link: "/wa/office-license-is-not-genuine" },
                { text: "\u0645\u0634\u06A9\u0644 \u0633\u0631\u0648\u0631\u0647\u0627\u06CC \u0644\u0627\u06CC\u0633\u0646\u0633", link: "/wa/licensing-servers-issue" },
                {
                  text: "\u0645\u0634\u06A9\u0644\u0627\u062A \u0646\u0627\u0634\u06CC \u0627\u0632 \u0627\u0633\u067E\u0648\u0641\u0631\u0647\u0627\u06CC \u06AF\u06CC\u0645",
                  link: "/wa/issues_due_to_gaming_spoofers"
                },
                { text: "\u0645\u0634\u06A9\u0644\u0627\u062A \u062A\u063A\u06CC\u06CC\u0631 \u0646\u0633\u062E\u0647", link: "/wa/change_edition_issues" },
                { text: "\u0646\u0633\u062E\u0647\u200C\u0647\u0627\u06CC \u0627\u0631\u0632\u06CC\u0627\u0628\u06CC", link: "/wa/evaluation_editions" },
                { text: "\u0631\u0641\u0639 \u0645\u0634\u06A9\u0644 \u067E\u0627\u0648\u0631\u0634\u0644", link: "/wa/fix_powershell" },
                { text: "\u0631\u0641\u0639 \u0645\u0634\u06A9\u0644 \u0633\u0631\u0648\u06CC\u0633\u200C\u0647\u0627\u06CC \u0648\u06CC\u0646\u062F\u0648\u0632", link: "/wa/fix_service" },
                { text: "\u0631\u0641\u0639 \u0645\u0634\u06A9\u0644 \u0631\u062C\u06CC\u0633\u062A\u0631\u06CC WPA", link: "/wa/fix-wpa-registry" },
                { text: "\u0622\u067E\u06AF\u0631\u06CC\u062F \u062A\u0639\u0645\u06CC\u0631\u06CC \u062F\u0631 \u0645\u062D\u0644", link: "/wa/in-place_repair_upgrade" },
                { text: "\u0646\u0635\u0628 \u0633\u0641\u0627\u0631\u0634\u06CC Office c2r", link: "/wa/office_c2r" }
              ]
            },
            {
              text: "\u0631\u0627\u0647\u0646\u0645\u0627\u06CC \u0641\u0639\u0627\u0644\u200C\u0633\u0627\u0632\u06CC \u062F\u0633\u062A\u06CC",
              collapsed: true,
              items: [
                { text: "\u0646\u0635\u0628 \u062F\u0633\u062A\u06CC HWID", link: "/wa/manual_hwid_activation" },
                { text: "\u0646\u0635\u0628 \u062F\u0633\u062A\u06CC Ohook", link: "/wa/manual_ohook_activation" },
                { text: "\u0646\u0635\u0628 \u062F\u0633\u062A\u06CC KMS38", link: "/wa/manual_kms38_activation" }
              ]
            },
            {
              text: "\u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC",
              collapsed: true,
              items: [
                { text: "\u06AF\u0632\u0627\u0631\u0634 \u0645\u0634\u06A9\u0644\u0627\u062A", link: "/wa/troubleshoot" },
                { text: "\u0633\u0648\u0627\u0644\u0627\u062A \u0645\u062A\u062F\u0627\u0648\u0644", link: "/wa/faq" },
                { text: "\u0645\u0646\u0627\u0628\u0639", link: "/wa/credits" }
              ]
            }
          ]
        },
        editLink: {
          pattern: "https://github.com/Diana-Cl/Diana-Cl/edit/main/docs/:path",
          text: "\u0627\u06CC\u0646 \u0635\u0641\u062D\u0647 \u0631\u0627 \u062F\u0631 \u06AF\u06CC\u062A\u200C\u0647\u0627\u0628 \u0648\u06CC\u0631\u0627\u06CC\u0634 \u06A9\u0646\u06CC\u062F"
        },
        docFooter: { prev: "\u0635\u0641\u062D\u0647 \u0642\u0628\u0644\u06CC", next: "\u0635\u0641\u062D\u0647 \u0628\u0639\u062F\u06CC" },
        lastUpdated: { text: "\u0622\u062E\u0631\u06CC\u0646 \u0628\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC" }
      }
    },
    en: {
      label: "English",
      lang: "en-US",
      dir: "ltr",
      title: "",
      description: "My personal notes and articles about technology, security, and AI",
      themeConfig: {
        logo: "/logo-h.svg",
        nav: [
          { text: "\u{1F3E0} Home", link: "/en/" },
          { text: "\u{1F4DA} Notes", link: "/en/topics/" },
          { text: "\u{1FA9F} Windows Activation", link: "/en/wa/" }
        ],
        sidebar: {
          "/en/topics/": [
            {
              text: "\u{1F4DA} Notes",
              items: [
                { text: "Google Gemini", link: "/en/topics/Gemini" },
                { text: "Poker \u2013 Texas Holdem", link: "/en/topics/poker-texas" },
                { text: "Ai Agents", link: "/en/topics/ai-agents" },
                { text: "Termux", link: "/en/topics/termux" },
                { text: "Sleeping Apps", link: "en/topics/sleeping-app" },
                { text: "Stable Diffusion", link: "/en/topics/Stable-Diffusion" },
                { text: "The Fallen Crown", link: "/en/topics/REvil" },
                { text: "Cloudflare Back-end Selector", link: "/en/topics/cf-backend-selector" },
                { text: "Upgrade PHP On CentOS 7", link: "/en/topics/Upgrade-PHP-version-on-CentOS-7" }
              ]
            }
          ],
          "/en/wa/": [
            {
              text: "Activation Guides",
              collapsed: true,
              items: [
                { text: "HWID Activation", link: "/en/wa/" },
                { text: "KMS Activation", link: "/en/wa/kms" },
                { text: "Methods Chart", link: "/en/wa/chart" },
                { text: "Download Windows / Office", link: "/en/wa/genuine-installation-media" }
              ]
            },
            {
              text: "Activation Methods",
              collapsed: true,
              items: [
                { text: "HWID Method Details", link: "/en/wa/hwid" },
                { text: "Ohook Method Details", link: "/en/wa/ohook" },
                { text: "TSforge Method Details", link: "/en/wa/tsforge" },
                { text: "KMS38 Method Details", link: "/en/wa/kms38" },
                { text: "Online KMS Method Details", link: "/en/wa/online_kms" },
                { text: "Change Windows Edition", link: "/en/wa/change_windows_edition" },
                { text: "Change Office Edition", link: "/en/wa/change_office_edition" },
                { text: " $OEM$ Folders", link: "/en/wa/oem-folder" },
                { text: "Switches in Command line", link: "/en/wa/command_line_switches" }
              ]
            },
            {
              text: "Technical Details",
              collapsed: true,
              items: [
                { text: "Win 10 After End-Of-Life", link: "/en/wa/windows10_eol" },
                { text: "Remove Malware", link: "/en/wa/remove_malware" },
                { text: "Clean Install Windows", link: "/en/wa/clean_install_windows" },
                {
                  text: "Office License Is Not Genuine",
                  link: "/en/wa/office-license-is-not-genuine"
                },
                { text: "Licensing Servers Issue", link: "/en/wa/licensing-servers-issue" },
                {
                  text: "Issues Due To Gaming Spoofers",
                  link: "/en/wa/issues_due_to_gaming_spoofers"
                },
                { text: "Change Edition Issues", link: "/en/wa/change_edition_issues" },
                { text: "Evaluation Editions", link: "/en/wa/evaluation_editions" },
                { text: "Fix Powershell", link: "/en/wa/fix_powershell" },
                { text: "Fix Windows Services", link: "/en/wa/fix_service" },
                { text: "Fix WPA Registry", link: "/en/wa/fix-wpa-registry" },
                { text: "In-place Repair Upgrade", link: "/en/wa/in-place_repair_upgrade" },
                { text: "Office c2r Custom Install", link: "/en/wa/office_c2r" }
              ]
            },
            {
              text: "Manual Activation Guides",
              collapsed: true,
              items: [
                { text: "Manual HWID activation", link: "/en/wa/manual_hwid_activation" },
                { text: "Manual Ohook activation", link: "/en/wa/manual_ohook_activation" },
                { text: "Manual KMS38 activation", link: "/en/wa/manual_kms38_activation" }
              ]
            },
            {
              text: "Support",
              collapsed: true,
              items: [
                { text: "Troubleshoot", link: "/en/wa/troubleshoot" },
                { text: "FAQ", link: "/en/wa/faq" },
                { text: "Credits", link: "/en/wa/credits" }
              ]
            }
          ]
        },
        search: { provider: "local" },
        docFooter: { prev: "Previous page", next: "Next page" },
        lastUpdated: {
          text: "Last updated",
          formatOptions: { dateStyle: "medium", timeStyle: "short" }
        },
        editLink: {
          pattern: "https://github.com/Diana-Cl/Diana-Cl/edit/main/docs/:path",
          text: "Edit this page on GitHub"
        },
        socialLinks: [
          { icon: "github", link: "https://github.com/Diana-Cl/" },
          { icon: "telegram", link: "https://t.me/F_NiREvil/6448" }
        ],
        footer: {
          copyright: "\xA9 2025 REvil \u2014 Sharing knowledge, one note at a time",
          message: "Made with using VitePress"
        }
      }
    }
  },
  vite: {
    optimizeDeps: {
      exclude: [
        "video.js",
        "@nolebase/vitepress-plugin-inline-link-preview/client"
      ]
    },
    ssr: {
      noExternal: [
        /@nolebase\/vitepress-plugin-.*/,
        "@nolebase/ui"
      ]
    }
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9kYXRhL2RhdGEvY29tLnRlcm11eC9maWxlcy9ob21lL0RpYW5hLUNsL2RvY3MvLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2RhdGEvZGF0YS9jb20udGVybXV4L2ZpbGVzL2hvbWUvRGlhbmEtQ2wvZG9jcy8udml0ZXByZXNzL2NvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vZGF0YS9kYXRhL2NvbS50ZXJtdXgvZmlsZXMvaG9tZS9EaWFuYS1DbC9kb2NzLy52aXRlcHJlc3MvY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzJztcbmltcG9ydCBmb290bm90ZSBmcm9tICdtYXJrZG93bi1pdC1mb290bm90ZSc7XG5pbXBvcnQgbWF0aGpheDMgZnJvbSAnbWFya2Rvd24taXQtbWF0aGpheDMnO1xuaW1wb3J0IGF0dHJzIGZyb20gJ21hcmtkb3duLWl0LWF0dHJzJztcbmltcG9ydCB7IG1lcm1haWQgfSBmcm9tICd2aXRlcHJlc3MtcGx1Z2luLW1lcm1haWQnO1xuaW1wb3J0IHsgdGFic01hcmtkb3duUGx1Z2luIH0gZnJvbSAndml0ZXByZXNzLXBsdWdpbi10YWJzJztcbmltcG9ydCB7IElubGluZUxpbmtQcmV2aWV3RWxlbWVudFRyYW5zZm9ybSB9IGZyb20gJ0Bub2xlYmFzZS92aXRlcHJlc3MtcGx1Z2luLWlubGluZS1saW5rLXByZXZpZXcvbWFya2Rvd24taXQnO1xuXG5jb25zdCBiYXNlID0gJy9EaWFuYS1DbC8nO1xuY29uc3Qgc2l0ZVVybCA9IGBodHRwczovL0RpYW5hLUNsLmdpdGh1Yi5pbyR7YmFzZX1gO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBiYXNlOiBiYXNlLFxuICBjbGVhblVybHM6IHRydWUsXG4gIGlnbm9yZURlYWRMaW5rczogdHJ1ZSxcblxuICBoZWFkOiBbXG4gICAgWydsaW5rJywgeyByZWw6ICdpY29uJywgaHJlZjogYCR7YmFzZX1mYXZpY29uLmljb2AgfV0sXG4gICAgWydsaW5rJywgeyByZWw6ICdwcmVjb25uZWN0JywgaHJlZjogJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20nIH1dLFxuICAgIFsnbGluaycsIHsgcmVsOiAncHJlY29ubmVjdCcsIGhyZWY6ICdodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tJywgY3Jvc3NvcmlnaW46ICcnIH1dLFxuICAgIFtcbiAgICAgICdsaW5rJyxcbiAgICAgIHtcbiAgICAgICAgaHJlZjogJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VmF6aXJtYXRuOndnaHRAMTAwLi45MDAmZGlzcGxheT1zd2FwJyxcbiAgICAgICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgICB9LFxuICAgIF0sXG4gICAgWydtZXRhJywgeyBuYW1lOiAndGhlbWUtY29sb3InLCBjb250ZW50OiAnIzVmNjdlZScgfV0sXG4gICAgW1xuICAgICAgJ2xpbmsnLFxuICAgICAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogJ2h0dHBzOi8vdW5wa2cuY29tL3ZpZGVvLmpzQDguMTcuNC9kaXN0L3ZpZGVvLWpzLm1pbi5jc3MnIH0sXG4gICAgXSxcbiAgICBbJ3NjcmlwdCcsIHsgc3JjOiAnaHR0cHM6Ly91bnBrZy5jb20vdmlkZW8uanNAOC4xNy40L2Rpc3QvdmlkZW8ubWluLmpzJyB9XSxcbiAgICBbXG4gICAgICAnc3R5bGUnLFxuICAgICAge30sXG4gICAgICBgXG4gICAgICAudmlkZW8tanMge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA5NjBweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBhc3BlY3QtcmF0aW86IDE2Lzk7XG4gICAgICB9XG4gICAgYCxcbiAgICBdLFxuICBdLFxuXG4gIG1hcmtkb3duOiB7XG4gICAgY29uZmlnOiBtZCA9PiB7XG4gICAgICBtZC51c2UoZm9vdG5vdGUpO1xuICAgICAgbWQudXNlKG1hdGhqYXgzKTtcbiAgICAgIG1kLnVzZShhdHRycyk7XG4gICAgICBtZC51c2UodGFic01hcmtkb3duUGx1Z2luKTtcbiAgICAgIG1kLnVzZShJbmxpbmVMaW5rUHJldmlld0VsZW1lbnRUcmFuc2Zvcm0sIHtcbiAgICAgICAgdGFnOiAnTm9sZWJhc2VJbmxpbmVMaW5rUHJldmlldydcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgbGluZU51bWJlcnM6IHRydWUsXG4gIH0sXG5cbiAgbWVybWFpZDoge30sXG5cbiAgbG9jYWxlczoge1xuICAgIHJvb3Q6IHtcbiAgICAgIGxhYmVsOiAnXHUwNjQxXHUwNjI3XHUwNjMxXHUwNjMzXHUwNkNDJyxcbiAgICAgIGxhbmc6ICdmYS1JUicsXG4gICAgICBkaXI6ICdydGwnLFxuICAgICAgdGl0bGU6ICcnLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdGhlbWVDb25maWc6IHtcbiAgICAgICAgbG9nbzogJy9sb2dvLWguc3ZnJyxcbiAgICAgICAgbmF2OiBbXG4gICAgICAgICAgeyB0ZXh0OiAnXHVEODNDXHVERkUwIFx1MDYyRVx1MDYyN1x1MDY0Nlx1MDY0NycsIGxpbms6ICcvJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1RENEQSBcdTA2Q0NcdTA2MjdcdTA2MkZcdTA2MkZcdTA2MjdcdTA2MzRcdTA2MkFcdTIwMENcdTA2NDdcdTA2MjcnLCBsaW5rOiAnL3RvcGljcy8nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnXHVEODNFXHVERTlGIFx1MDY0MVx1MDYzOVx1MDYyN1x1MDY0NFx1MjAwQ1x1MDYzM1x1MDYyN1x1MDYzMlx1MDZDQyBcdTA2NDhcdTA2Q0NcdTA2NDZcdTA2MkZcdTA2NDhcdTA2MzInLCBsaW5rOiAnL3dhLycgfSxcbiAgICAgICAgXSxcbiAgICAgICAgc2lkZWJhcjoge1xuICAgICAgICAgICcvdG9waWNzLyc6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1x1RDgzRFx1RENEQSBcdTA2Q0NcdTA2MjdcdTA2MkZcdTA2MkZcdTA2MjdcdTA2MzRcdTA2MkFcdTIwMENcdTA2NDdcdTA2MjcnLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1MDZBRlx1MDY0OFx1MDZBRlx1MDY0NCBcdTA2MkNcdTA2NDVcdTA2NDZcdTA2MjdcdTA2Q0MnLCBsaW5rOiAnL3RvcGljcy9HZW1pbmknIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHUwNjdFXHUwNjQ4XHUwNkE5XHUwNjMxIFx1MjAxMyBcdTA2MkFcdTA2QUZcdTA2MzJcdTA2MjdcdTA2MzMgXHUwNjQ3XHUwNjQ4XHUwNjQ0XHUwNjJGXHUwNjQ1JywgbGluazogJy90b3BpY3MvcG9rZXItdGV4YXMnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHUwNjJGXHUwNjMzXHUwNjJBXHUwNkNDXHUwNjI3XHUwNjMxXHUwNjQ3XHUwNjI3XHUwNkNDIFx1MDY0N1x1MDY0OFx1MDYzNCBcdTA2NDVcdTA2MzVcdTA2NDZcdTA2NDhcdTA2MzlcdTA2Q0MnLCBsaW5rOiAnL3RvcGljcy9haS1hZ2VudHMnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHUwNjJBXHUwNjMxXHUwNjQ1XHUwNjI3XHUwNkE5XHUwNjMzJywgbGluazogJy90b3BpY3MvdGVybXV4JyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1MDYyRVx1MDY0OFx1MDYyN1x1MDYyOCBcdTA2MzlcdTA2NDVcdTA2Q0NcdTA2NDIgXHUwNjI3XHUwNjdFXHUwNjQ0XHUwNkNDXHUwNkE5XHUwNkNDXHUwNjM0XHUwNjQ2XHUyMDBDXHUwNjQ3XHUwNjI3JywgbGluazogJy90b3BpY3Mvc2xlZXBpbmctYXBwcycgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTA2MjdcdTA2MzNcdTA2MkFcdTA2Q0NcdTA2MjhcdTA2NDQgXHUwNjJGXHUwNkNDXHUwNjQxXHUwNkNDXHUwNjQ4XHUwNjk4XHUwNjQ2JywgbGluazogJy90b3BpY3MvU3RhYmxlLURpZmZ1c2lvbicgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTA2MjdcdTA2NDVcdTA2N0VcdTA2MzFcdTA2MjdcdTA2MkFcdTA2NDhcdTA2MzFcdTA2Q0MgXHUwNjMzXHUwNjI3XHUwNkNDXHUwNjI4XHUwNjMxXHUwNkNDJywgbGluazogJy90b3BpY3MvUkV2aWwnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHUwNjI3XHUwNjQ2XHUwNjJBXHUwNjJFXHUwNjI3XHUwNjI4XHUwNkFGXHUwNjMxIFx1MDYyOFx1MDZBOVx1MjAwQ1x1MDYyN1x1MDY0Nlx1MDYyRiBcdTA2QTlcdTA2NDRcdTA2MjdcdTA2MkZcdTA2NDFcdTA2NDRcdTA2MzEnLCBsaW5rOiAnL3RvcGljcy9jZi1iYWNrZW5kLXNlbGVjdG9yJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1MDYyMlx1MDY3RVx1MDZBRlx1MDYzMVx1MDZDQ1x1MDYyRiBQSFAgXHUwNjMxXHUwNjQ4XHUwNkNDIENlbnRPUyA3JywgbGluazogJy90b3BpY3MvVXBncmFkZS1QSFAtdmVyc2lvbi1vbi1DZW50T1MtNycgfSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgJy93YS8nOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdcdTA2MzFcdTA2MjdcdTA2NDdcdTA2NDZcdTA2NDVcdTA2MjdcdTA2Q0MgXHUwNjQxXHUwNjM5XHUwNjI3XHUwNjQ0XHUyMDBDXHUwNjMzXHUwNjI3XHUwNjMyXHUwNkNDJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1MDY0MVx1MDYzOVx1MDYyN1x1MDY0NFx1MjAwQ1x1MDYzM1x1MDYyN1x1MDYzMlx1MDZDQyBcdTA2MjhcdTA2MjcgXHUwNjMxXHUwNjQ4XHUwNjM0IEhXSUQnLCBsaW5rOiAnL3dhLycgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTA2NDFcdTA2MzlcdTA2MjdcdTA2NDRcdTIwMENcdTA2MzNcdTA2MjdcdTA2MzJcdTA2Q0MgXHUwNjI4XHUwNjI3IFx1MDYzMVx1MDY0OFx1MDYzNCBLTVMnLCBsaW5rOiAnL3dhL2ttcycgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTA2NDVcdTA2NDJcdTA2MjdcdTA2Q0NcdTA2MzNcdTA2NDcgXHUwNjI3XHUwNjQ2XHUwNjQ4XHUwNjI3XHUwNjM5IFx1MDYzMVx1MDY0OFx1MDYzNFx1MjAwQ1x1MDY0N1x1MDYyNycsIGxpbms6ICcvd2EvY2hhcnQnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHUwNjJGXHUwNjI3XHUwNjQ2XHUwNjQ0XHUwNjQ4XHUwNjJGIFx1MDY0OFx1MDZDQ1x1MDY0Nlx1MDYyRlx1MDY0OFx1MDYzMiBcdTIwMTMgXHUwNjIyXHUwNjQxXHUwNkNDXHUwNjMzJywgbGluazogJy93YS9nZW51aW5lLWluc3RhbGxhdGlvbi1tZWRpYScgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdcdTA2MzFcdTA2NDhcdTA2MzRcdTIwMENcdTA2NDdcdTA2MjdcdTA2Q0MgXHUwNjQxXHUwNjM5XHUwNjI3XHUwNjQ0XHUyMDBDXHUwNjMzXHUwNjI3XHUwNjMyXHUwNkNDJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1MDYyQ1x1MDYzMlx1MDYyNlx1MDZDQ1x1MDYyN1x1MDYyQSBcdTA2MzFcdTA2NDhcdTA2MzQgSFdJRCcsIGxpbms6ICcvd2EvaHdpZCcgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTA2MkNcdTA2MzJcdTA2MjZcdTA2Q0NcdTA2MjdcdTA2MkEgXHUwNjMxXHUwNjQ4XHUwNjM0IE9ob29rJywgbGluazogJy93YS9vaG9vaycgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTA2MkNcdTA2MzJcdTA2MjZcdTA2Q0NcdTA2MjdcdTA2MkEgXHUwNjMxXHUwNjQ4XHUwNjM0IFRTZm9yZ2UnLCBsaW5rOiAnL3dhL3RzZm9yZ2UnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHUwNjJDXHUwNjMyXHUwNjI2XHUwNkNDXHUwNjI3XHUwNjJBIFx1MDYzMVx1MDY0OFx1MDYzNCBLTVMzOCcsIGxpbms6ICcvd2Eva21zMzgnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHUwNjJDXHUwNjMyXHUwNjI2XHUwNkNDXHUwNjI3XHUwNjJBIFx1MDYzMVx1MDY0OFx1MDYzNCBPbmxpbmUgS01TJywgbGluazogJy93YS9vbmxpbmVfa21zJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1MDYyQVx1MDYzQVx1MDZDQ1x1MDZDQ1x1MDYzMSBcdTA2NDZcdTA2MzNcdTA2MkVcdTA2NDcgXHUwNjQ4XHUwNkNDXHUwNjQ2XHUwNjJGXHUwNjQ4XHUwNjMyJywgbGluazogJy93YS9jaGFuZ2Vfd2luZG93c19lZGl0aW9uJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1MDYyQVx1MDYzQVx1MDZDQ1x1MDZDQ1x1MDYzMSBcdTA2NDZcdTA2MzNcdTA2MkVcdTA2NDcgXHUwNjIyXHUwNjQxXHUwNkNDXHUwNjMzJywgbGluazogJy93YS9jaGFuZ2Vfb2ZmaWNlX2VkaXRpb24nIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHUwNjdFXHUwNjQ4XHUwNjM0XHUwNjQ3XHUyMDBDXHUwNjQ3XHUwNjI3XHUwNkNDICRPRU0kJywgbGluazogJy93YS9vZW0tZm9sZGVyJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1MDYzM1x1MDY0OFx1MDYyNlx1MDZDQ1x1MDY4Nlx1MjAwQ1x1MDY0N1x1MDYyNyBcdTA2MkZcdTA2MzEgXHUwNjJFXHUwNjM3IFx1MDY0MVx1MDYzMVx1MDY0NVx1MDYyN1x1MDY0NicsIGxpbms6ICcvd2EvY29tbWFuZF9saW5lX3N3aXRjaGVzJyB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1x1MDYyQ1x1MDYzMlx1MDYyNlx1MDZDQ1x1MDYyN1x1MDYyQSBcdTA2NDFcdTA2NDZcdTA2Q0MnLFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHUwNjQ4XHUwNkNDXHUwNjQ2XHUwNjJGXHUwNjQ4XHUwNjMyIFx1MDZGMVx1MDZGMCBcdTA2MjhcdTA2MzlcdTA2MkYgXHUwNjI3XHUwNjMyIFx1MDY3RVx1MDYyN1x1MDZDQ1x1MDYyN1x1MDY0NiBcdTA2N0VcdTA2MzRcdTA2MkFcdTA2Q0NcdTA2MjhcdTA2MjdcdTA2NDZcdTA2Q0MnLCBsaW5rOiAnL3dhL3dpbmRvd3MxMF9lb2wnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHUwNjJEXHUwNjMwXHUwNjQxIFx1MDYyOFx1MDYyRlx1MDYyN1x1MDY0MVx1MDYzMlx1MDYyN1x1MDYzMVx1MDY0N1x1MDYyNycsIGxpbms6ICcvd2EvcmVtb3ZlX21hbHdhcmUnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHUwNjQ2XHUwNjM1XHUwNjI4IFx1MDYyQVx1MDY0NVx1MDZDQ1x1MDYzMiBcdTA2NDggXHUwNjI3XHUwNjM1XHUwNjQ4XHUwNjQ0XHUwNkNDIFx1MDY0OFx1MDZDQ1x1MDY0Nlx1MDYyRlx1MDY0OFx1MDYzMicsIGxpbms6ICcvd2EvY2xlYW5faW5zdGFsbF93aW5kb3dzJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1MDY0NFx1MDYyN1x1MDZDQ1x1MDYzM1x1MDY0Nlx1MDYzMyBcdTA2MjJcdTA2NDFcdTA2Q0NcdTA2MzMgXHUwNjI3XHUwNjM1XHUwNjQ0IFx1MDY0Nlx1MDZDQ1x1MDYzM1x1MDYyQScsIGxpbms6ICcvd2Evb2ZmaWNlLWxpY2Vuc2UtaXMtbm90LWdlbnVpbmUnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHUwNjQ1XHUwNjM0XHUwNkE5XHUwNjQ0IFx1MDYzM1x1MDYzMVx1MDY0OFx1MDYzMVx1MDY0N1x1MDYyN1x1MDZDQyBcdTA2NDRcdTA2MjdcdTA2Q0NcdTA2MzNcdTA2NDZcdTA2MzMnLCBsaW5rOiAnL3dhL2xpY2Vuc2luZy1zZXJ2ZXJzLWlzc3VlJyB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdcdTA2NDVcdTA2MzRcdTA2QTlcdTA2NDRcdTA2MjdcdTA2MkEgXHUwNjQ2XHUwNjI3XHUwNjM0XHUwNkNDIFx1MDYyN1x1MDYzMiBcdTA2MjdcdTA2MzNcdTA2N0VcdTA2NDhcdTA2NDFcdTA2MzFcdTA2NDdcdTA2MjdcdTA2Q0MgXHUwNkFGXHUwNkNDXHUwNjQ1JyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvd2EvaXNzdWVzX2R1ZV90b19nYW1pbmdfc3Bvb2ZlcnMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHUwNjQ1XHUwNjM0XHUwNkE5XHUwNjQ0XHUwNjI3XHUwNjJBIFx1MDYyQVx1MDYzQVx1MDZDQ1x1MDZDQ1x1MDYzMSBcdTA2NDZcdTA2MzNcdTA2MkVcdTA2NDcnLCBsaW5rOiAnL3dhL2NoYW5nZV9lZGl0aW9uX2lzc3VlcycgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTA2NDZcdTA2MzNcdTA2MkVcdTA2NDdcdTIwMENcdTA2NDdcdTA2MjdcdTA2Q0MgXHUwNjI3XHUwNjMxXHUwNjMyXHUwNkNDXHUwNjI3XHUwNjI4XHUwNkNDJywgbGluazogJy93YS9ldmFsdWF0aW9uX2VkaXRpb25zJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1MDYzMVx1MDY0MVx1MDYzOSBcdTA2NDVcdTA2MzRcdTA2QTlcdTA2NDQgXHUwNjdFXHUwNjI3XHUwNjQ4XHUwNjMxXHUwNjM0XHUwNjQ0JywgbGluazogJy93YS9maXhfcG93ZXJzaGVsbCcgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTA2MzFcdTA2NDFcdTA2MzkgXHUwNjQ1XHUwNjM0XHUwNkE5XHUwNjQ0IFx1MDYzM1x1MDYzMVx1MDY0OFx1MDZDQ1x1MDYzM1x1MjAwQ1x1MDY0N1x1MDYyN1x1MDZDQyBcdTA2NDhcdTA2Q0NcdTA2NDZcdTA2MkZcdTA2NDhcdTA2MzInLCBsaW5rOiAnL3dhL2ZpeF9zZXJ2aWNlJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1MDYzMVx1MDY0MVx1MDYzOSBcdTA2NDVcdTA2MzRcdTA2QTlcdTA2NDQgXHUwNjMxXHUwNjJDXHUwNkNDXHUwNjMzXHUwNjJBXHUwNjMxXHUwNkNDIFdQQScsIGxpbms6ICcvd2EvZml4LXdwYS1yZWdpc3RyeScgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTA2MjJcdTA2N0VcdTA2QUZcdTA2MzFcdTA2Q0NcdTA2MkYgXHUwNjJBXHUwNjM5XHUwNjQ1XHUwNkNDXHUwNjMxXHUwNkNDIFx1MDYyRlx1MDYzMSBcdTA2NDVcdTA2MkRcdTA2NDQnLCBsaW5rOiAnL3dhL2luLXBsYWNlX3JlcGFpcl91cGdyYWRlJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1MDY0Nlx1MDYzNVx1MDYyOCBcdTA2MzNcdTA2NDFcdTA2MjdcdTA2MzFcdTA2MzRcdTA2Q0MgT2ZmaWNlIGMycicsIGxpbms6ICcvd2Evb2ZmaWNlX2MycicgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdcdTA2MzFcdTA2MjdcdTA2NDdcdTA2NDZcdTA2NDVcdTA2MjdcdTA2Q0MgXHUwNjQxXHUwNjM5XHUwNjI3XHUwNjQ0XHUyMDBDXHUwNjMzXHUwNjI3XHUwNjMyXHUwNkNDIFx1MDYyRlx1MDYzM1x1MDYyQVx1MDZDQycsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTA2NDZcdTA2MzVcdTA2MjggXHUwNjJGXHUwNjMzXHUwNjJBXHUwNkNDIEhXSUQnLCBsaW5rOiAnL3dhL21hbnVhbF9od2lkX2FjdGl2YXRpb24nIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHUwNjQ2XHUwNjM1XHUwNjI4IFx1MDYyRlx1MDYzM1x1MDYyQVx1MDZDQyBPaG9vaycsIGxpbms6ICcvd2EvbWFudWFsX29ob29rX2FjdGl2YXRpb24nIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHUwNjQ2XHUwNjM1XHUwNjI4IFx1MDYyRlx1MDYzM1x1MDYyQVx1MDZDQyBLTVMzOCcsIGxpbms6ICcvd2EvbWFudWFsX2ttczM4X2FjdGl2YXRpb24nIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnXHUwNjdFXHUwNjM0XHUwNjJBXHUwNkNDXHUwNjI4XHUwNjI3XHUwNjQ2XHUwNkNDJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1MDZBRlx1MDYzMlx1MDYyN1x1MDYzMVx1MDYzNCBcdTA2NDVcdTA2MzRcdTA2QTlcdTA2NDRcdTA2MjdcdTA2MkEnLCBsaW5rOiAnL3dhL3Ryb3VibGVzaG9vdCcgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTA2MzNcdTA2NDhcdTA2MjdcdTA2NDRcdTA2MjdcdTA2MkEgXHUwNjQ1XHUwNjJBXHUwNjJGXHUwNjI3XHUwNjQ4XHUwNjQ0JywgbGluazogJy93YS9mYXEnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHUwNjQ1XHUwNjQ2XHUwNjI3XHUwNjI4XHUwNjM5JywgbGluazogJy93YS9jcmVkaXRzJyB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBlZGl0TGluazoge1xuICAgICAgICAgIHBhdHRlcm46ICdodHRwczovL2dpdGh1Yi5jb20vRGlhbmEtQ2wvRGlhbmEtQ2wvZWRpdC9tYWluL2RvY3MvOnBhdGgnLFxuICAgICAgICAgIHRleHQ6ICdcdTA2MjdcdTA2Q0NcdTA2NDYgXHUwNjM1XHUwNjQxXHUwNjJEXHUwNjQ3IFx1MDYzMVx1MDYyNyBcdTA2MkZcdTA2MzEgXHUwNkFGXHUwNkNDXHUwNjJBXHUyMDBDXHUwNjQ3XHUwNjI3XHUwNjI4IFx1MDY0OFx1MDZDQ1x1MDYzMVx1MDYyN1x1MDZDQ1x1MDYzNCBcdTA2QTlcdTA2NDZcdTA2Q0NcdTA2MkYnLFxuICAgICAgICB9LFxuICAgICAgICBkb2NGb290ZXI6IHsgcHJldjogJ1x1MDYzNVx1MDY0MVx1MDYyRFx1MDY0NyBcdTA2NDJcdTA2MjhcdTA2NDRcdTA2Q0MnLCBuZXh0OiAnXHUwNjM1XHUwNjQxXHUwNjJEXHUwNjQ3IFx1MDYyOFx1MDYzOVx1MDYyRlx1MDZDQycgfSxcbiAgICAgICAgbGFzdFVwZGF0ZWQ6IHsgdGV4dDogJ1x1MDYyMlx1MDYyRVx1MDYzMVx1MDZDQ1x1MDY0NiBcdTA2MjhcdTA2MzFcdTA2NDhcdTA2MzJcdTA2MzFcdTA2MzNcdTA2MjdcdTA2NDZcdTA2Q0MnIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgZW46IHtcbiAgICAgIGxhYmVsOiAnRW5nbGlzaCcsXG4gICAgICBsYW5nOiAnZW4tVVMnLFxuICAgICAgZGlyOiAnbHRyJyxcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnTXkgcGVyc29uYWwgbm90ZXMgYW5kIGFydGljbGVzIGFib3V0IHRlY2hub2xvZ3ksIHNlY3VyaXR5LCBhbmQgQUknLFxuICAgICAgdGhlbWVDb25maWc6IHtcbiAgICAgICAgbG9nbzogJy9sb2dvLWguc3ZnJyxcbiAgICAgICAgbmF2OiBbXG4gICAgICAgICAgeyB0ZXh0OiAnXHVEODNDXHVERkUwIEhvbWUnLCBsaW5rOiAnL2VuLycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURDREEgTm90ZXMnLCBsaW5rOiAnL2VuL3RvcGljcy8nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnXHVEODNFXHVERTlGIFdpbmRvd3MgQWN0aXZhdGlvbicsIGxpbms6ICcvZW4vd2EvJyB9LFxuICAgICAgICBdLFxuICAgICAgICBzaWRlYmFyOiB7XG4gICAgICAgICAgJy9lbi90b3BpY3MvJzogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnXHVEODNEXHVEQ0RBIE5vdGVzJyxcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdHb29nbGUgR2VtaW5pJywgbGluazogJy9lbi90b3BpY3MvR2VtaW5pJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1Bva2VyIFx1MjAxMyBUZXhhcyBIb2xkZW0nLCBsaW5rOiAnL2VuL3RvcGljcy9wb2tlci10ZXhhcycgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdBaSBBZ2VudHMnLCBsaW5rOiAnL2VuL3RvcGljcy9haS1hZ2VudHMnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnVGVybXV4JywgbGluazogJy9lbi90b3BpY3MvdGVybXV4JyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1NsZWVwaW5nIEFwcHMnLCBsaW5rOiAnZW4vdG9waWNzL3NsZWVwaW5nLWFwcCcgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdTdGFibGUgRGlmZnVzaW9uJywgbGluazogJy9lbi90b3BpY3MvU3RhYmxlLURpZmZ1c2lvbicgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdUaGUgRmFsbGVuIENyb3duJywgbGluazogJy9lbi90b3BpY3MvUkV2aWwnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnQ2xvdWRmbGFyZSBCYWNrLWVuZCBTZWxlY3RvcicsIGxpbms6ICcvZW4vdG9waWNzL2NmLWJhY2tlbmQtc2VsZWN0b3InIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnVXBncmFkZSBQSFAgT24gQ2VudE9TIDcnLCBsaW5rOiAnL2VuL3RvcGljcy9VcGdyYWRlLVBIUC12ZXJzaW9uLW9uLUNlbnRPUy03JyB9LFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICAnL2VuL3dhLyc6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0FjdGl2YXRpb24gR3VpZGVzJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0hXSUQgQWN0aXZhdGlvbicsIGxpbms6ICcvZW4vd2EvJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0tNUyBBY3RpdmF0aW9uJywgbGluazogJy9lbi93YS9rbXMnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnTWV0aG9kcyBDaGFydCcsIGxpbms6ICcvZW4vd2EvY2hhcnQnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnRG93bmxvYWQgV2luZG93cyAvIE9mZmljZScsIGxpbms6ICcvZW4vd2EvZ2VudWluZS1pbnN0YWxsYXRpb24tbWVkaWEnIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnQWN0aXZhdGlvbiBNZXRob2RzJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0hXSUQgTWV0aG9kIERldGFpbHMnLCBsaW5rOiAnL2VuL3dhL2h3aWQnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnT2hvb2sgTWV0aG9kIERldGFpbHMnLCBsaW5rOiAnL2VuL3dhL29ob29rJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RTZm9yZ2UgTWV0aG9kIERldGFpbHMnLCBsaW5rOiAnL2VuL3dhL3RzZm9yZ2UnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnS01TMzggTWV0aG9kIERldGFpbHMnLCBsaW5rOiAnL2VuL3dhL2ttczM4JyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ09ubGluZSBLTVMgTWV0aG9kIERldGFpbHMnLCBsaW5rOiAnL2VuL3dhL29ubGluZV9rbXMnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnQ2hhbmdlIFdpbmRvd3MgRWRpdGlvbicsIGxpbms6ICcvZW4vd2EvY2hhbmdlX3dpbmRvd3NfZWRpdGlvbicgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdDaGFuZ2UgT2ZmaWNlIEVkaXRpb24nLCBsaW5rOiAnL2VuL3dhL2NoYW5nZV9vZmZpY2VfZWRpdGlvbicgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICcgJE9FTSQgRm9sZGVycycsIGxpbms6ICcvZW4vd2Evb2VtLWZvbGRlcicgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdTd2l0Y2hlcyBpbiBDb21tYW5kIGxpbmUnLCBsaW5rOiAnL2VuL3dhL2NvbW1hbmRfbGluZV9zd2l0Y2hlcycgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdUZWNobmljYWwgRGV0YWlscycsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdXaW4gMTAgQWZ0ZXIgRW5kLU9mLUxpZmUnLCBsaW5rOiAnL2VuL3dhL3dpbmRvd3MxMF9lb2wnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnUmVtb3ZlIE1hbHdhcmUnLCBsaW5rOiAnL2VuL3dhL3JlbW92ZV9tYWx3YXJlJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NsZWFuIEluc3RhbGwgV2luZG93cycsIGxpbms6ICcvZW4vd2EvY2xlYW5faW5zdGFsbF93aW5kb3dzJyB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdPZmZpY2UgTGljZW5zZSBJcyBOb3QgR2VudWluZScsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL2VuL3dhL29mZmljZS1saWNlbnNlLWlzLW5vdC1nZW51aW5lJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0xpY2Vuc2luZyBTZXJ2ZXJzIElzc3VlJywgbGluazogJy9lbi93YS9saWNlbnNpbmctc2VydmVycy1pc3N1ZScgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnSXNzdWVzIER1ZSBUbyBHYW1pbmcgU3Bvb2ZlcnMnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9lbi93YS9pc3N1ZXNfZHVlX3RvX2dhbWluZ19zcG9vZmVycycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdDaGFuZ2UgRWRpdGlvbiBJc3N1ZXMnLCBsaW5rOiAnL2VuL3dhL2NoYW5nZV9lZGl0aW9uX2lzc3VlcycgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdFdmFsdWF0aW9uIEVkaXRpb25zJywgbGluazogJy9lbi93YS9ldmFsdWF0aW9uX2VkaXRpb25zJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0ZpeCBQb3dlcnNoZWxsJywgbGluazogJy9lbi93YS9maXhfcG93ZXJzaGVsbCcgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdGaXggV2luZG93cyBTZXJ2aWNlcycsIGxpbms6ICcvZW4vd2EvZml4X3NlcnZpY2UnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnRml4IFdQQSBSZWdpc3RyeScsIGxpbms6ICcvZW4vd2EvZml4LXdwYS1yZWdpc3RyeScgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdJbi1wbGFjZSBSZXBhaXIgVXBncmFkZScsIGxpbms6ICcvZW4vd2EvaW4tcGxhY2VfcmVwYWlyX3VwZ3JhZGUnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnT2ZmaWNlIGMyciBDdXN0b20gSW5zdGFsbCcsIGxpbms6ICcvZW4vd2Evb2ZmaWNlX2MycicgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdNYW51YWwgQWN0aXZhdGlvbiBHdWlkZXMnLFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnTWFudWFsIEhXSUQgYWN0aXZhdGlvbicsIGxpbms6ICcvZW4vd2EvbWFudWFsX2h3aWRfYWN0aXZhdGlvbicgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdNYW51YWwgT2hvb2sgYWN0aXZhdGlvbicsIGxpbms6ICcvZW4vd2EvbWFudWFsX29ob29rX2FjdGl2YXRpb24nIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnTWFudWFsIEtNUzM4IGFjdGl2YXRpb24nLCBsaW5rOiAnL2VuL3dhL21hbnVhbF9rbXMzOF9hY3RpdmF0aW9uJyB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1N1cHBvcnQnLFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnVHJvdWJsZXNob290JywgbGluazogJy9lbi93YS90cm91Ymxlc2hvb3QnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnRkFRJywgbGluazogJy9lbi93YS9mYXEnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnQ3JlZGl0cycsIGxpbms6ICcvZW4vd2EvY3JlZGl0cycgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgc2VhcmNoOiB7IHByb3ZpZGVyOiAnbG9jYWwnIH0sXG4gICAgICAgIGRvY0Zvb3RlcjogeyBwcmV2OiAnUHJldmlvdXMgcGFnZScsIG5leHQ6ICdOZXh0IHBhZ2UnIH0sXG4gICAgICAgIGxhc3RVcGRhdGVkOiB7XG4gICAgICAgICAgdGV4dDogJ0xhc3QgdXBkYXRlZCcsXG4gICAgICAgICAgZm9ybWF0T3B0aW9uczogeyBkYXRlU3R5bGU6ICdtZWRpdW0nLCB0aW1lU3R5bGU6ICdzaG9ydCcgfSxcbiAgICAgICAgfSxcbiAgICAgICAgZWRpdExpbms6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAnaHR0cHM6Ly9naXRodWIuY29tL0RpYW5hLUNsL0RpYW5hLUNsL2VkaXQvbWFpbi9kb2NzLzpwYXRoJyxcbiAgICAgICAgICB0ZXh0OiAnRWRpdCB0aGlzIHBhZ2Ugb24gR2l0SHViJyxcbiAgICAgICAgfSxcbiAgICAgICAgc29jaWFsTGlua3M6IFtcbiAgICAgICAgICB7IGljb246ICdnaXRodWInLCBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL0RpYW5hLUNsLycgfSxcbiAgICAgICAgICB7IGljb246ICd0ZWxlZ3JhbScsIGxpbms6ICdodHRwczovL3QubWUvRl9OaVJFdmlsLzY0NDgnIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgIGNvcHlyaWdodDogJ1x1MDBBOSAyMDI1IFJFdmlsIFx1MjAxNCBTaGFyaW5nIGtub3dsZWRnZSwgb25lIG5vdGUgYXQgYSB0aW1lJyxcbiAgICAgICAgICBtZXNzYWdlOiAnTWFkZSB3aXRoIHVzaW5nIFZpdGVQcmVzcycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbiAgdml0ZToge1xuICAgIG9wdGltaXplRGVwczoge1xuICAgICAgZXhjbHVkZTogW1xuICAgICAgICAndmlkZW8uanMnLFxuICAgICAgICAnQG5vbGViYXNlL3ZpdGVwcmVzcy1wbHVnaW4taW5saW5lLWxpbmstcHJldmlldy9jbGllbnQnLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHNzcjoge1xuICAgICAgbm9FeHRlcm5hbDogW1xuICAgICAgICAvQG5vbGViYXNlXFwvdml0ZXByZXNzLXBsdWdpbi0uKi8sXG4gICAgICAgICdAbm9sZWJhc2UvdWknLFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1WLFNBQVMsb0JBQW9CO0FBQ2hYLE9BQU8sY0FBYztBQUNyQixPQUFPLGNBQWM7QUFDckIsT0FBTyxXQUFXO0FBRWxCLFNBQVMsMEJBQTBCO0FBQ25DLFNBQVMseUNBQXlDO0FBRWxELElBQU0sT0FBTztBQUNiLElBQU0sVUFBVSw2QkFBNkIsSUFBSTtBQUVqRCxJQUFPLGlCQUFRLGFBQWE7QUFBQSxFQUMxQjtBQUFBLEVBQ0EsV0FBVztBQUFBLEVBQ1gsaUJBQWlCO0FBQUEsRUFFakIsTUFBTTtBQUFBLElBQ0osQ0FBQyxRQUFRLEVBQUUsS0FBSyxRQUFRLE1BQU0sR0FBRyxJQUFJLGNBQWMsQ0FBQztBQUFBLElBQ3BELENBQUMsUUFBUSxFQUFFLEtBQUssY0FBYyxNQUFNLCtCQUErQixDQUFDO0FBQUEsSUFDcEUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxjQUFjLE1BQU0sNkJBQTZCLGFBQWEsR0FBRyxDQUFDO0FBQUEsSUFDbEY7QUFBQSxNQUNF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
