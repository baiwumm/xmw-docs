import { defineConfig } from 'vitepress'

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
        items: [
          {
            text: '今日热榜',
            link: '/personal-project/daily-hot',
          },
          {
            text: 'Xmw Admin',
            link: '/personal-project/xmw-admin',
          },
          {
            text: '站点统计',
            link: 'https://analysis.baiwumm.com/share/GqbrYmgMFKUIm62q',
          }
        ]
      },
      {
        text: '面试宝典',
        items: [
          { text: 'Javascript', link: '/interview-handbook/javascript/data-type' },
          { text: 'Vue', link: '/interview-handbook/vue/mvvm' },
          { text: 'React', link: '/interview-handbook/react/life-cycle' },
          { text: '算法篇', link: '/interview-handbook/algorithm/bubble-sort' },
          { text: '浏览器篇', link: '/interview-handbook/browser/cross-domain' },
        ]
      },
      { text: 'LeetCode算法', link: '/algorithm/ease/sum-of-two-numbers' },
      { text: '每日壹题', link: '/daily-question/1' }
    ],
    sidebar: {
      '/personal-project': [
        { text: '今日热榜', link: '/personal-project/daily-hot' },
        { text: 'Xmw Admin', link: '/personal-project/xmw-admin' },
      ],
      '/interview-handbook/javascript': [
        { text: '数据类型', link: '/interview-handbook/javascript/data-type' },
        { text: '原型和原型链', link: '/interview-handbook/javascript/prototype' },
        { text: '闭包', link: '/interview-handbook/javascript/closure' },
        { text: '作用域和作用域链', link: '/interview-handbook/javascript/scope' },
        { text: '垃圾回收机制', link: '/interview-handbook/javascript/garbage-collection' },
        { text: '变量提升', link: '/interview-handbook/javascript/variable-lifting' },
        { text: 'this 指向机制', link: '/interview-handbook/javascript/this' },
        { text: '事件循环(消息循环)', link: '/interview-handbook/javascript/event-loop' },
      ],
      '/interview-handbook/vue': [
        { text: 'MVVM 的理解', link: '/interview-handbook/vue/mvvm' },
        { text: 'Vue3 和 Vue2 的区别', link: '/interview-handbook/vue/difference-of-vue' },
        { text: 'key 的作用和工作原理', link: '/interview-handbook/vue/key' },
      ],
      '/interview-handbook/react': [
        { text: '类组件生命周期', link: '/interview-handbook/react/life-cycle' },
        { text: 'JSX 的理解', link: '/interview-handbook/react/jsx' },
        { text: 'setState 函数做了哪些事情', link: '/interview-handbook/react/set-state' },
        { text: '为什么调用 setState 而不是直接改变 state', link: '/interview-handbook/react/why-state' },
      ],
      '/interview-handbook/algorithm': [
        { text: '冒泡排序', link: '/interview-handbook/algorithm/bubble-sort' },
        { text: '选择排序', link: '/interview-handbook/algorithm/selection-sort' },
        { text: '插入排序', link: '/interview-handbook/algorithm/insertion-sort' },
        { text: '归并排序', link: '/interview-handbook/algorithm/merge-sort' },
      ],
      '/interview-handbook/browser': [
        { text: '浏览器进程模型', link: '/interview-handbook/browser/process-model' },
        { text: '如何解决跨域', link: '/interview-handbook/browser/cross-domain' },
        { text: '浏览器缓存', link: '/interview-handbook/browser/cache' },
        { text: 'XSS 跨站脚本攻击', link: '/interview-handbook/browser/xss' },
        { text: 'CSRF 跨站请求伪造', link: '/interview-handbook/browser/csrf' },
        { text: '输入 url 会发生什么', link: '/interview-handbook/browser/url' },
        { text: 'cookie 和 session 的区别', link: '/interview-handbook/browser/cookie-and-session' },
        { text: 'cookie、sessionStorage 和 localStorage 的区别', link: '/interview-handbook/browser/cookie-and-storage' },
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
            { text: '两数相加', link: '/algorithm/intermediate/add-two-numbers' },
          ]
        },
        {
          text: '困难',
          collapsed: false,
          items: [
            { text: '寻找两个正序数组的中位数', link: '/algorithm/hard/ordinal-group-median' },
          ]
        }
      ],
      '/daily-question/': [
        { text: '第 1 题：写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？', link: '/daily-question/1' },
        { text: `第 2 题：['1', '2', '3'].map(parseInt) what & why ?`, link: '/daily-question/2' },
        { text: '第 3 题：什么是防抖和节流？有什么区别？如何实现？', link: '/daily-question/3' },
        { text: '第 4 题：介绍下 Set、Map、WeakSet 和 WeakMap 的区别？', link: '/daily-question/4' },
        { text: '第 5 题：介绍下深度优先遍历和广度优先遍历，如何实现？', link: '/daily-question/5' },
        { text: '第 6 题：请分别用深度优先思想和广度优先思想实现一个拷贝函数？', link: '/daily-question/6' },
        { text: '第 7 题：ES5/ES6 的继承除了写法以外还有什么区别？', link: '/daily-question/7' },
        { text: '第 8 题：setTimeout、Promise、Async/Await 的区别', link: '/daily-question/8' },
        { text: '第 9 题：Async/Await 如何通过同步的方式实现异步', link: '/daily-question/9' },
        { text: '第 10 题：常见异步笔试题，请写出代码的运行结果', link: '/daily-question/10' },
        { text: '第 11 题：将数组扁平化并去除其中重复数据，最终得到一个升序且不重复的数组', link: '/daily-question/11' },
        { text: '第 12 题：JS 异步解决方案的发展历程以及优缺点', link: '/daily-question/12' },
        { text: '第 13 题：Promise 构造函数是同步执行还是异步执行，那么 then 方法呢？', link: '/daily-question/13' },
        { text: '第 14 题：情人节福利题，如何实现一个 new', link: '/daily-question/14' },
        { text: '第 15 题：简单讲解一下 http2 的多路复用', link: '/daily-question/15' },
        { text: '第 16 题：谈谈你对 TCP 三次握手和四次挥手的理解', link: '/daily-question/16' },
        { text: '第 17 题：A、B 机器正常连接后，B 机器突然重启，问 A 此时处于 TCP 什么状态', link: '/daily-question/17' },
        { text: '第 18 题：React 中 setState 什么时候是同步的，什么时候是异步的？', link: '/daily-question/18' },
        { text: '第 19 题：React setState 笔试题，下面的代码输出什么？', link: '/daily-question/19' },
        { text: '第 20 题：介绍下 npm 模块安装机制，为什么输入 npm install 就可以自动安装对应的模块？', link: '/daily-question/20' },
        { text: '第 21 题：有以下 3 个判断数组的方法，请分别介绍它们之间的区别和优劣Object.prototype.toString.call() 、 instanceof 以及 Array.isArray()', link: '/daily-question/21' },
        { text: '第 22 题：介绍下重绘和回流（Repaint & Reflow），以及如何进行优化', link: '/daily-question/22' },
        { text: '第 23 题：介绍下观察者模式和订阅-发布模式的区别，各自适用于什么场景', link: '/daily-question/23' },
        { text: '第 24 题：聊聊 Redux 和 Vuex 的设计思想', link: '/daily-question/24' },
        { text: '第 25 题：浏览器和Node 事件循环的区别', link: '/daily-question/25' },
        { text: '第 26 题：介绍模块化发展历程', link: '/daily-question/26' },
        { text: '第 27 题：关于 const 和 let 声明的变量不在 window 上', link: '/daily-question/27' },
        { text: '第 28 题：cookie 和 token 都存放在 header 中，为什么不会劫持 token？', link: '/daily-question/28' },
        { text: '第 29 题：聊聊 Vue 的双向数据绑定，Model 如何改变 View，View 又是如何改变 Model 的', link: '/daily-question/29' },
        { text: '第 30 题：请把俩个数组 [A1, A2, B1, B2, C1, C2, D1, D2] 和 [A, B, C, D]，合并为 [A1, A2, A, B1, B2, B, C1, C2, C, D1, D2, D]', link: '/daily-question/30' },
        { text: '第 31 题：改造下面的代码，使之输出 0 - 9，写出你能想到的所有解法。', link: '/daily-question/31' },
        { text: '第 32 题：Virtual DOM 真的比操作原生 DOM 快吗？谈谈你的想法。', link: '/daily-question/32' },
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