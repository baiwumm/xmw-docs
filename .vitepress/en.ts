import { defineConfig, type DefaultTheme } from 'vitepress'

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
        text: 'Personal project', 
        items:[
          {
            text: 'Background template',
            items:[
              {
                text:'Xmw Admin',
                link: '/en/personal-project/xmw-admin',
              }
            ]
          }
        ]
       },
      {
        text: 'Interview handbook',
        items: [
          { text: 'Javascript', link: '/en/interview-handbook/javascript/data-type' },
          { text: 'Vue', link: '/en/interview-handbook/vue/mvvm' },
          { text: 'React', link: '/en/interview-handbook/react/life-cycle' },
        ]
      },
      { text: 'LeetCode algorithm', link: '/en/algorithm/ease/sum-of-two-numbers' },
      { text: 'Daily Question', link: '/en/daily-question/1' }
    ],
    sidebar: {
      '/en/personal-project': [
        {
          text: 'Background template',
          collapsed: false,
          items: [
            { text: 'Xmw Admin', link: '/en/personal-project/xmw-admin' },
          ]
        },
      ],
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
      '/en/interview-handbook/react': [
        {
          text: 'Basic chapter',
          collapsed: false,
          items: [
            { text: 'Class component life cycle', link: '/en/interview-handbook/react/life-cycle' },
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
            { text: 'Longest common prefix', link: '/en/algorithm/ease/longest-common-prefix' },
            { text: 'Roman numerals to whole numbers', link: '/en/algorithm/ease/roman-to-numbers' },
          ]
        },
        {
          text: 'intermediate',
          collapsed: false,
          items: [
            { text: 'Integer inversion', link: '/en/algorithm/intermediate/integer-inversion' },
          ]
        },
        {
          text: 'hard',
          collapsed: false,
          items: [
            { text: 'Find the median of two groups of positive Ordinal Numbers', link: '/en/algorithm/hard/ordinal-group-median' },
          ]
        }
      ],
      '/en/daily-question/': [
        { text: 'Question 1：Why write a key in a list component when writing a React/Vue project, and what does it do?', link: '/en/daily-question/1' },
        { text: `Question 2：['1', '2', '3'].map(parseInt) what & why ?`, link: '/en/daily-question/2' },
        { text: `Question 3：What is anti-shake and throttle? What's the difference? How to achieve it?`, link: '/en/daily-question/3' },
        { text: 'Question 4：What are the differences between Set, Map, WeakSet, and WeakMap?', link: '/en/daily-question/4' },
        { text: 'Question 5：How to implement depth-first traversal and breadth-first traversal?', link: '/en/daily-question/5' },
        { text: 'Question 6：Can you implement a copy function with depth-first and breadth-first ideas respectively?', link: '/en/daily-question/6' },
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

/**
 * @description: algolia 搜索
 */
export const enSearch: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  en: {
    placeholder: 'Search docs',
    translations: {
      button: {
        buttonText: 'Search',
        buttonAriaLabel: 'Search'
      },
      modal: {
        searchBox: {
          resetButtonTitle: 'Clear query criteria',
          resetButtonAriaLabel: 'Clear query criteria',
          cancelButtonText: 'Cancel',
          cancelButtonAriaLabel: 'Cancel'
        },
        startScreen: {
          recentSearchesTitle: 'Search history',
          noRecentSearchesText: 'No search history',
          saveRecentSearchButtonTitle: 'Save to search history',
          removeRecentSearchButtonTitle: 'Removed from search history',
          favoriteSearchesTitle: 'Collect',
          removeFavoriteSearchButtonTitle: 'Remove from collection'
        },
        errorScreen: {
          titleText: 'No result available',
          helpText: 'You may want to check your Internet connection'
        },
        footer: {
          selectText: 'to select',
          navigateText: 'to navigate',
          closeText: 'to close',
          searchByText: 'Search by'
        },
        noResultsScreen: {
          noResultsText: 'No results could be found',
          suggestedQueryText: 'You can try querying',
          reportMissingResultsText: 'Do you think this query should yield results?',
          reportMissingResultsLinkText: 'Click feedback'
        }
      }
    }
  }
}