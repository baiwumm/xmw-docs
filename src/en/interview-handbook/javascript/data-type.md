---
title: Data type
---

# {{ $frontmatter.title }}

`JavaScript` has eight data types: `Undefined`, `Null`, `Boolean`, `Number`, `String`, `Object`, `Symbol`, `BigInt`.
Where `Symbol` and `BigInt` are new data types in `ES6` :

- After [Symbol](https://es6.ruanyifeng.com/#docs/symbol) for creating unique and immutable data types, it is aimed to solve the problem of possible conflict of global variables.
- [BigInt](https://es6.ruanyifeng.com/#docs/number#BigInt-%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B) is a new type of digital data, it can be said format of arbitrary precision integers, With 'BigInt' you can safely store and manipulate large integers, even if the Number is outside the range of safe integers that `Number` can represent.

These data can be divided into raw data types and reference data types (complex data types), which are stored differently in memory.

Heap: Stores reference data types. Reference data types occupy large space and are not fixed in size. If stored in the stack, it will affect the performance of the program. The reference data type stores a pointer on the stack that points to the starting address of the entity in the heap, such as `Object, Array, Function. `
Stack: Store the original data type, simple data segments in the stack, occupy a small space, belong to the frequently used data, such as `String, Number, Null, Boolean. `

## Type judgment

### typeof

**example**：

```js
var num = 123;
console.log(typeof num); // output: "number"

var str = "hello";
console.log(typeof str); // output: "string"

var obj = {};
console.log(typeof obj); // output: "object"
```

**shortcoming**：Only base data types can be judged (except for `null`), and `Object` is returned if it is a reference data type (such as groups, functions, objects, etc.)

### instanceof

**example**：

```js
var myArray = [];
console.log(myArray instanceof Array); // output: true

var myString = new String("hello");
console.log(myString instanceof String); // output: true
```

**shortcoming**：The basic data type cannot be detected, because `instanceof` is the prototype object that detects whether the class currently judged appears in the instance, and will be found along the prototype chain, so we can change the direction of the prototype chain, resulting in inaccurate data type;

### constructor

**example**：

```js
var str = "123";
console.log(str.constructor === String);
```

**shortcoming**：`constructor` can be changed, resulting in inaccurate judgments;

### Object.prototype.toString.call()

**example**：

```js
var num = 123;
console.log(Object.prototype.toString.call(num)); // output: [object Number]

var str = "hello";
console.log(Object.prototype.toString.call(str)); // output: [object String]

var obj = {};
console.log(Object.prototype.toString.call(obj)); // output: [object Object]
```

## Sum up

1. `typeof` can only detect basic data types (except `null`), for arrays, objects, regular and other reference data types are returned as `Object`;
2. `instanceof` can not detect the basic data type, when detecting the reference type, it will look up the prototype chain, and return `true` as long as the prototype chain exists. We can also change the direction of the prototype chain at will, resulting in inaccurate detection results.
3. `constructor` can detect basic data types, can also distinguish between arrays and objects, because we can change `constructor`, arbitrary will lead to inaccurate detection results;
4. `Object.prototype.toString.call()` is relatively accurate, but not absolutely accurate, because the Symbol can be used `[Symbol.toStringTag]` modification, such as:

```js
const obj = {
  [Symbol.toStringTag]: "abc",
};
console.log(Object.prototype.toString.call(obj)); // output: [object abc]
```
