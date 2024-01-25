import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "XmwDocs",
  description: "个人开发项目记录文档，后台模板、组件封装、面试题、前端开发小技巧",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/favicon.ico', width: 24, height: 24 },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/baiwumm' }
    ]
  },
  cleanUrls: true, // 生成简洁的 URL
})
