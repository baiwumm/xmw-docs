import { defineConfig } from 'vitepress'
import { zh } from './zh'
import { en } from './en'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "XmwDocs",
  description: "个人开发项目记录文档，后台模板、组件封装、面试题、前端开发小技巧",
  cleanUrls: true, // 生成简洁的 URL
  lastUpdated: true, // 最后更新时间
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
    ],
    // 页脚版权
    footer: {
      copyright: 'Copyright © 2023-2024 | Made with 🤯 by <a href="https://baiwumm.com/" target="_blank">baiwumm</a>'
    }
  },
  // 国际化
  locales: {
    root: { label: '简体中文', ...zh },
    en: { label: 'English', ...en }
  },
})
