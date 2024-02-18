---
title: Daily Hot - Gather the hot spots of the whole network, the hot view is endless
---

<div align="center">
<img alt="logo" src="https://hot.baiwumm.com/logo.svg" width="80"/>
<h2>Daily Hot</h2>
<p>Gather the hot spots of the whole network, the hot view is endless</p>
</div>

## Project information

- Project preview：https://hot.baiwumm.com/
- Technology stack：[React](https://react.dev/)、[Vite](https://www.vitejs.net/)、[Antd](https://ant-design.antgroup.com/)

## Hot platform

|                                                   **Logo**                                                   | **platform** |        **category**        |                       **api**                        |
| :----------------------------------------------------------------------------------------------------------: | :----------: | :------------------------: | :--------------------------------------------------: |
|      <img alt="weibo" src="https://hot.baiwumm.com/weibo.svg" width="30" style="display:inline-block"/>      |    weibo     |   Top trending Searches    |      [weibo](https://api.baiwumm.com/hot/weibo)      |
|   <img alt="bilibili" src="https://hot.baiwumm.com/bilibili.svg" width="30" style="display:inline-block"/>   |   bilibili   |          Hot List          |   [bilibili](https://api.baiwumm.com/hot/bilibili)   |
|     <img alt="TikTok" src="https://hot.baiwumm.com/douyin.svg" width="30" style="display:inline-block"/>     |    TikTok    |          Hot List          |     [douyin](https://api.baiwumm.com/hot/douyin)     |
|    <img alt="Toutiao" src="https://hot.baiwumm.com/toutiao.svg" width="30" style="display:inline-block"/>    |   Toutiao    |          Hot list          |    [toutiao](https://api.baiwumm.com/hot/toutiao)    |
|      <img alt="Zhihu" src="https://hot.baiwumm.com/zhihu.svg" width="30" style="display:inline-block"/>      |    Zhihu     |          Hot list          |      [zhihu](https://api.baiwumm.com/hot/zhihu)      |
|      <img alt="Baidu" src="https://hot.baiwumm.com/baidu.svg" width="30" style="display:inline-block"/>      |    Baidu     |   Top trending Searches    |      [baidu](https://api.baiwumm.com/hot/baidu)      |
| <img alt="Baidu Post" src="https://hot.baiwumm.com/baidutieba.svg" width="30" style="display:inline-block"/> |  Baidu Post  | Hot Discussion Leaderboard | [baidutieba](https://api.baiwumm.com/hot/baidutieba) |
|      <img alt="Tencent" src="https://hot.baiwumm.com/qq.svg" width="30" style="display:inline-block"/>       |   Tencent    |          Hot List          |         [qq](https://api.baiwumm.com/hot/qq)         |
|     <img alt="Junjin" src="https://hot.baiwumm.com/juejin.svg" width="30" style="display:inline-block"/>     |    Junjin    |          Hot list          |     [juejin](https://api.baiwumm.com/hot/juejin)     |
|    <img alt="Netease" src="https://hot.baiwumm.com/netease.svg" width="30" style="display:inline-block"/>    |   Netease    |          Hot list          |    [netease](https://api.baiwumm.com/hot/netease)    |
|        <img alt="LOL" src="https://hot.baiwumm.com/lol.svg" width="30" style="display:inline-block"/>        |     LOL      |       Update notice        |        [lol](https://api.baiwumm.com/hot/lol)        |
|   <img alt="Thepaper" src="https://hot.baiwumm.com/thepaper.svg" width="30" style="display:inline-block"/>   |   Thepaper   |          Hot list          |   [thepaper](https://api.baiwumm.com/hot/thepaper)   |

> The above API is based on [Nest.js](https://nest.nodejs.cn/)

## Project operation

```
// Clone project
git clone https://github.com/baiwumm/react-daily-hot.git

// Installation dependency
pnpm install

// operation
pnpm dev
```

## Vercel Private deployment

1. `Fork` Project
2. Click on `New Project` on the `Vercel` website
3. Click `Import Git Repository` and select the project you fork and click `import`
4. Fill in `PROJECT NAME` yourself, `FRAMEWORK PRESET` select `Other` and then directly click `Deploy` and wait until deployment is complete

## Vecel Local deployment

```
// Global installation vercel
npm i -g vercel

// Login
vercel login

// Project push
vercel

// Mount production
vercel --prod
```

> Refer to the article for specific tutorials：[How do I use Vercel to host a static website](https://baiwumm.com/p/5zzij7bt)

## Others

> If you want to integrate other platforms' hot search or hot API, you can raise Issues
