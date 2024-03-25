---
title: cookie、sessionStorage 和 localStorage 的区别
---

# {{ $frontmatter.title }}

`cookie`、`sessionStorage` 和 `localStorage` 都是 `Web` 存储机制，用于在用户的浏览器上存储数据。但它们之间存在一些关键的区别，主要体现在数据生命周期、存储大小、数据安全性以及存储的数据类型等方面。

## 生命周期

- **cookie**：其生命周期由 `expires` 或 m `max-age` 属性决定。如果没有设置这些属性，那么 `cookie` 的生命周期就是会话期间，即当浏览器关闭时，`cookie` 会被销毁。但如果设置了这些属性，`cookie` 可以在用户的计算机上保留一段时间，甚至可能跨越多个会话。
- **sessionStorage**：其生命周期仅限于当前的浏览器窗口或标签页。当窗口或标签页被关闭时，`sessionStorage` 中的数据会被清除。
- **localStorage**：数据没有过期时间，会一直保存在用户的浏览器中，直到被手动删除或通过脚本清除。

## 存储大小

- **cookie**：每个域下的 `cookie` 数量是有限制的（通常最多 `20` 个），且单个 `cookie` 的大小也有限制（通常最大为 `4KB` ）。
- **sessionStorage** 和 **localStorage**：提供了更大的存储空间，一般能达到 `5MB` 左右，且没有数量限制

## 数据安全性

- **cookie**：数据存储在 `HTTP` 请求头中，因此可以被任何可以看到 `HTTP` 请求的中间人（例如，网络攻击者）捕获。因此，不应在 `cookie` 中存储敏感信息，除非进行了适当的加密。
- **sessionStorage** 和 **localStorage**：数据仅存储在用户的浏览器中，不会被发送到服务器，因此相对更安全。但仍然需要注意，恶意脚本可能能够访问这些数据，所以不应存储过于敏感的信息。

## 数据共享

- **cookie**：可以在多个页面和请求之间共享数据，因为它们是通过 `HTTP` 请求头传输的。
- **sessionStorage**：数据只能在同一个浏览器窗口或标签页的不同页面之间共享。如果打开了一个新的窗口或标签页，那么 `sessionStorage` 会是空的。
- **localStorage**：数据可以在同一浏览器的所有页面之间共享，无论是否在不同的窗口或标签页中。

## 数据类型

- **cookie**：主要存储字符串类型的数据。
- **sessionStorage** 和 **localStorage**：可以存储几乎任何类型的数据，如字符串、对象、数组等。
