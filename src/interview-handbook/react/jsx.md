---
title: JSX 的理解
---

# {{ $frontmatter.title }}

::: tip
`JSX` 是快速生成 `react` 元素的一种语法，实际是 `React.createElement(component, props, ...children)` 的语法糖，同时 `JSX` 也是 `Js` 的语法扩展，包含所有 `Js` 功能。
:::

## JSX 发展历程

在之前，`Facebook` 是 `PHP` 大户，所以 `React` 最开始的灵感就来自于 `PHP`。在 2004 年这个时候，大家都还在用 `PHP` 的字符串拼接来开发网站。

```php
$str = "<ul>";
foreach ($talks as $talk) {
  $str += "<li>" . $talk->name . "</li>";
}
$str += "</ul>";
```

这种方式代码写出来不好看不说，还容易造成 `XSS` 等安全问题。应对方法是对用户的任何输入都进行转义 `Escape`，但是如果对字符串进行多次转义，那么反转义的次数也必须是相同的，否则会无法得到原内容，如果又不小心把 `HTML` 标签给转义了，那么 `HTML` 标签会直接显示给用户，从而导致很差的用户体验。
到了 2010 年，为了更加高效的编码，同时也避免转义 `HTML` 标签的错误，`Facebook` 开发了 `XHP`。`XHP` 是对 `PHP` 的语法拓展，它允许开发者直接在 `PHP` 中使用 `HTML` 标签，而不再使用字符串。

```php
$content = <ul />;
foreach ($talks as $talk) {
  $content->appendChild(<li>{$talk->name}</li>);
}
```

这样的话，所有 `HTML` 标签都使用不同于 `PHP` 的语法，我们可以轻易的分辨哪些需要转义哪些不需要转义。不久的后来，`Facebook` 的工程师又发现他们还可以创建自定义标签，而且通过组合自定义标签有助于构建大型应用。
到了 2013 年，前端工程师 Jordan Walke 向他的经理提出了一个大胆的想法：把 `XHP` 的拓展功能迁移到 `Js` 中，首要任务是需要一个拓展来让 `Js` 支持 `XML` 语法，该拓展称为 `JSX`。因为当时由于 `Node.js` 在`Facebook` 已经有很多实践，所以很快就实现了 `JSX`。

```jsx
const content = (
  <TalkList>
    {talks.map((talk) => (
      <Talk talk={talk} />
    ))}
  </TalkList>
);
```

## 为何使用 JSX

`React` 认为渲染逻辑本质上与其他 `UI` 逻辑内在耦合，比如在 `UI` 中需要绑定处理事件、在某些时刻状态发生变化时需要通知到 `UI`，以及需要在 `UI` 中展示准备好的数据。

`React` 并没有采用将标记与逻辑进行分离到不同文件这种人为地分离方式，而是通过将二者共同存放在称之为组件的松散耦合单元之中，来实现关注点分离。

`React` 不强制要求使用 `JSX`，但是大多数人发现，在 `JavaScript` 代码中将 `JSX` 和 `UI` 放在一起时，会在视觉上有辅助作用，它还可以使 `React` 显示更多有用的错误和警告消息。

简单来说，`JSX` 可以很好的描述页面 `html` 结构，很方便的在 `Js` 中写 `html` 代码，并具有 `Js` 的全部功能。

## JSX 优点

- 快速，`JSX` 执行更快，因为它在编译为 `JavaScript` 代码后进行了优化。
- 安全，与 `JavaScript` 相比，`JSX` 是静态类型的，大多是类型安全的。使用 `JSX` 进行开发时，应用程序的质量会变得更高，因为在编译过程中会发现许多错误，它也提供编译器级别的调试功能。
- 简单，语法简洁，上手容易。

## 如何使用 JSX

1. 使用表达式：在 `JSX` 中变量和表达式放在大括号 `{}` 中。

```jsx
const name = "Josh Perez";
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(element, document.getElementById("root"));
```

2. 指定属性：`JSX` 中使用 `camelCase`（小驼峰命名）来定义属性的名称，因此 `class` 变成了 `className`。

```jsx
const name = "Josh Perez";
const element = <h1 className="app">Hello, {name}</h1>;

ReactDOM.render(element, document.getElementById("root"));
```

3. 使用样式：`JSX` 中使用 `camelCase`（小驼峰命名） 语法来设置内联样式属性. `React` 会在指定元素数字后自动添加 `px`。

```jsx
const name = "Josh Perez";
const style = {
  fontSize: 100,
  color: "#FF0000",
};
const element = <h1 style={style}>Hello, {name}</h1>;

ReactDOM.render(element, document.getElementById("root"));
```

4. 使用注释：JSX 中注释写在 `{/*...我是一段注释...*/}` 中。

```jsx
ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    {/*注释...*/}
  </div>,
  document.getElementById("root")
);
```

## JSX 本质剖析

`JSX` 是 `JS` 的语法糖，编译时 `JSX` 会通过 `Babel` 编译成 `JS`。`React` 源码中使用 `React.createElement()` 方法来创建 `JSX`，该方法依次接收 `DOM` 节点（比如 `div`、`span`）、属性集合（比如`className`、`style`）和 `children`（子节点）三个参数，并返回一个 `JS` 对象，也就是虚拟 `DOM`。

```jsx
const element1 = <h1 className="greeting">Hello, world!</h1>;
// 等价
const element2 = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);
```

`React.createElement()` 会预先执行一些检查，以帮助你编写无错代码，但实际上它创建了一个这样的对象。这些对象被称为 `React` 元素，它们描述了你希望在屏幕上看到的内容，`React` 通过读取这些对象，然后使用它们来构建 `DOM` 以及保持随时更新。

```jsx
// 注意：这是简化过的结构
const element = {
  type: "h1",
  props: {
    className: "greeting",
    children: "Hello, world!",
  },
};
```

`React.createElement()` 方法是以下这样的：

```js
function createElement(tag, attrs, ...children) {
  attrs = attrs || {};

  // 返回一个JS对象，也就是虚拟Dom
  return {
    tag,
    attrs,
    children,
    key: attrs.key || null,
  };
}
```
