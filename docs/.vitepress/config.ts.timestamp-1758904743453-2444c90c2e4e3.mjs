// docs/.vitepress/config.ts
import { defineConfig } from "file:///data/data/com.termux/files/home/Diana-Cl/node_modules/vitepress/dist/node/index.js";
import footnote from "file:///data/data/com.termux/files/home/Diana-Cl/node_modules/markdown-it-footnote/index.mjs";
import mathjax3 from "file:///data/data/com.termux/files/home/Diana-Cl/node_modules/markdown-it-mathjax3/index.js";
import attrs from "file:///data/data/com.termux/files/home/Diana-Cl/node_modules/markdown-it-attrs/index.js";
import { tabsMarkdownPlugin } from "file:///data/data/com.termux/files/home/Diana-Cl/node_modules/vitepress-plugin-tabs/dist/node/index.js";
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
                { text: "\u062A\u0641\u0627\u0648\u062A \u0645\u0639\u0645\u0627\u0631\u06CC \u067E\u0631\u062F\u0627\u0632\u0646\u062F\u0647\u200C\u0647\u0627", link: "/topics/cpu-abi-android" },
                { text: "\u062A\u0631\u0645\u0648\u06A9\u0633", link: "/topics/termux" },
                { text: "\u0627\u06CC\u0646\u062A\u0631\u0646\u062A \u0632\u0645\u0627\u0646 \u0642\u0637\u0639\u06CC \u0628\u0631\u0642", link: "/topics/iran-core" },
                { text: "\u062E\u0648\u0627\u0628 \u0639\u0645\u06CC\u0642 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646\u200C\u0647\u0627", link: "/topics/sleeping-apps" },
                { text: "\u0627\u0633\u062A\u06CC\u0628\u0644 \u062F\u06CC\u0641\u06CC\u0648\u0698\u0646", link: "/topics/Stable-Diffusion" },
                { text: "\u0627\u0645\u067E\u0631\u0627\u062A\u0648\u0631\u06CC \u0633\u0627\u06CC\u0628\u0631\u06CC", link: "/topics/REvil" },
                { text: "\u0646\u06A9\u0648\u0628\u0627\u06A9\u0633 \u0627\u0646\u062F\u0631\u0648\u06CC\u062F", link: "/topics/nekobox" },
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
                { text: "Processor Architecture", link: "/en/topics/cpu-abi-android" },
                { text: "Termux", link: "/en/topics/termux" },
                { text: "Iran Core", link: "/en/topics/iran-core" },
                { text: "Sleeping Apps", link: "en/topics/sleeping-app" },
                { text: "Stable Diffusion", link: "/en/topics/Stable-Diffusion" },
                { text: "The Fallen Crown", link: "/en/topics/REvil" },
                { text: "Nekobox for Android", link: "/en/topics/nekobox" },
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9kYXRhL2RhdGEvY29tLnRlcm11eC9maWxlcy9ob21lL0RpYW5hLUNsL2RvY3MvLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2RhdGEvZGF0YS9jb20udGVybXV4L2ZpbGVzL2hvbWUvRGlhbmEtQ2wvZG9jcy8udml0ZXByZXNzL2NvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vZGF0YS9kYXRhL2NvbS50ZXJtdXgvZmlsZXMvaG9tZS9EaWFuYS1DbC9kb2NzLy52aXRlcHJlc3MvY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzJztcbmltcG9ydCBmb290bm90ZSBmcm9tICdtYXJrZG93bi1pdC1mb290bm90ZSc7XG5pbXBvcnQgbWF0aGpheDMgZnJvbSAnbWFya2Rvd24taXQtbWF0aGpheDMnO1xuaW1wb3J0IGF0dHJzIGZyb20gJ21hcmtkb3duLWl0LWF0dHJzJztcbmltcG9ydCB7IG1lcm1haWQgfSBmcm9tICd2aXRlcHJlc3MtcGx1Z2luLW1lcm1haWQnO1xuaW1wb3J0IHsgdGFic01hcmtkb3duUGx1Z2luIH0gZnJvbSAndml0ZXByZXNzLXBsdWdpbi10YWJzJztcbmltcG9ydCB7IElubGluZUxpbmtQcmV2aWV3RWxlbWVudFRyYW5zZm9ybSB9IGZyb20gJ0Bub2xlYmFzZS92aXRlcHJlc3MtcGx1Z2luLWlubGluZS1saW5rLXByZXZpZXcvbWFya2Rvd24taXQnO1xuXG5jb25zdCBiYXNlID0gJy9EaWFuYS1DbC8nO1xuY29uc3Qgc2l0ZVVybCA9IGBodHRwczovL0RpYW5hLUNsLmdpdGh1Yi5pbyR7YmFzZX1gO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBiYXNlOiBiYXNlLFxuICBjbGVhblVybHM6IHRydWUsXG4gIGlnbm9yZURlYWRMaW5rczogdHJ1ZSxcblxuICBoZWFkOiBbXG4gICAgWydsaW5rJywgeyByZWw6ICdpY29uJywgaHJlZjogYCR7YmFzZX1mYXZpY29uLmljb2AgfV0sXG4gICAgWydsaW5rJywgeyByZWw6ICdwcmVjb25uZWN0JywgaHJlZjogJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20nIH1dLFxuICAgIFsnbGluaycsIHsgcmVsOiAncHJlY29ubmVjdCcsIGhyZWY6ICdodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tJywgY3Jvc3NvcmlnaW46ICcnIH1dLFxuICAgIFtcbiAgICAgICdsaW5rJyxcbiAgICAgIHtcbiAgICAgICAgaHJlZjogJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VmF6aXJtYXRuOndnaHRAMTAwLi45MDAmZGlzcGxheT1zd2FwJyxcbiAgICAgICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgICB9LFxuICAgIF0sXG4gICAgWydtZXRhJywgeyBuYW1lOiAndGhlbWUtY29sb3InLCBjb250ZW50OiAnIzVmNjdlZScgfV0sXG4gICAgW1xuICAgICAgJ2xpbmsnLFxuICAgICAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogJ2h0dHBzOi8vdW5wa2cuY29tL3ZpZGVvLmpzQDguMTcuNC9kaXN0L3ZpZGVvLWpzLm1pbi5jc3MnIH0sXG4gICAgXSxcbiAgICBbJ3NjcmlwdCcsIHsgc3JjOiAnaHR0cHM6Ly91bnBrZy5jb20vdmlkZW8uanNAOC4xNy40L2Rpc3QvdmlkZW8ubWluLmpzJyB9XSxcbiAgICBbXG4gICAgICAnc3R5bGUnLFxuICAgICAge30sXG4gICAgICBgXG4gICAgICAudmlkZW8tanMge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA5NjBweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBhc3BlY3QtcmF0aW86IDE2Lzk7XG4gICAgICB9XG4gICAgYCxcbiAgICBdLFxuICBdLFxuXG4gIG1hcmtkb3duOiB7XG4gICAgY29uZmlnOiBtZCA9PiB7XG4gICAgICBtZC51c2UoZm9vdG5vdGUpO1xuICAgICAgbWQudXNlKG1hdGhqYXgzKTtcbiAgICAgIG1kLnVzZShhdHRycyk7XG4gICAgICBtZC51c2UodGFic01hcmtkb3duUGx1Z2luKTtcbiAgICAgIG1kLnVzZShJbmxpbmVMaW5rUHJldmlld0VsZW1lbnRUcmFuc2Zvcm0sIHtcbiAgICAgICAgdGFnOiAnTm9sZWJhc2VJbmxpbmVMaW5rUHJldmlldydcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgbGluZU51bWJlcnM6IHRydWUsXG4gIH0sXG5cbiAgbWVybWFpZDoge30sXG5cbiAgbG9jYWxlczoge1xuICAgIHJvb3Q6IHtcbiAgICAgIGxhYmVsOiAnXHUwNjQxXHUwNjI3XHUwNjMxXHUwNjMzXHUwNkNDJyxcbiAgICAgIGxhbmc6ICdmYS1JUicsXG4gICAgICBkaXI6ICdydGwnLFxuICAgICAgdGl0bGU6ICcnLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdGhlbWVDb25maWc6IHtcbiAgICAgICAgbG9nbzogJy9sb2dvLWguc3ZnJyxcbiAgICAgICAgbmF2OiBbXG4gICAgICAgICAgeyB0ZXh0OiAnXHVEODNDXHVERkUwIFx1MDYyRVx1MDYyN1x1MDY0Nlx1MDY0NycsIGxpbms6ICcvJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1RENEQSBcdTA2Q0NcdTA2MjdcdTA2MkZcdTA2MkZcdTA2MjdcdTA2MzRcdTA2MkFcdTIwMENcdTA2NDdcdTA2MjcnLCBsaW5rOiAnL3RvcGljcy8nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnXHVEODNFXHVERTlGIFx1MDY0MVx1MDYzOVx1MDYyN1x1MDY0NFx1MjAwQ1x1MDYzM1x1MDYyN1x1MDYzMlx1MDZDQyBcdTA2NDhcdTA2Q0NcdTA2NDZcdTA2MkZcdTA2NDhcdTA2MzInLCBsaW5rOiAnL3dhLycgfSxcbiAgICAgICAgXSxcbiAgICAgICAgc2lkZWJhcjoge1xuICAgICAgICAgICcvdG9waWNzLyc6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1x1RDgzRFx1RENEQSBcdTA2Q0NcdTA2MjdcdTA2MkZcdTA2MkZcdTA2MjdcdTA2MzRcdTA2MkFcdTIwMENcdTA2NDdcdTA2MjcnLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1MDZBRlx1MDY0OFx1MDZBRlx1MDY0NCBcdTA2MkNcdTA2NDVcdTA2NDZcdTA2MjdcdTA2Q0MnLCBsaW5rOiAnL3RvcGljcy9HZW1pbmknIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHUwNjdFXHUwNjQ4XHUwNkE5XHUwNjMxIFx1MjAxMyBcdTA2MkFcdTA2QUZcdTA2MzJcdTA2MjdcdTA2MzMgXHUwNjQ3XHUwNjQ4XHUwNjQ0XHUwNjJGXHUwNjQ1JywgbGluazogJy90b3BpY3MvcG9rZXItdGV4YXMnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHUwNjJGXHUwNjMzXHUwNjJBXHUwNkNDXHUwNjI3XHUwNjMxXHUwNjQ3XHUwNjI3XHUwNkNDIFx1MDY0N1x1MDY0OFx1MDYzNCBcdTA2NDVcdTA2MzVcdTA2NDZcdTA2NDhcdTA2MzlcdTA2Q0MnLCBsaW5rOiAnL3RvcGljcy9haS1hZ2VudHMnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHUwNjJBXHUwNjQxXHUwNjI3XHUwNjQ4XHUwNjJBIFx1MDY0NVx1MDYzOVx1MDY0NVx1MDYyN1x1MDYzMVx1MDZDQyBcdTA2N0VcdTA2MzFcdTA2MkZcdTA2MjdcdTA2MzJcdTA2NDZcdTA2MkZcdTA2NDdcdTIwMENcdTA2NDdcdTA2MjcnLCBsaW5rOiAnL3RvcGljcy9jcHUtYWJpLWFuZHJvaWQnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHUwNjJBXHUwNjMxXHUwNjQ1XHUwNjQ4XHUwNkE5XHUwNjMzJywgbGluazogJy90b3BpY3MvdGVybXV4JyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1MDYyN1x1MDZDQ1x1MDY0Nlx1MDYyQVx1MDYzMVx1MDY0Nlx1MDYyQSBcdTA2MzJcdTA2NDVcdTA2MjdcdTA2NDYgXHUwNjQyXHUwNjM3XHUwNjM5XHUwNkNDIFx1MDYyOFx1MDYzMVx1MDY0MicsIGxpbms6ICcvdG9waWNzL2lyYW4tY29yZScgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTA2MkVcdTA2NDhcdTA2MjdcdTA2MjggXHUwNjM5XHUwNjQ1XHUwNkNDXHUwNjQyIFx1MDYyN1x1MDY3RVx1MDY0NFx1MDZDQ1x1MDZBOVx1MDZDQ1x1MDYzNFx1MDY0Nlx1MjAwQ1x1MDY0N1x1MDYyNycsIGxpbms6ICcvdG9waWNzL3NsZWVwaW5nLWFwcHMnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHUwNjI3XHUwNjMzXHUwNjJBXHUwNkNDXHUwNjI4XHUwNjQ0IFx1MDYyRlx1MDZDQ1x1MDY0MVx1MDZDQ1x1MDY0OFx1MDY5OFx1MDY0NicsIGxpbms6ICcvdG9waWNzL1N0YWJsZS1EaWZmdXNpb24nIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHUwNjI3XHUwNjQ1XHUwNjdFXHUwNjMxXHUwNjI3XHUwNjJBXHUwNjQ4XHUwNjMxXHUwNkNDIFx1MDYzM1x1MDYyN1x1MDZDQ1x1MDYyOFx1MDYzMVx1MDZDQycsIGxpbms6ICcvdG9waWNzL1JFdmlsJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1MDY0Nlx1MDZBOVx1MDY0OFx1MDYyOFx1MDYyN1x1MDZBOVx1MDYzMyBcdTA2MjdcdTA2NDZcdTA2MkZcdTA2MzFcdTA2NDhcdTA2Q0NcdTA2MkYnLCBsaW5rOiAnL3RvcGljcy9uZWtvYm94JyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1MDYyN1x1MDY0Nlx1MDYyQVx1MDYyRVx1MDYyN1x1MDYyOFx1MDZBRlx1MDYzMSBcdTA2MjhcdTA2QTlcdTIwMENcdTA2MjdcdTA2NDZcdTA2MkYgXHUwNkE5XHUwNjQ0XHUwNjI3XHUwNjJGXHUwNjQxXHUwNjQ0XHUwNjMxJywgbGluazogJy90b3BpY3MvY2YtYmFja2VuZC1zZWxlY3RvcicgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTA2MjJcdTA2N0VcdTA2QUZcdTA2MzFcdTA2Q0NcdTA2MkYgUEhQIFx1MDYzMVx1MDY0OFx1MDZDQyBDZW50T1MgNycsIGxpbms6ICcvdG9waWNzL1VwZ3JhZGUtUEhQLXZlcnNpb24tb24tQ2VudE9TLTcnIH0sXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgICcvd2EvJzogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnXHUwNjMxXHUwNjI3XHUwNjQ3XHUwNjQ2XHUwNjQ1XHUwNjI3XHUwNkNDIFx1MDY0MVx1MDYzOVx1MDYyN1x1MDY0NFx1MjAwQ1x1MDYzM1x1MDYyN1x1MDYzMlx1MDZDQycsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTA2NDFcdTA2MzlcdTA2MjdcdTA2NDRcdTIwMENcdTA2MzNcdTA2MjdcdTA2MzJcdTA2Q0MgXHUwNjI4XHUwNjI3IFx1MDYzMVx1MDY0OFx1MDYzNCBIV0lEJywgbGluazogJy93YS8nIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHUwNjQxXHUwNjM5XHUwNjI3XHUwNjQ0XHUyMDBDXHUwNjMzXHUwNjI3XHUwNjMyXHUwNkNDIFx1MDYyOFx1MDYyNyBcdTA2MzFcdTA2NDhcdTA2MzQgS01TJywgbGluazogJy93YS9rbXMnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHUwNjQ1XHUwNjQyXHUwNjI3XHUwNkNDXHUwNjMzXHUwNjQ3IFx1MDYyN1x1MDY0Nlx1MDY0OFx1MDYyN1x1MDYzOSBcdTA2MzFcdTA2NDhcdTA2MzRcdTIwMENcdTA2NDdcdTA2MjcnLCBsaW5rOiAnL3dhL2NoYXJ0JyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1MDYyRlx1MDYyN1x1MDY0Nlx1MDY0NFx1MDY0OFx1MDYyRiBcdTA2NDhcdTA2Q0NcdTA2NDZcdTA2MkZcdTA2NDhcdTA2MzIgXHUyMDEzIFx1MDYyMlx1MDY0MVx1MDZDQ1x1MDYzMycsIGxpbms6ICcvd2EvZ2VudWluZS1pbnN0YWxsYXRpb24tbWVkaWEnIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnXHUwNjMxXHUwNjQ4XHUwNjM0XHUyMDBDXHUwNjQ3XHUwNjI3XHUwNkNDIFx1MDY0MVx1MDYzOVx1MDYyN1x1MDY0NFx1MjAwQ1x1MDYzM1x1MDYyN1x1MDYzMlx1MDZDQycsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTA2MkNcdTA2MzJcdTA2MjZcdTA2Q0NcdTA2MjdcdTA2MkEgXHUwNjMxXHUwNjQ4XHUwNjM0IEhXSUQnLCBsaW5rOiAnL3dhL2h3aWQnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHUwNjJDXHUwNjMyXHUwNjI2XHUwNkNDXHUwNjI3XHUwNjJBIFx1MDYzMVx1MDY0OFx1MDYzNCBPaG9vaycsIGxpbms6ICcvd2Evb2hvb2snIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHUwNjJDXHUwNjMyXHUwNjI2XHUwNkNDXHUwNjI3XHUwNjJBIFx1MDYzMVx1MDY0OFx1MDYzNCBUU2ZvcmdlJywgbGluazogJy93YS90c2ZvcmdlJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1MDYyQ1x1MDYzMlx1MDYyNlx1MDZDQ1x1MDYyN1x1MDYyQSBcdTA2MzFcdTA2NDhcdTA2MzQgS01TMzgnLCBsaW5rOiAnL3dhL2ttczM4JyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1MDYyQ1x1MDYzMlx1MDYyNlx1MDZDQ1x1MDYyN1x1MDYyQSBcdTA2MzFcdTA2NDhcdTA2MzQgT25saW5lIEtNUycsIGxpbms6ICcvd2Evb25saW5lX2ttcycgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTA2MkFcdTA2M0FcdTA2Q0NcdTA2Q0NcdTA2MzEgXHUwNjQ2XHUwNjMzXHUwNjJFXHUwNjQ3IFx1MDY0OFx1MDZDQ1x1MDY0Nlx1MDYyRlx1MDY0OFx1MDYzMicsIGxpbms6ICcvd2EvY2hhbmdlX3dpbmRvd3NfZWRpdGlvbicgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTA2MkFcdTA2M0FcdTA2Q0NcdTA2Q0NcdTA2MzEgXHUwNjQ2XHUwNjMzXHUwNjJFXHUwNjQ3IFx1MDYyMlx1MDY0MVx1MDZDQ1x1MDYzMycsIGxpbms6ICcvd2EvY2hhbmdlX29mZmljZV9lZGl0aW9uJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1MDY3RVx1MDY0OFx1MDYzNFx1MDY0N1x1MjAwQ1x1MDY0N1x1MDYyN1x1MDZDQyAkT0VNJCcsIGxpbms6ICcvd2Evb2VtLWZvbGRlcicgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTA2MzNcdTA2NDhcdTA2MjZcdTA2Q0NcdTA2ODZcdTIwMENcdTA2NDdcdTA2MjcgXHUwNjJGXHUwNjMxIFx1MDYyRVx1MDYzNyBcdTA2NDFcdTA2MzFcdTA2NDVcdTA2MjdcdTA2NDYnLCBsaW5rOiAnL3dhL2NvbW1hbmRfbGluZV9zd2l0Y2hlcycgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdcdTA2MkNcdTA2MzJcdTA2MjZcdTA2Q0NcdTA2MjdcdTA2MkEgXHUwNjQxXHUwNjQ2XHUwNkNDJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1MDY0OFx1MDZDQ1x1MDY0Nlx1MDYyRlx1MDY0OFx1MDYzMiBcdTA2RjFcdTA2RjAgXHUwNjI4XHUwNjM5XHUwNjJGIFx1MDYyN1x1MDYzMiBcdTA2N0VcdTA2MjdcdTA2Q0NcdTA2MjdcdTA2NDYgXHUwNjdFXHUwNjM0XHUwNjJBXHUwNkNDXHUwNjI4XHUwNjI3XHUwNjQ2XHUwNkNDJywgbGluazogJy93YS93aW5kb3dzMTBfZW9sJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1MDYyRFx1MDYzMFx1MDY0MSBcdTA2MjhcdTA2MkZcdTA2MjdcdTA2NDFcdTA2MzJcdTA2MjdcdTA2MzFcdTA2NDdcdTA2MjcnLCBsaW5rOiAnL3dhL3JlbW92ZV9tYWx3YXJlJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1MDY0Nlx1MDYzNVx1MDYyOCBcdTA2MkFcdTA2NDVcdTA2Q0NcdTA2MzIgXHUwNjQ4IFx1MDYyN1x1MDYzNVx1MDY0OFx1MDY0NFx1MDZDQyBcdTA2NDhcdTA2Q0NcdTA2NDZcdTA2MkZcdTA2NDhcdTA2MzInLCBsaW5rOiAnL3dhL2NsZWFuX2luc3RhbGxfd2luZG93cycgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTA2NDRcdTA2MjdcdTA2Q0NcdTA2MzNcdTA2NDZcdTA2MzMgXHUwNjIyXHUwNjQxXHUwNkNDXHUwNjMzIFx1MDYyN1x1MDYzNVx1MDY0NCBcdTA2NDZcdTA2Q0NcdTA2MzNcdTA2MkEnLCBsaW5rOiAnL3dhL29mZmljZS1saWNlbnNlLWlzLW5vdC1nZW51aW5lJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1MDY0NVx1MDYzNFx1MDZBOVx1MDY0NCBcdTA2MzNcdTA2MzFcdTA2NDhcdTA2MzFcdTA2NDdcdTA2MjdcdTA2Q0MgXHUwNjQ0XHUwNjI3XHUwNkNDXHUwNjMzXHUwNjQ2XHUwNjMzJywgbGluazogJy93YS9saWNlbnNpbmctc2VydmVycy1pc3N1ZScgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnXHUwNjQ1XHUwNjM0XHUwNkE5XHUwNjQ0XHUwNjI3XHUwNjJBIFx1MDY0Nlx1MDYyN1x1MDYzNFx1MDZDQyBcdTA2MjdcdTA2MzIgXHUwNjI3XHUwNjMzXHUwNjdFXHUwNjQ4XHUwNjQxXHUwNjMxXHUwNjQ3XHUwNjI3XHUwNkNDIFx1MDZBRlx1MDZDQ1x1MDY0NScsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3dhL2lzc3Vlc19kdWVfdG9fZ2FtaW5nX3Nwb29mZXJzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1MDY0NVx1MDYzNFx1MDZBOVx1MDY0NFx1MDYyN1x1MDYyQSBcdTA2MkFcdTA2M0FcdTA2Q0NcdTA2Q0NcdTA2MzEgXHUwNjQ2XHUwNjMzXHUwNjJFXHUwNjQ3JywgbGluazogJy93YS9jaGFuZ2VfZWRpdGlvbl9pc3N1ZXMnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHUwNjQ2XHUwNjMzXHUwNjJFXHUwNjQ3XHUyMDBDXHUwNjQ3XHUwNjI3XHUwNkNDIFx1MDYyN1x1MDYzMVx1MDYzMlx1MDZDQ1x1MDYyN1x1MDYyOFx1MDZDQycsIGxpbms6ICcvd2EvZXZhbHVhdGlvbl9lZGl0aW9ucycgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTA2MzFcdTA2NDFcdTA2MzkgXHUwNjQ1XHUwNjM0XHUwNkE5XHUwNjQ0IFx1MDY3RVx1MDYyN1x1MDY0OFx1MDYzMVx1MDYzNFx1MDY0NCcsIGxpbms6ICcvd2EvZml4X3Bvd2Vyc2hlbGwnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHUwNjMxXHUwNjQxXHUwNjM5IFx1MDY0NVx1MDYzNFx1MDZBOVx1MDY0NCBcdTA2MzNcdTA2MzFcdTA2NDhcdTA2Q0NcdTA2MzNcdTIwMENcdTA2NDdcdTA2MjdcdTA2Q0MgXHUwNjQ4XHUwNkNDXHUwNjQ2XHUwNjJGXHUwNjQ4XHUwNjMyJywgbGluazogJy93YS9maXhfc2VydmljZScgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTA2MzFcdTA2NDFcdTA2MzkgXHUwNjQ1XHUwNjM0XHUwNkE5XHUwNjQ0IFx1MDYzMVx1MDYyQ1x1MDZDQ1x1MDYzM1x1MDYyQVx1MDYzMVx1MDZDQyBXUEEnLCBsaW5rOiAnL3dhL2ZpeC13cGEtcmVnaXN0cnknIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHUwNjIyXHUwNjdFXHUwNkFGXHUwNjMxXHUwNkNDXHUwNjJGIFx1MDYyQVx1MDYzOVx1MDY0NVx1MDZDQ1x1MDYzMVx1MDZDQyBcdTA2MkZcdTA2MzEgXHUwNjQ1XHUwNjJEXHUwNjQ0JywgbGluazogJy93YS9pbi1wbGFjZV9yZXBhaXJfdXBncmFkZScgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTA2NDZcdTA2MzVcdTA2MjggXHUwNjMzXHUwNjQxXHUwNjI3XHUwNjMxXHUwNjM0XHUwNkNDIE9mZmljZSBjMnInLCBsaW5rOiAnL3dhL29mZmljZV9jMnInIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnXHUwNjMxXHUwNjI3XHUwNjQ3XHUwNjQ2XHUwNjQ1XHUwNjI3XHUwNkNDIFx1MDY0MVx1MDYzOVx1MDYyN1x1MDY0NFx1MjAwQ1x1MDYzM1x1MDYyN1x1MDYzMlx1MDZDQyBcdTA2MkZcdTA2MzNcdTA2MkFcdTA2Q0MnLFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHUwNjQ2XHUwNjM1XHUwNjI4IFx1MDYyRlx1MDYzM1x1MDYyQVx1MDZDQyBIV0lEJywgbGluazogJy93YS9tYW51YWxfaHdpZF9hY3RpdmF0aW9uJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1MDY0Nlx1MDYzNVx1MDYyOCBcdTA2MkZcdTA2MzNcdTA2MkFcdTA2Q0MgT2hvb2snLCBsaW5rOiAnL3dhL21hbnVhbF9vaG9va19hY3RpdmF0aW9uJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1MDY0Nlx1MDYzNVx1MDYyOCBcdTA2MkZcdTA2MzNcdTA2MkFcdTA2Q0MgS01TMzgnLCBsaW5rOiAnL3dhL21hbnVhbF9rbXMzOF9hY3RpdmF0aW9uJyB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1x1MDY3RVx1MDYzNFx1MDYyQVx1MDZDQ1x1MDYyOFx1MDYyN1x1MDY0Nlx1MDZDQycsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTA2QUZcdTA2MzJcdTA2MjdcdTA2MzFcdTA2MzQgXHUwNjQ1XHUwNjM0XHUwNkE5XHUwNjQ0XHUwNjI3XHUwNjJBJywgbGluazogJy93YS90cm91Ymxlc2hvb3QnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHUwNjMzXHUwNjQ4XHUwNjI3XHUwNjQ0XHUwNjI3XHUwNjJBIFx1MDY0NVx1MDYyQVx1MDYyRlx1MDYyN1x1MDY0OFx1MDY0NCcsIGxpbms6ICcvd2EvZmFxJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1MDY0NVx1MDY0Nlx1MDYyN1x1MDYyOFx1MDYzOScsIGxpbms6ICcvd2EvY3JlZGl0cycgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgZWRpdExpbms6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAnaHR0cHM6Ly9naXRodWIuY29tL0RpYW5hLUNsL0RpYW5hLUNsL2VkaXQvbWFpbi9kb2NzLzpwYXRoJyxcbiAgICAgICAgICB0ZXh0OiAnXHUwNjI3XHUwNkNDXHUwNjQ2IFx1MDYzNVx1MDY0MVx1MDYyRFx1MDY0NyBcdTA2MzFcdTA2MjcgXHUwNjJGXHUwNjMxIFx1MDZBRlx1MDZDQ1x1MDYyQVx1MjAwQ1x1MDY0N1x1MDYyN1x1MDYyOCBcdTA2NDhcdTA2Q0NcdTA2MzFcdTA2MjdcdTA2Q0NcdTA2MzQgXHUwNkE5XHUwNjQ2XHUwNkNDXHUwNjJGJyxcbiAgICAgICAgfSxcbiAgICAgICAgZG9jRm9vdGVyOiB7IHByZXY6ICdcdTA2MzVcdTA2NDFcdTA2MkRcdTA2NDcgXHUwNjQyXHUwNjI4XHUwNjQ0XHUwNkNDJywgbmV4dDogJ1x1MDYzNVx1MDY0MVx1MDYyRFx1MDY0NyBcdTA2MjhcdTA2MzlcdTA2MkZcdTA2Q0MnIH0sXG4gICAgICAgIGxhc3RVcGRhdGVkOiB7IHRleHQ6ICdcdTA2MjJcdTA2MkVcdTA2MzFcdTA2Q0NcdTA2NDYgXHUwNjI4XHUwNjMxXHUwNjQ4XHUwNjMyXHUwNjMxXHUwNjMzXHUwNjI3XHUwNjQ2XHUwNkNDJyB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIGVuOiB7XG4gICAgICBsYWJlbDogJ0VuZ2xpc2gnLFxuICAgICAgbGFuZzogJ2VuLVVTJyxcbiAgICAgIGRpcjogJ2x0cicsXG4gICAgICB0aXRsZTogJycsXG4gICAgICBkZXNjcmlwdGlvbjogJ015IHBlcnNvbmFsIG5vdGVzIGFuZCBhcnRpY2xlcyBhYm91dCB0ZWNobm9sb2d5LCBzZWN1cml0eSwgYW5kIEFJJyxcbiAgICAgIHRoZW1lQ29uZmlnOiB7XG4gICAgICAgIGxvZ286ICcvbG9nby1oLnN2ZycsXG4gICAgICAgIG5hdjogW1xuICAgICAgICAgIHsgdGV4dDogJ1x1RDgzQ1x1REZFMCBIb21lJywgbGluazogJy9lbi8nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVEQ0RBIE5vdGVzJywgbGluazogJy9lbi90b3BpY3MvJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRVx1REU5RiBXaW5kb3dzIEFjdGl2YXRpb24nLCBsaW5rOiAnL2VuL3dhLycgfSxcbiAgICAgICAgXSxcbiAgICAgICAgc2lkZWJhcjoge1xuICAgICAgICAgICcvZW4vdG9waWNzLyc6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1x1RDgzRFx1RENEQSBOb3RlcycsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnR29vZ2xlIEdlbWluaScsIGxpbms6ICcvZW4vdG9waWNzL0dlbWluaScgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdQb2tlciBcdTIwMTMgVGV4YXMgSG9sZGVtJywgbGluazogJy9lbi90b3BpY3MvcG9rZXItdGV4YXMnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnQWkgQWdlbnRzJywgbGluazogJy9lbi90b3BpY3MvYWktYWdlbnRzJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1Byb2Nlc3NvciBBcmNoaXRlY3R1cmUnLCBsaW5rOiAnL2VuL3RvcGljcy9jcHUtYWJpLWFuZHJvaWQnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnVGVybXV4JywgbGluazogJy9lbi90b3BpY3MvdGVybXV4JyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0lyYW4gQ29yZScsIGxpbms6ICcvZW4vdG9waWNzL2lyYW4tY29yZScgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdTbGVlcGluZyBBcHBzJywgbGluazogJ2VuL3RvcGljcy9zbGVlcGluZy1hcHAnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnU3RhYmxlIERpZmZ1c2lvbicsIGxpbms6ICcvZW4vdG9waWNzL1N0YWJsZS1EaWZmdXNpb24nIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnVGhlIEZhbGxlbiBDcm93bicsIGxpbms6ICcvZW4vdG9waWNzL1JFdmlsJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ05la29ib3ggZm9yIEFuZHJvaWQnLCBsaW5rOiAnL2VuL3RvcGljcy9uZWtvYm94JyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0Nsb3VkZmxhcmUgQmFjay1lbmQgU2VsZWN0b3InLCBsaW5rOiAnL2VuL3RvcGljcy9jZi1iYWNrZW5kLXNlbGVjdG9yJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1VwZ3JhZGUgUEhQIE9uIENlbnRPUyA3JywgbGluazogJy9lbi90b3BpY3MvVXBncmFkZS1QSFAtdmVyc2lvbi1vbi1DZW50T1MtNycgfSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgJy9lbi93YS8nOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdBY3RpdmF0aW9uIEd1aWRlcycsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdIV0lEIEFjdGl2YXRpb24nLCBsaW5rOiAnL2VuL3dhLycgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdLTVMgQWN0aXZhdGlvbicsIGxpbms6ICcvZW4vd2Eva21zJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ01ldGhvZHMgQ2hhcnQnLCBsaW5rOiAnL2VuL3dhL2NoYXJ0JyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0Rvd25sb2FkIFdpbmRvd3MgLyBPZmZpY2UnLCBsaW5rOiAnL2VuL3dhL2dlbnVpbmUtaW5zdGFsbGF0aW9uLW1lZGlhJyB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0FjdGl2YXRpb24gTWV0aG9kcycsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdIV0lEIE1ldGhvZCBEZXRhaWxzJywgbGluazogJy9lbi93YS9od2lkJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ09ob29rIE1ldGhvZCBEZXRhaWxzJywgbGluazogJy9lbi93YS9vaG9vaycgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdUU2ZvcmdlIE1ldGhvZCBEZXRhaWxzJywgbGluazogJy9lbi93YS90c2ZvcmdlJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0tNUzM4IE1ldGhvZCBEZXRhaWxzJywgbGluazogJy9lbi93YS9rbXMzOCcgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdPbmxpbmUgS01TIE1ldGhvZCBEZXRhaWxzJywgbGluazogJy9lbi93YS9vbmxpbmVfa21zJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NoYW5nZSBXaW5kb3dzIEVkaXRpb24nLCBsaW5rOiAnL2VuL3dhL2NoYW5nZV93aW5kb3dzX2VkaXRpb24nIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnQ2hhbmdlIE9mZmljZSBFZGl0aW9uJywgbGluazogJy9lbi93YS9jaGFuZ2Vfb2ZmaWNlX2VkaXRpb24nIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnICRPRU0kIEZvbGRlcnMnLCBsaW5rOiAnL2VuL3dhL29lbS1mb2xkZXInIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnU3dpdGNoZXMgaW4gQ29tbWFuZCBsaW5lJywgbGluazogJy9lbi93YS9jb21tYW5kX2xpbmVfc3dpdGNoZXMnIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnVGVjaG5pY2FsIERldGFpbHMnLFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnV2luIDEwIEFmdGVyIEVuZC1PZi1MaWZlJywgbGluazogJy9lbi93YS93aW5kb3dzMTBfZW9sJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1JlbW92ZSBNYWx3YXJlJywgbGluazogJy9lbi93YS9yZW1vdmVfbWFsd2FyZScgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdDbGVhbiBJbnN0YWxsIFdpbmRvd3MnLCBsaW5rOiAnL2VuL3dhL2NsZWFuX2luc3RhbGxfd2luZG93cycgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnT2ZmaWNlIExpY2Vuc2UgSXMgTm90IEdlbnVpbmUnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9lbi93YS9vZmZpY2UtbGljZW5zZS1pcy1ub3QtZ2VudWluZScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdMaWNlbnNpbmcgU2VydmVycyBJc3N1ZScsIGxpbms6ICcvZW4vd2EvbGljZW5zaW5nLXNlcnZlcnMtaXNzdWUnIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ0lzc3VlcyBEdWUgVG8gR2FtaW5nIFNwb29mZXJzJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvZW4vd2EvaXNzdWVzX2R1ZV90b19nYW1pbmdfc3Bvb2ZlcnMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnQ2hhbmdlIEVkaXRpb24gSXNzdWVzJywgbGluazogJy9lbi93YS9jaGFuZ2VfZWRpdGlvbl9pc3N1ZXMnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnRXZhbHVhdGlvbiBFZGl0aW9ucycsIGxpbms6ICcvZW4vd2EvZXZhbHVhdGlvbl9lZGl0aW9ucycgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdGaXggUG93ZXJzaGVsbCcsIGxpbms6ICcvZW4vd2EvZml4X3Bvd2Vyc2hlbGwnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnRml4IFdpbmRvd3MgU2VydmljZXMnLCBsaW5rOiAnL2VuL3dhL2ZpeF9zZXJ2aWNlJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0ZpeCBXUEEgUmVnaXN0cnknLCBsaW5rOiAnL2VuL3dhL2ZpeC13cGEtcmVnaXN0cnknIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnSW4tcGxhY2UgUmVwYWlyIFVwZ3JhZGUnLCBsaW5rOiAnL2VuL3dhL2luLXBsYWNlX3JlcGFpcl91cGdyYWRlJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ09mZmljZSBjMnIgQ3VzdG9tIEluc3RhbGwnLCBsaW5rOiAnL2VuL3dhL29mZmljZV9jMnInIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnTWFudWFsIEFjdGl2YXRpb24gR3VpZGVzJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJ01hbnVhbCBIV0lEIGFjdGl2YXRpb24nLCBsaW5rOiAnL2VuL3dhL21hbnVhbF9od2lkX2FjdGl2YXRpb24nIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnTWFudWFsIE9ob29rIGFjdGl2YXRpb24nLCBsaW5rOiAnL2VuL3dhL21hbnVhbF9vaG9va19hY3RpdmF0aW9uJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ01hbnVhbCBLTVMzOCBhY3RpdmF0aW9uJywgbGluazogJy9lbi93YS9tYW51YWxfa21zMzhfYWN0aXZhdGlvbicgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdTdXBwb3J0JyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1Ryb3VibGVzaG9vdCcsIGxpbms6ICcvZW4vd2EvdHJvdWJsZXNob290JyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0ZBUScsIGxpbms6ICcvZW4vd2EvZmFxJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NyZWRpdHMnLCBsaW5rOiAnL2VuL3dhL2NyZWRpdHMnIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHNlYXJjaDogeyBwcm92aWRlcjogJ2xvY2FsJyB9LFxuICAgICAgICBkb2NGb290ZXI6IHsgcHJldjogJ1ByZXZpb3VzIHBhZ2UnLCBuZXh0OiAnTmV4dCBwYWdlJyB9LFxuICAgICAgICBsYXN0VXBkYXRlZDoge1xuICAgICAgICAgIHRleHQ6ICdMYXN0IHVwZGF0ZWQnLFxuICAgICAgICAgIGZvcm1hdE9wdGlvbnM6IHsgZGF0ZVN0eWxlOiAnbWVkaXVtJywgdGltZVN0eWxlOiAnc2hvcnQnIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGVkaXRMaW5rOiB7XG4gICAgICAgICAgcGF0dGVybjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9EaWFuYS1DbC9EaWFuYS1DbC9lZGl0L21haW4vZG9jcy86cGF0aCcsXG4gICAgICAgICAgdGV4dDogJ0VkaXQgdGhpcyBwYWdlIG9uIEdpdEh1YicsXG4gICAgICAgIH0sXG4gICAgICAgIHNvY2lhbExpbmtzOiBbXG4gICAgICAgICAgeyBpY29uOiAnZ2l0aHViJywgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9EaWFuYS1DbC8nIH0sXG4gICAgICAgICAgeyBpY29uOiAndGVsZWdyYW0nLCBsaW5rOiAnaHR0cHM6Ly90Lm1lL0ZfTmlSRXZpbC82NDQ4JyB9LFxuICAgICAgICBdLFxuICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICBjb3B5cmlnaHQ6ICdcdTAwQTkgMjAyNSBSRXZpbCBcdTIwMTQgU2hhcmluZyBrbm93bGVkZ2UsIG9uZSBub3RlIGF0IGEgdGltZScsXG4gICAgICAgICAgbWVzc2FnZTogJ01hZGUgd2l0aCB1c2luZyBWaXRlUHJlc3MnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIHZpdGU6IHtcbiAgICBvcHRpbWl6ZURlcHM6IHtcbiAgICAgIGV4Y2x1ZGU6IFtcbiAgICAgICAgJ3ZpZGVvLmpzJyxcbiAgICAgICAgJ0Bub2xlYmFzZS92aXRlcHJlc3MtcGx1Z2luLWlubGluZS1saW5rLXByZXZpZXcvY2xpZW50JyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBzc3I6IHtcbiAgICAgIG5vRXh0ZXJuYWw6IFtcbiAgICAgICAgL0Bub2xlYmFzZVxcL3ZpdGVwcmVzcy1wbHVnaW4tLiovLFxuICAgICAgICAnQG5vbGViYXNlL3VpJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtVixTQUFTLG9CQUFvQjtBQUNoWCxPQUFPLGNBQWM7QUFDckIsT0FBTyxjQUFjO0FBQ3JCLE9BQU8sV0FBVztBQUVsQixTQUFTLDBCQUEwQjtBQUNuQyxTQUFTLHlDQUF5QztBQUVsRCxJQUFNLE9BQU87QUFDYixJQUFNLFVBQVUsNkJBQTZCLElBQUk7QUFFakQsSUFBTyxpQkFBUSxhQUFhO0FBQUEsRUFDMUI7QUFBQSxFQUNBLFdBQVc7QUFBQSxFQUNYLGlCQUFpQjtBQUFBLEVBRWpCLE1BQU07QUFBQSxJQUNKLENBQUMsUUFBUSxFQUFFLEtBQUssUUFBUSxNQUFNLEdBQUcsSUFBSSxjQUFjLENBQUM7QUFBQSxJQUNwRCxDQUFDLFFBQVEsRUFBRSxLQUFLLGNBQWMsTUFBTSwrQkFBK0IsQ0FBQztBQUFBLElBQ3BFLENBQUMsUUFBUSxFQUFFLEtBQUssY0FBYyxNQUFNLDZCQUE2QixhQUFhLEdBQUcsQ0FBQztBQUFBLElBQ2xGO0FBQUEsTUFDRTtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLEtBQUs7QUFBQSxNQUNQO0FBQUEsSUFDRjtBQUFBLElBQ0EsQ0FBQyxRQUFRLEVBQUUsTUFBTSxlQUFlLFNBQVMsVUFBVSxDQUFDO0FBQUEsSUFDcEQ7QUFBQSxNQUNFO0FBQUEsTUFDQSxFQUFFLEtBQUssY0FB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
