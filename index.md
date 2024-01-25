---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: XmwDocs
  text: 个人开发项目记录文档
  tagline: 后台模板、组件封装、面试题、前端开发小技巧
  actions:
    - theme: brand
      text: 博客
      link: https://baiwumm.com/
    - theme: alt
      text: API Examples
      link: /api-examples
  image:
    src: /logo.svg
    alt: Logo

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---
<style>
:root {
  --main-color-1:#FCD000;
  --main-color-2:#FF3C41;
  --main-color-3:#000000;
  --main-color-4:#0EBEFF;
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(45deg, var(--main-color-1) 20%, var(--main-color-4));

  --vp-home-hero-image-background-image: linear-gradient(135deg, var(--main-color-1) 50%,var(--main-color-4) 20%);
  --vp-home-hero-image-filter: blur(44px);

  --vp-button-brand-bg:var(--main-color-4);
  --vp-button-brand-hover-bg: var(--main-color-1);
  --vp-c-brand-1: var(--main-color-4);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>

