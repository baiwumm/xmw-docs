---
title: 数据类型
---
# 数据类型
`JavaScript` 共有八种数据类型，分别是 `Undefined`、`Null`、`Boolean`、`Number`、`String`、`Object`、`Symbol`、`BigInt`。
其中 `Symbol` 和 `BigInt` 是 `ES6` 中新增的数据类型：

* [Symbol](https://es6.ruanyifeng.com/#docs/symbol) 代表创建后独一无二且不可变的数据类型，它主要是为了解决可能出现的全局变量冲突的问题。
* [BigInt](https://es6.ruanyifeng.com/#docs/number#BigInt-%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B) 是一种数字类型的数据，它可以表示任意精度格式的整数，使用 `BigInt` 可以安全地存储和操作大整数，即使这个数已经超出了 `Number` 能够表示的安全整数范围。

这些数据可以分为原始数据类型和引用数据类型（复杂数据类型），他们在内存中的存储方式不同。

堆： 存放引用数据类型，引用数据类型占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址，如 `Object、Array、Function。`

栈： 存放原始数据类型，栈中的简单数据段，占据空间小，属于被频繁使用的数据，如 `String、Number、Null、Boolean。`