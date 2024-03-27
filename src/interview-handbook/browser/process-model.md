---
title: 浏览器进程模型
---

# {{ $frontmatter.title }}

## 何为进程

程序运行需要有它自己专属的内存空间，可以把这块内存空间简单的理解为进程

![](https://cdn.baiwumm.com/images/202403/22agjtr1iiw0vq77vdfei2zqg1oz0dy9.jpg)

## 何为线程

有了进程后，就可以运行程序的代码了。一个进程至少有一个线程，所以在进程开启后会自动创建一个线程来运行代码，该线程称之为主线程。如果程序需要同时执行多块代码，主线程就会启动更多的线程来执行代码，所以一个进程中可以包含多个线程。

![](https://cdn.baiwumm.com/images/202403/cr01t42l7e2g6py43kqrzq8hnjg5fnh9.jpeg)

## 浏览器有哪些进程和线程？

**浏览器是一个多进程多线程的应用程序**

浏览器内部工作极其复杂，为了避免相互影响，为了减少连环崩溃的几率，当启动浏览器后，它会自动启动多个进程。

![](https://cdn.baiwumm.com/images/202403/9w3xavq4sscxblno1sljf67tnvjecaq1.png)

可以在浏览器的任务管理器中查看当前的所有进程：

![](https://cdn.baiwumm.com/images/202403/63ljacuz8yzh91g9d4p70leehx65ebuo.png)

其中，最主要的进程有：

1.  `浏览器进程`：主要负责界面展示、用户交互、子进程管理等。浏览器进程内部会启动多个线程处理不同的任务
2.  `网络进程`：负责加载网络资源。网络进程内部会启动多个线程来处理不同的网络任务
3.  `渲染进程`：渲染进程启动后，会开启一个渲染主线程，负责执行 HTML、CSS、JS 代码，默认情况下，浏览器会为每个标签页开启一个新的渲染进程，以保证不同的标签页之间不会相互影响。

> 将来该默认模式可能会有所改变，可参考[chrome 官方说明文档](https://chromium.googlesource.com/chromium/src/+/main/docs/process_model_and_site_isolation.md#Modes-and-Availability)
