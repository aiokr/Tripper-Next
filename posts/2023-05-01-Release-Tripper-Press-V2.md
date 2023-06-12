---
title: 宣布全新 Tripper Press
date: 2023-06-01
type: Draft
cover: 'https://imgur.lzmun.com/picgo/after2022/apple-store-wuhan'
url: release-tr-v2
---

> 本文尚未完成，持续更新中

经过一段时间的开发，全新的 Tripper Press 网站终于上线了。

新的站点使用 Next.js 搭建，部署在 Vercel 上。文章和站点的源代码暂时还储存在同一个仓库中，由 [Contentlayer](https://www.contentlayer.dev/) 对文章数据进行管理。相比起之前使用 Hexo 驱动的静态博客，Next.js 可以更方便地添加 React 的插件，使用 npm 管理依赖项，也能更方便地使用 Vercel 提供的各种功能。

和之前的站点一样，新的站点也同样开源在 [aiokr/Tripper-Next: New Tripper Press Website](https://github.com/aiokr/Tripper-Next)，欢迎 Star。

## 后续需要补全的功能

- [ ] 文章评论挂件
- [x] 夜间模式支持
- [x] RSS Feed 的输出
- [ ] Sitemap 的输出
- [ ] 照片集的功能


## 碎碎念

之前的网站是基于 Hexo 建立的纯静态网站，文章和内容储存在同一个仓库中，通过 Git 的子仓库功能来分别进行管理。但是毕竟文章也需要 Push 到仓库中，才能触发构建，因此最后也放弃了通过子仓库管理文章，倒是在开发主题的时候会使用专门维护主题的仓库。

在开发 V2 的时候，首要的想法是，能比较好地展示照片和视频，能方便地更新文章。在刚刚开始的时候便使用了 Strapi + Vue 的前后端分离的设计。但是之后由于 Railway 的价格过于昂贵，在自建服务器上 Strapi 一直架设不起来，遂放弃这个想法，转而回到静态生成器的怀抱。

Contentlayer 支持多种不同的内容源引入，在目前，还是使用传统的文章和内容在同一仓库的形式，之后应该会给文章另开一个仓库，每次文章的仓库更新时，触发站点的自动构建。

在选择静态生成器的框架时，一开始在基于 Vue 的 Gridsome 和 Nuxt.js 之间纠结，但是由于 Gridsome 很久没有维护，在 M1 上甚至无法安装（为了安装 M1，将 node 卸载准备换成 nvm 的时候，还把系统整崩了）， Nuxt.js 和 Vue 的文件形式并不相容索性直接抛弃之前写的前端页面，从头开始学习 Next.js 。

使用 Next.js 时，便直接上了 Next.js 13.3 版本，这一个版本新增了 app/ 目录作为路由，并且不再支持 getStaticPaths、getStaticProps 等函数来判断时服务端渲染还是静态生成。并且新版本的文档也不算非常完善，还有很多空缺。

开发的过程中 ChatGPT 也帮了很大的忙。很多时候都是想当然地写一段代码，然后把代码和报错一起抛给 GPT，问他该怎么改，然后 GPT 就会把正确的代码写出来了。在 GPT 问世之前，只依靠查文档和搜索引擎，我也不可能这么快地从零开始能使用一个新的框架写出一个新的网站。
