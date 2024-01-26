import { defineConfig } from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',
  titleTemplate: 'baiwumm',
  description: "Personal development project documentation, background templates, component packaging, interview questions, front-end development tips",

  themeConfig: {
    // 页脚版权
    footer: {
      copyright: `Copyright © 2023-${new Date().getFullYear()} | Made with 🤯 by <a href="https://baiwumm.com/" target="_blank">baiwumm</a>`
    },
    nav: [
      { text: 'LeetCode algorithm', link: '/en/algorithm/sum-of-two-numbers' }
    ],
    sidebar: [
      {
        text: 'easy',
        collapsed: false,
        items: [
          { text: 'Sum of two numbers', link: '/en/algorithm/sum-of-two-numbers' },
        ]
      }
    ],

    docFooter: {
      prev: 'Previous',
      next: 'Next'
    },

    outline: {
      label: 'Navigation'
    },

    lastUpdated: {
      text: 'Last updated on',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: 'Internationalization',
    returnToTopLabel: 'Back to the top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Theme',
    lightModeSwitchTitle: 'Switch to light mode',
    darkModeSwitchTitle: 'Switch to dark mode'
  }
})