import { defineConfig } from 'vitepress'
import mdItCustomAttrs from 'markdown-it-custom-attrs'
import { zh, zhSearch } from './zh'
import { en, enSearch } from './en'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "XmwDocs",
  cleanUrls: true, // 生成简洁的 URL
  lastUpdated: true, // 最后更新时间
  srcDir: './src', // markdown 页面的目录，相对于项目根目录
  outDir: './dist', // 站点的构建输出位置
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],// 网站 icon
    // 谷歌分析
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-CC5DDF69MK' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-CC5DDF69MK');`
    ],
    // 微软统计
    [
      'script',
      { type: 'text/javascript' },
      `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "krtav71e82");`
    ],
    // 百度统计
    [
      'script',
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?0b38042c4e8762632dcea3ea62067338";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`
    ],
    // umami 统计
    [
      'script',
      { async: '', 'data-website-id': 'eb0f8672-c066-464e-a710-5839b1c1536e', src: 'https://analysis.baiwumm.com/script.js' }
    ],
    // 图片预览资源
    [
      "link",
      { rel: "stylesheet", href: "https://cdn.baiwumm.com/css/fancybox.css" },
    ],
    ["script", { src: "https://cdn.baiwumm.com/js/fancybox.umd.js" }],
  ],
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
    },
    // 本地搜索
    search: {
      provider: 'algolia',
      options: {
        appId: 'LB0GO1G90U',
        apiKey: 'd26c7093012aa3d440ab846f3d971989',
        indexName: 'baiwummdocs',
        ...zhSearch.zh,
        locales: {
          ...enSearch
        }
      }
    }
  },
  // 国际化
  locales: {
    root: { label: '简体中文', ...zh },
    en: { label: 'English', ...en }
  },
  markdown: {
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true
    },
    config: (md) => {
      // use more markdown-it plugins!
      md.use(mdItCustomAttrs, 'image', {
        'data-fancybox': "gallery"
      })
    }
  }
})
