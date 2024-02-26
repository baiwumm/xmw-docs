// Comment.vue
<script lang="ts" setup>
import { onMounted } from 'vue'
import { inBrowser } from 'vitepress'
import Gitalk from 'gitalk'

const init = () => {
  if (inBrowser) {
    let gitTalk = new Gitalk({
      id: location.pathname, // 可选。默认为 location.href
      owner: 'baiwumm', // GitHub repository 所有者
      repo: 'xmw-docs', // GitHub repo
      clientID: '0320944722a6d9085df5', // clientID
      clientSecret: 'd3b8c6104cc35f953338db1dd8eff1445f94b079', // clientSecret
      admin: ['baiwumm'], // GitHub repo 所有者
      labels: ['GitTalk'], // GitHub issue 标签
      proxy: 'https://gitalk.baiwumm.com/github_access_token',
      createIssueManually: true //如果当前页面没有相应的 issue 且登录的用户属于 admin，则会自动创建 issue。如果设置为 true，则显示一个初始化页面，创建 issue 需要点击 init 按钮。
    })
    gitTalk.render('gitalk-page-container')
  }
}

onMounted(() => {
  init()
})
</script>
<template>
  <div id="gitalk-page-container"></div>
</template>
