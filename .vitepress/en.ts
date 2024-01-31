import { defineConfig } from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',
  titleTemplate: 'baiwumm',
  description: "Front-end development study notes, interview handbook, LeetCode algorithm, one question a day",

  themeConfig: {
    // 页脚版权
    footer: {
      copyright: `Copyright © 2023-${new Date().getFullYear()} | Made with 🤯 by <a href="https://baiwumm.com/" target="_blank">baiwumm</a>`
    },
    nav: [
      {
        text: 'Interview handbook',
        items: [
          { text: 'Javascript', link: '/en/interview-handbook/javascript/data-type' },
          { text: 'Vue', link: '/en/interview-handbook/vue/mvvm' },
        ]
      },
      { text: 'LeetCode algorithm', link: '/en/algorithm/ease/sum-of-two-numbers' },
      { text: 'Daily Question', link: '/en/daily-question/1' }
    ],
    sidebar: {
      '/en/interview-handbook/javascript': [
        {
          text: 'Basic chapter',
          collapsed: false,
          items: [
            { text: 'Data type', link: '/en/interview-handbook/javascript/data-type' },
          ]
        },
      ],
      '/en/interview-handbook/vue': [
        {
          text: 'Basic chapter',
          collapsed: false,
          items: [
            { text: 'Understanding of MVVM', link: '/en/interview-handbook/vue/mvvm' },
          ]
        },
      ],
      '/en/algorithm/': [
        {
          text: 'easy',
          collapsed: false,
          items: [
            { text: 'Sum of two numbers', link: '/en/algorithm/ease/sum-of-two-numbers' },
            { text: 'Palindromic number', link: '/en/algorithm/ease/palindromic-number' },
          ]
        },
        {
          text: 'intermediate',
          collapsed: false,
          items: [
            { text: 'Integer inversion', link: '/en/algorithm/intermediate/integer-inversion' },
          ]
        }
      ],
      '/en/daily-question/': [
        { text: 'Question 1：Why write a key in a list component when writing a React/Vue project, and what does it do?', link: '/en/daily-question/1' },
      ],
    },

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