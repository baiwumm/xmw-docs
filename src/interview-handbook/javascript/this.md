---
title: this 指向机制
---

# {{ $frontmatter.title }}

::: tip
`this` 的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定 `this` 到底指向谁，实际上 `this` 的最终指向的是那个调用它的对象。
:::

`this` 的绑定规则有六种方式，分别为**默认绑定**、**隐式绑定**、**隐式丢失**、**显示绑定**、**new 绑定**、**箭头函数**

## 默认绑定

::: info
函数本身是没有词法作用域的，它的词法作用域是由函数声明的位置确定的或者 `this` 坚决不能访问词法作用域内部
:::

```js
function foo() {
  console.log(this);
}

// window中直接调用 // 非 use strict
foo();

// 等同于
window.foo();

// window是Window的一个实例 // window instanceof Window //true
```

## 隐试绑定

::: info
当一个函数被一个对象所引用（非调用），再次调用时，函数中的 `this` 会指向对象
:::

```js
function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
  foo: foo,
  // 相当于下面这样
  // foo: function foo(){
  //	console.log(this.a)
  // }
};
obj.foo(); // 2
```

## 隐试丢失

::: info
隐式丢失是隐式绑定的一种，当一个函数被多个函数链式调用时，函数中的 `this` 最终指向引用函数的对象
:::

```js
function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
  foo: foo,
};
var obj2 = {
  a: 3,
  obj: obj,
};
obj2.obj.foo(); // 2
```

## 显示绑定

::: info
显示绑定就是使用 `call`、`apply` 或 `bind` 方法人为干预他，让他代指谁
:::

1. **call**：`Function` 实例的 `call()` 方法会以给定的 `this` 值和逐个提供的参数调用该函数。

```js
function foo(n) {
  console.log(this.a, n);
}
var obj = {
  a: 2,
};
foo.call(obj, 100); // 2 100
```

2. **apply**：`Function` 实例的 `apply()` 方法会以给定的 `this` 值和作为数组（或类数组对象）提供的 `arguments` 调用该函数。

```js
function foo(n, m) {
  console.log(this.a, n, m);
}
var obj = {
  a: 2,
};
foo.apply(obj, [100, 200]); // 2 100 200
```

3. **bind**：`Function` 实例的 `bind()` 方法创建一个新函数，当调用该新函数时，它会调用原始函数并将其 `this` 关键字设置为给定的值，同时，还可以传入一系列指定的参数，这些参数会插入到调用新函数时传入的参数的前面。

```js
function foo(n, m) {
  console.log(this.a, n, m);
}
var obj = {
  a: 2,
};
var bar = foo.bind(obj, 100, 200);
bar(); // 2 100 200
```

## new 绑定

::: info
当使用 `new` 关键字进行实例化一个构造函数时，`this` 最终指向该实例化对象
:::

```js
Person.prototype.say = function () {
  console.log("hello " + this.name);
};
function Person(name) {
  this.name = name;
  // 相当于下面
  // var this = {
  // 	name: name,
  // 	__proto__:Person.prototype
  // }
  // return this
}
var person1 = new Person("Dolphin");
person1.say();
```

**`new` 的作用其实就是在构造函数中创建一个 `this` 对象，然后构造函数中的内容就相当于往 `this` 里面挂属性，另外还会放一个实例对象的隐式原型，其值就是构造函数的显示原型，最终 `return` 出这个 `this` 对象**

## 箭头函数

::: info
箭头函数没有 `this` 这个概念，在箭头函数中的 `this` 指向了外层第一个非箭头函数
:::

```js
var a = 1;
var bar = () => {
  console.log(this.a);
};
bar(); // 1
```

这个很好理解，箭头函数中的 `this` 就是指向了外层第一个非箭头函数，外层是全局，直接输出 1

## 实例

定义函数与对象并调用，注意只有调用函数才会使 `this` 指向调用者，但箭头函数除外。

```js
function s() {
  console.log(this);
}

// window中直接调用 // 非 use strict
s(); // Window // 等同于window.s()，调用者为window
// window是Window的一个实例 // window instanceof Window //true

// 新建对象s1
var s1 = {
  t1: function () {
    // 测试this指向调用者
    console.log(this); // s1
    s(); // Window // 此次调用仍然相当 window.s()，调用者为window
  },
  t2: () => {
    // 测试箭头函数，this并未指向调用者
    console.log(this);
  },
  t3: {
    // 测试对象中的对象
    tt1: function () {
      console.log(this);
    },
  },
  t4: {
    // 测试箭头函数以及非函数调用this并未指向调用者
    tt1: () => {
      console.log(this);
    },
  },
  t5: function () {
    // 测试函数调用时箭头函数的this的指向，其指向了上一层对象的调用者
    return {
      tt1: () => {
        console.log(this);
      },
    };
  },
};
s1.t1(); // s1对象 // 此处的调用者为 s1 所以打印对象为 s1
s1.t2(); // Window
s1.t3.tt1(); // s1.t3对象
s1.t4.tt1(); // Window
s1.t5().tt1(); // s1对象
```

比较特殊的例子，我们调用同一个方法，但是得到的 `this` 是不同的，要注意实际上 `this` 的最终指向的是那个调用它的对象。

```js
var s1 = {
  t1: function () {
    console.log(this);
  },
};
s1.t1(); // s1对象
var p = s1.t1;
p(); // Window

// 注意此时将方法赋值给了p，此时直接调用p得到的this是Window
// 其实这个例子也并不是很特殊，因为函数也是一个对象，此时p是被赋值了一个函数
console.log(p); // ƒ (){console.log(this);}
// 而此函数是被window调用的，由此，this指向了window
```
