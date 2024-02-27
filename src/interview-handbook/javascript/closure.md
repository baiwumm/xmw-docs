---
title: 闭包
---

# {{ $frontmatter.title }}

## 什么是闭包

首先来看下 [MDN（Mozilla Developer Network）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures) 官网对于闭包这一概念的定义：
::: tip
闭包（closure）是一个函数以及其捆绑的周边环境状态（lexical environment，词法环境）的引用的组合。换而言之，闭包让开发者可以从内部函数访问外部函数的作用域。在 JavaScript 中，闭包会随着函数的创建而被同时创建。
:::
读起来不太好理解，实际上翻译成白话文就是：**在一个作用域中可以访问另一个函数内部的局部变量的函数**。

下面是闭包的一个基本使用：

```js
function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
```

可以发现在 `displayName` 这个作用域下访问了另外一个函数 `makeFunc` 下的局部变量 `name`
闭包的实现，实际上是利用了 `JavaScript` 中作用域链的概念，简单理解就是：在 `JavaScript` 中，如果在某个作用域下访问某个变量的时候，如果不存在，就一直向外层寻找，直到在全局作用域下找到对应的变量为止，这里就形成了所谓的作用域链。

## 闭包的特性

1. 闭包可以访问到父级函数的变量
2. 访问到父级函数的变量不会销毁

现在来看下闭包的相关应用，首先来看下下面这段代码：

```js
var age = 18;

function person() {
  age++;
  console.log(age);
}

person(); // 19
person(); // 20
person(); // 21
```

可以看到这里调用了 3 次函数，`age` 的值也从 18 增长到了 21，但是这么写会导致全局变量被污染，所以将 `age` 的定义移动到 `person` 函数内部，代码如下：

```js
function person() {
  var age = 18;
  age++;
  console.log(age);
}

person(); // 19
person(); // 19
person(); // 19
```

但是这又导致了另一个问题，变为局部变量的 `age` 不会自增了，所以那么就可以利用闭包的这个特性将每次调用时的 `age` 保存起来这样就可以实现变量的自增了，代码如下：

```js
function person() {
  var age = 18;
  return function () {
    age++;
    console.log(age);
  };
}

let getPersonAge = person();
getPersonAge(); // 19
getPersonAge(); // 20
getPersonAge(); // 21
```

每当调用 `getPersonAge()` 函数的时候，首先要获取 `age` 变量，因为 `JavaScript` 中存在作用域链的关系，所以会从 `person` 函数下得到对应的 `age`，因为闭包存在着闭包可以访问到父级函数的变量，且该变量不会销毁的特性所以上次的变量会被保留下来，所以可以做到自增的实现。

## 应用场景

- 改变字体大小

我们想在页面上添加一些可以调整字号的按钮。一种方法是以像素为单位指定 `body` 元素的 `font-size`，然后通过相对的 `em` 单位设置页面中其他元素（例如 `header`）的字号：

::: code-group

```js [JavaScript]
function makeSizer(size) {
  return function () {
    document.body.style.fontSize = size + "px";
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;
```

```html [HTML]
<p>Some paragraph text</p>
<h1>some heading 1 text</h1>
<h2>some heading 2 text</h2>

<a href="#" id="size-12">12</a>
<a href="#" id="size-14">14</a>
<a href="#" id="size-16">16</a>
```

```css [CSS]
body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
}

h1 {
  font-size: 1.5em;
}
h2 {
  font-size: 1.2em;
}
```

:::

- 循环注册事件

比如就可以利用闭包的特性做循环点击事件，比如下面的给输入框添加 onblur 事件：

需求：点击输入框，上面的提示栏显示对应的内容

::: code-group

```js [JavaScript]
function showHelp(help) {
  document.getElementById("help").innerHTML = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Your e-mail address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    // var func = function (i) {
    //   document.getElementById(helpText[i].id).onfocus = function () {
    //     showHelp(helpText[i].help);
    //   }
    // };
    // func(i);
    (function (i) {
      document.getElementById(helpText[i].id).onfocus = function () {
        showHelp(helpText[i].help);
      };
    })(i);
  }
}

setupHelp();
```

```html [HTML]
<p id="help">Helpful notes will appear here</p>
<p>E-mail: <input type="text" id="email" name="email" /></p>
<p>Name: <input type="text" id="name" name="name" /></p>
<p>Age: <input type="text" id="age" name="age" /></p>
```

:::

- 循环中的定时器

```js
var lis = document.querySelector(".test").querySelectorAll("li");
for (var i = 0; i < lis.length; i++) {
  // var fc = function (i) {
  //   setTimeout(function () {
  //     console.log(lis[i].innerHTML);
  //   }, 3000);
  // };
  // fc(i);
  (function (i) {
    setTimeout(function () {
      console.log(lis[i].innerHTML);
    }, 3000);
  })(i);
}
```

利用立即执行函数所形成的闭包来保存当前循环中的 `i` 的值，进而解决异步任务所带来的 `i` 最后为 4（循环结束后 i 的值）的问题

- 模拟私有方法

```js
var Counter = (function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
})();

console.log(Counter.value()); /* logs 0 */
Counter.increment();
Counter.increment();
console.log(Counter.value()); /* logs 2 */
Counter.decrement();
console.log(Counter.value()); /* logs 1 */
```

还可以将 `Counter` 存在其他变量中以便可以形成多个计数器

```js
var counterInstance1 = Counter();
var counterInstance2 = Counter();
// c1 计数器1
console.log(counterInstance1.getValue()); // 0
counterInstance1.increment();
counterInstance1.increment();
counterInstance1.increment();
console.log(counterInstance1.getValue()); // 3
counterInstance1.decrement();
console.log(counterInstance1.getValue()); // 2

// c2 计数器2
console.log(counterInstance2.getValue()); // 0
counterInstance2.increment();
counterInstance2.increment();
console.log(counterInstance2.getValue()); // 2
counterInstance2.decrement();
counterInstance2.decrement();
counterInstance2.decrement();
console.log(counterInstance2.getValue()); // -1
```

## 性能考量

**如果不是某些特定任务需要使用闭包，在其他函数中创建函数是不明智的，因为闭包在处理速度和内存消耗方面对脚本性能具有负面影响**。

例如，在创建新的对象或者类时，方法通常应该关联于对象的原型，而不是定义到对象的构造器中。原因是这将导致每次构造器被调用时，方法都会被重新赋值一次（也就是说，对于每个对象的创建，方法都会被重新赋值）。

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
  this.getName = function () {
    return this.name;
  };

  this.getMessage = function () {
    return this.message;
  };
}
```

在上面的代码中，我们并没有利用到闭包的好处，因此可以避免使用闭包。修改成如下：

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype = {
  getName() {
    return this.name;
  },
  getMessage() {
    return this.message;
  },
};
```

但我们不建议重新定义原型。可改成如下例子：

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype.getName = function () {
  return this.name;
};
MyObject.prototype.getMessage = function () {
  return this.message;
};
```
