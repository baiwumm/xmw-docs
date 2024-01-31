import { defineConfig, type DefaultTheme } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh-Hans',
  titleTemplate: '白雾茫茫丶',
  description: "前端开发学习笔记，面试宝典、LeetCode算法、每日壹题",
  themeConfig: {
    // 页脚版权
    footer: {
      copyright: `版权所有 © 2023-${new Date().getFullYear()} | Made with 🤯 by <a href="https://baiwumm.com/" target="_blank">白雾茫茫丶</a>`
    },
    nav: [
      {
        text: '面试宝典',
        items: [
          { text: 'Javascript', link: '/interview-handbook/javascript/data-type' },
          { text: 'Vue', link: '/interview-handbook/vue/mvvm' },
        ]
      },
      { text: 'LeetCode算法', link: '/algorithm/ease/sum-of-two-numbers' },
      { text: '每日壹题', link: '/daily-question/1' }
    ],
    sidebar: {
      '/interview-handbook/javascript': [
        {
          text: '基础篇',
          collapsed: false,
          items: [
            { text: '数据类型', link: '/interview-handbook/javascript/data-type' },
          ]
        },
      ],
      '/interview-handbook/vue': [
        {
          text: '基础篇',
          collapsed: false,
          items: [
            { text: 'MVVM的理解', link: '/interview-handbook/vue/mvvm' },
          ]
        },
      ],
      '/algorithm/': [
        {
          text: '简单',
          collapsed: false,
          items: [
            { text: '两数之和', link: '/algorithm/ease/sum-of-two-numbers' },
            { text: '回文数', link: '/algorithm/ease/palindromic-number' },
          ]
        },
        {
          text: '中等',
          collapsed: false,
          items: [
            { text: '整数反转', link: '/algorithm/intermediate/integer-inversion' },
          ]
        }
      ],
      '/daily-question/': [
        { text: '第 1 题：写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？', link: '/daily-question/1' },
        { text: `第 2 题：['1', '2', '3'].map(parseInt) what & why ?`, link: '/daily-question/2' },
      ],
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})

/**
 * @description: algolia 搜索
 */
export const zhSearch: DefaultTheme.LocalSearchOptions['locales'] = {
  zh: {
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        noResultsText: '无法找到相关结果',
        resetButtonTitle: '清除查询条件',
        footer: {
          selectText: '选择',
          navigateText: '切换'
        }
      }
    }
  }
}