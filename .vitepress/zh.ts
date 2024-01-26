import { defineConfig } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh-Hans',
  description: "个人开发项目记录文档，后台模板、组件封装、面试题、前端开发小技巧",

  themeConfig: {

    nav: [
      { text: 'LeetCode算法', link: '/algorithm/sum-of-two-numbers' }
    ],
    sidebar: [
      {
        text: '简单',
        collapsed: false,
        items: [
          { text: '两数之和', link: '/algorithm/sum-of-two-numbers' },
        ]
      }
    ],

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