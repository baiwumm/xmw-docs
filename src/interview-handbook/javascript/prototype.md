---
title: 原型和原型链
---

# {{ $frontmatter.title }}

## 构造函数

构造函数和普通函数本质上没什么区别，只不过使用了 `new` 关键字创建对象的函数，被叫做了构造函数。构造函数的首字母一般是大写，用以区分普通函数，当然不大写也不会有什么错误。

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.species = "人类";
  this.say = function () {
    console.log("Hello");
  };
}

let per1 = new Person("xiaoming", 20);
```

## 原型对象

在 `js` 中，每一个函数类型的数据，都有一个叫做 `prototype` 的属性，这个属性指向的是一个对象，就是所谓的原型对象。

对于原型对象来说，它有个 `constructor` 属性，指向它的构造函数。

```js
Person.prototype.constructor === Person;
```

那么这个原型对象有什么用呢？最主要的作用就是用来存放实例对象的公有属性和公有方法。
在上面那个例子里 `species` 属性和 `say` 方法对于所有实例来说都一样，放在构造函数里，那每创建一个实例，就会重复创建一次相同的属性和方法，显得有些浪费。这时候，如果把这些公有的属性和方法放在原型对象里共享，就会好很多。

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.species = "人类";
Person.prototype.say = function () {
  console.log("Hello");
};

let per1 = new Person("xiaoming", 20);
let per2 = new Person("xiaohong", 19);

console.log(per1.species); // 人类
console.log(per2.species); // 人类

per1.say(); // Hello
per2.say(); // Hello
```

可是这里的 `species` 属性和 `say` 方法不是实例对象自己的，为什么可以直接用点运算符访问？这是因为在 `js` 中，对象如果在自己的这里找不到对应的属性或者方法，就会查看构造函数的原型对象，如果上面有这个属性或方法，就会返回属性值或调用方法。所以有时候，我们会用 `per1.constructor` 查看对象的构造函数：

```js
console.log(per1.constructor); // Person()
```

这个 `constructor` 是原型对象的属性，在这里能被实例对象使用，原因就是上面所说的。那如果原型对象上也没有找到想要的属性呢？这就要说到原型链了。

## 原型链

既然这个是对象类型的属性，而原型对象也是对象，那么原型对象就也有这个属性，但是原型对象的 `__proto__` 又是指向哪呢？

我们来分析一下，既然原型对象也是对象，那我们只要找到对象的构造函数就能知道 `__proto__` 的指向了。而 js 中，对象的构造函数就是 `Object()`，所以对象的原型对象，就是 `Object.prototype`。既然原型对象也是对象，那原型对象的原型对象，就也是 `Object.prototype`。不过 `Object.prototype` 这个比较特殊，它没有上一层的原型对象，或者说是它的 `__proto__` 指向的是 null。

![](https://cdn.baiwumm.com/images/202402/v7q6frbw4o9lt359atc1mlwv3bpet44t.png)

整个查找过程都是顺着 `__proto__` 属性，一步一步往上查找，形成了像链条一样的结构，这个结构，就是原型链。所以，原型链也叫作隐式原型链。

正是因为这个原因，我们在创建对象、数组、函数等等数据的时候，都自带一些属性和方法，这些属性和方法是在它们的原型上面保存着，所以它们自创建起就可以直接使用那些属性和方法。

## 函数也是一种对象

函数在 `js` 中，也算是一种特殊的对象，所以，可以想到的是，函数是不是也有一个 `__proto__` 属性？答案是肯定的，既然如此，那就按上面的思路，先来找找函数对象的构造函数。

在 `js` 中，所有函数都可以看做是 `Function()` 的实例，而 `Person()` 和 `Object()` 都是函数，所以它们的构造函数就是 `Function()`。`Function()` 本身也是函数，所以 `Function()` 也是自己的实例，听起来既怪异又合理，但是就是这么回事。

```js
console.log(Person.constructor === Function); // true
console.log(Object.constructor === Function); // true
console.log(Function.constructor === Function); // true
```

既然知道了函数的构造函数，那么函数的 `__proto__` 指向我们也就知道了，就是 `Function.prototype`。

```js
console.log(Person.__proto__ === Function.prototype); // true
console.log(Object.__proto__ === Function.prototype); // true
console.log(Function.__proto__ === Function.prototype); // true
```

## 总结

1. 构造函数是使用了 `new` 关键字的函数，用来创建对象，所有函数都是 `Function()` 的实例
2. 原型对象是用来存放实例对象的公有属性和公有方法的一个公共对象，所有原型对象都是 `Object()` 的实例
3. 原型链又叫隐式原型链，是由 `__proto__` 属性串联起来，原型链的尽头是 `Object.prototype`
4. 我们要记住几个等式：

- 构造函数的原型对象默认有个 `constructor` 属性，指向构造函数本身

```js
function User() {}
let u = new User();
console.log(User.prototype.constructor === User); // true
```

- 实例对象默认有个 `__proto__` 属性，指向构造函数的原型对象

```js
console.log(u.__proto__ === User.prototype); // true
```

- 实例对象的 `constructor` 属性，指向构造函数本身

```js
console.log(u.constructor === User); //true
```
