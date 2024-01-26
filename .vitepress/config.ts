import { defineConfig } from 'vitepress'
import { zh } from './zh'
import { en } from './en'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "XmwDocs",
  cleanUrls: true, // 生成简洁的 URL
  lastUpdated: true, // 最后更新时间
  srcDir: './src', // markdown 页面的目录，相对于项目根目录
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  sitemap: {
    hostname: 'https://docs.baiwumm.com'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/favicon.ico', width: 24, height: 24 },

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
