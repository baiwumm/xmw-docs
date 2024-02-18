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
        text: '个人项目', 
        items:[
          {
            text: '后台模板',
            items:[
              {
                text:'Xmw Admin',
                link: '/personal-project/xmw-admin',
              }
            ]
          }
        ]
       },
      {
        text: '面试宝典',
        items: [
          { text: 'Javascript', link: '/interview-handbook/javascript/data-type' },
          { text: 'Vue', link: '/interview-handbook/vue/mvvm' },
          { text: 'React', link: '/interview-handbook/react/life-cycle' },
        ]
      },
      { text: 'LeetCode算法', link: '/algorithm/ease/sum-of-two-numbers' },
      { text: '每日壹题', link: '/daily-question/1' }
    ],
    sidebar: {
      '/personal-project': [
        {
          text: '后台模板',
          collapsed: false,
          items: [
            { text: 'Xmw Admin', link: '/personal-project/xmw-admin' },
          ]
        },
      ],
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
      '/interview-handbook/react': [
        {
          text: '基础篇',
          collapsed: false,
          items: [
            { text: '类组件生命周期', link: '/interview-handbook/react/life-cycle' },
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
            { text: '最长公共前缀', link: '/algorithm/ease/longest-common-prefix' },
            { text: '罗马数字转整数', link: '/algorithm/ease/roman-to-numbers' },
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
        { text: '第 3 题：什么是防抖和节流？有什么区别？如何实现？', link: '/daily-question/3' },
        { text: '第 4 题：介绍下 Set、Map、WeakSet 和 WeakMap 的区别？', link: '/daily-question/4' },
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
export const zhSearch: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  zh: {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消'
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除'
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接'
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索提供者'
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈'
        }
      }
    }
  }
}