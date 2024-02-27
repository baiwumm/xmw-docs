import { defineConfig } from "vitepress";
import mdItCustomAttrs from "markdown-it-custom-attrs";
import { zh } from "./zh";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "XmwDocs",
  cleanUrls: true, // 生成简洁的 URL
  lastUpdated: true, // 最后更新时间
  srcDir: "./src", // markdown 页面的目录，相对于项目根目录
  outDir: "./dist", // 站点的构建输出位置
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }], // 网站 icon
    // 谷歌分析
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-CC5DDF69MK",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-CC5DDF69MK');`,
    ],
    // 微软统计
    [
      "script",
      { type: "text/javascript" },
      `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "krtav71e82");`,
    ],
    // 百度统计
    [
      "script",
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?0b38042c4e8762632dcea3ea62067338";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`,
    ],
    // umami 统计
    [
      "script",
      {
        async: "",
        "data-website-id": "eb0f8672-c066-464e-a710-5839b1c1536e",
        src: "https://analysis.baiwumm.com/script.js",
      },
    ],
    // 图片预览资源
    [
      "link",
      { rel: "stylesheet", href: "https://cdn.baiwumm.com/css/fancybox.css" },
    ],
    ["script", { src: "https://cdn.baiwumm.com/js/fancybox.umd.js" }],
  ],
  sitemap: {
    hostname: "https://docs.baiwumm.com",
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: "/favicon.ico", width: 24, height: 24 },

    socialLinks: [{ icon: "github", link: "https://github.com/baiwumm" }],
    // 页脚版权
    footer: {
      copyright:
        'Copyright © 2023-2024 | Made with 🤯 by <a href="https://baiwumm.com/" target="_blank">baiwumm</a>',
    },
    // 本地搜索
    search: {
      provider: "algolia",
      options: {
        appId: "LB0GO1G90U",
        apiKey: "d26c7093012aa3d440ab846f3d971989",
        indexName: "baiwummdocs",
        placeholder: "搜索文档",
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            searchBox: {
              resetButtonTitle: "清除查询条件",
              resetButtonAriaLabel: "清除查询条件",
              cancelButtonText: "取消",
              cancelButtonAriaLabel: "取消",
            },
            startScreen: {
              recentSearchesTitle: "搜索历史",
              noRecentSearchesText: "没有搜索历史",
              saveRecentSearchButtonTitle: "保存至搜索历史",
              removeRecentSearchButtonTitle: "从搜索历史中移除",
              favoriteSearchesTitle: "收藏",
              removeFavoriteSearchButtonTitle: "从收藏中移除",
            },
            errorScreen: {
              titleText: "无法获取结果",
              helpText: "你可能需要检查你的网络连接",
            },
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
              searchByText: "搜索提供者",
            },
            noResultsScreen: {
              noResultsText: "无法找到相关结果",
              suggestedQueryText: "你可以尝试查询",
              reportMissingResultsText: "你认为该查询应该有结果？",
              reportMissingResultsLinkText: "点击反馈",
            },
          },
        },
      },
    },
  },
  // 国际化
  locales: {
    root: { label: "简体中文", ...zh },
  },
  markdown: {
    // 行号
    lineNumbers: true,
    // 数学方程
    math: true,
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true,
    },
    config: (md) => {
      // use more markdown-it plugins!
      md.use(mdItCustomAttrs, "image", {
        "data-fancybox": "gallery",
      });
    },
  },
});
