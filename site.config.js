const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Lanbasara",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Frontend Developer",
    bio: "Simple & Reliable",
    email: "ghkagg@outlook.com",
    wechat: "Lanbasara",
    github: "Lanbasara",
  },
  projects: [
    {
      name: `Lanbasara's Blog`,
      href: "https://github.com/Lanbasara/notion-blog-template",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Lanbasara's Blog",
    description: "Welcome to Lanbasara's Blog",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://www.lanbasara.space/",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: "G-0RDC2VDNQG" || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "Lanbasara/notion-blog-template",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  staticResources: {
    Logo: "https://raw.githubusercontent.com/Lanbasara/notion-blog-template/main/logo.svg",
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
