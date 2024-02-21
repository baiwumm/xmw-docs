---
title: 数据类型
---

# {{ $frontmatter.title }}

`JavaScript` 共有八种数据类型，分别是 `Undefined`、`Null`、`Boolean`、`Number`、`String`、`Object`、`Symbol`、`BigInt`。
其中 `Symbol` 和 `BigInt` 是 `ES6` 中新增的数据类型：

- [Symbol](https://es6.ruanyifeng.com/#docs/symbol) 代表创建后独一无二且不可变的数据类型，它主要是为了解决可能出现的全局变量冲突的问题。
- [BigInt](https://es6.ruanyifeng.com/#docs/number#BigInt-%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B) 是一种数字类型的数据，它可以表示任意精度格式的整数，使用 `BigInt` 可以安全地存储和操作大整数，即使这个数已经超出了 `Number` 能够表示的安全整数范围。

这些数据可以分为原始数据类型和引用数据类型（复杂数据类型），他们在内存中的存储方式不同。

堆： 存放引用数据类型，引用数据类型占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址，如 `Object、Array、Function。`

栈： 存放原始数据类型，栈中的简单数据段，占据空间小，属于被频繁使用的数据，如 `String、Number、Null、Boolean。`

## 类型判断

### typeof

**示例**：

```js
var num = 123;
console.log(typeof num); // 输出: "number"

var str = "hello";
console.log(typeof str); // 输出: "string"

var obj = {};
console.log(typeof obj); // 输出: "object"
```

**缺点**：只能判断基础数据类型（除 `null` 以外），如果是引用数据类型（如数组、函数、对象等）会返回 `Object`

### instanceof

**示例**：

```js
var myArray = [];
console.log(myArray instanceof Array); // 输出: true

var myString = new String("hello");
console.log(myString instanceof String); // 输出: true
```

**缺点**：无法检测基础数据类型，因为 `instanceof` 是检测当前判断的类是否出现在实例的原型对象，会循着原型链寻找，所以我们可以改变原型链的指向导致数据类型不准确；

### constructor

**示例**：

```js
var str = "123";
console.log(str.constructor === String);
```

**缺点**：`constructor` 可以改变，会导致判断不准确；

### Object.prototype.toString.call()

**示例**：

```js
var num = 123;
console.log(Object.prototype.toString.call(num)); // 输出: [object Number]

var str = "hello";
console.log(Object.prototype.toString.call(str)); // 输出: [object String]

var obj = {};
console.log(Object.prototype.toString.call(obj)); // 输出: [object Object]
```

## 总结

1. `typeof` 只能检测基本数据类型（除 `null`），对于数组、对象、正则等引用数据类型都返回为 `Object`；
2. `instanceof` 不能检测基本数据类型，检测引用类型时会顺着原型链往上找，只要原型链上存在就会返回 `true`，我们也可以随意更改原型链的指向，导致检测结果不准确；
3. `constructor` 可以检测基本数据类型，也能分辨出数组和对象，因为我们可以更改 `constructor`，随意会导致检测结果不准确；
4. `Object.prototype.toString.call()` 是相对准确的，但是也不是百分百准确，因为可以用过符号 `[Symbol.toStringTag]` 修改，比如：

```js
const obj = {
  [Symbol.toStringTag]: "abc",
};
console.log(Object.prototype.toString.call(obj)); // 输出: [object abc]
```
