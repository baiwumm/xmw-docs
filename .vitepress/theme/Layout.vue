<!-- .vitepress/theme/Layout.vue -->

<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { nextTick, provide } from 'vue'

const { isDark, lang } = useData();

const { Layout } = DefaultTheme

const enableTransitions = () =>
  'startViewTransition' in document &&
  window.matchMedia('(prefers-reduced-motion: no-preference)').matches

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )}px at ${x}px ${y}px)`
  ]

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`
    }
  )
})
</script>

<template>
  <Layout />
</template>

<style>
:root {
  --main-color-1:#FCD000;
  --main-color-2:#FF3C41;
  --main-color-3:#000000;
  --main-color-4:#0EBEFF;
  --main-color-5:#16B777;
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(45deg, var(--main-color-5) 20%, var(--main-color-4));

  --vp-home-hero-image-background-image: linear-gradient(45deg, var(--main-color-1) 65%,var(--main-color-4) 35%);

  --vp-button-brand-bg:var(--main-color-5);
  --vp-button-brand-hover-bg: var(--main-color-4);
  --vp-c-brand-1: var(--main-color-5);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(88px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(100px);
  }
}

::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

.VPSwitchAppearance {
  width: 22px !important;
}

.VPSwitchAppearance .check {
  transform: none !important;
}

img[data-fancybox=gallery] {
  cursor: zoom-in;
  transition: .3s all;
  filter: blur(0);
}

img[data-fancybox=gallery]:hover {
  filter: blur(0) brightness(0.75)
}

/* 首页背景 */
.is-home {
  background-image: url('/background.svg');
  background-size:100%;
  background-repeat: no-repeat;
}

/* 修改滚动条样式 */
::-webkit-scrollbar {
  width: 10px;
  height: 10px
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  border: 2px solid transparent;
  background-clip: padding-box;
  background-color: rgba(191, 191, 191, .65);
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: rgba(73, 177, 245, .2);
  display: none
}

::-webkit-scrollbar-track-piece {
  display: none
}
</style>