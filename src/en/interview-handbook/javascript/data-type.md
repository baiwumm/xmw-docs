---
title: Data type
---
# {{ $frontmatter.title }}
`JavaScript` has eight data types: `Undefined`, `Null`, `Boolean`, `Number`, `String`, `Object`, `Symbol`, `BigInt`.
Where `Symbol` and `BigInt` are new data types in `ES6` :

* After [Symbol](https://es6.ruanyifeng.com/#docs/symbol) for creating unique and immutable data types, it is aimed to solve the problem of possible conflict of global variables.
* [BigInt](https://es6.ruanyifeng.com/#docs/number#BigInt-%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B) is a new type of digital data, it can be said format of arbitrary precision integers, With 'BigInt' you can safely store and manipulate large integers, even if the Number is outside the range of safe integers that `Number` can represent.

These data can be divided into raw data types and reference data types (complex data types), which are stored differently in memory.

Heap: Stores reference data types. Reference data types occupy large space and are not fixed in size. If stored in the stack, it will affect the performance of the program. The reference data type stores a pointer on the stack that points to the starting address of the entity in the heap, such as `Object, Array, Function. `
Stack: Store the original data type, simple data segments in the stack, occupy a small space, belong to the frequently used data, such as `String, Number, Null, Boolean. `