---
title: Prototype and prototype chain
---

# {{ $frontmatter.title }}

## constructor

A constructor is essentially no different from a normal function, except that a function that uses the `new` keyword to create an object is called a constructor. The first letter of the constructor is usually capitalized to distinguish ordinary functions, of course, there is nothing wrong with not capitalized.

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.species = "Humans";
  this.say = function () {
    console.log("Hello");
  };
}

let per1 = new Person("xiaoming", 20);
```

## Prototype object

In `js`, each function type of data, there is a property called `prototype`, this property points to an object, is the so-called prototype object.

For a prototype object, it has a `constructor` property that points to its constructor.

```js
Person.prototype.constructor === Person;
```

So what is the use of this prototype object? The main purpose is to store the public properties and methods of the instance object.
In the above example, the `species` attribute and the `say` method are the same for all instances, and in the constructor, the same attribute and method will be created repeatedly every time an instance is created, which is a bit wasteful. In this case, it is much better if these common properties and methods are shared in the prototype object.

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.species = "Humans";
Person.prototype.say = function () {
  console.log("Hello");
};

let per1 = new Person("xiaoming", 20);
let per2 = new Person("xiaohong", 19);

console.log(per1.species); // Humans
console.log(per2.species); // Humans

per1.say(); // Hello
per2.say(); // Hello
```

But here the `species` property and the `say` method are not the instance object's own, so why can they be accessed directly with the dot operator? This is because in `js`, if the object cannot find the corresponding property or method in its own here, it will look at the prototype object of the constructor, and if it has this property or method, it will return the property value or call the method. So sometimes, we use `per1.constructor` to see the object's constructor:

```js
console.log(per1.constructor); // Person()
```

This `constructor` is a property of the prototype object that can be used here by the instance object for the reason described above. What if the desired property is not found on the prototype object? Which brings us to the prototype chain.

## Prototype chain

Since this is a property of the object type, and the prototype object is also an object, the prototype object has this property, but where does the prototype object's `__proto__` point to?

Let's analyze it. Since the prototype object is also an object, we just need to find the object's constructor to know the point of `__proto__`. In js, the Object constructor is `Object()`, so the prototype object of the object is `object.prototype`. Since the prototype Object is also an object, the prototype object of the prototype object is also `object.prototype`. Object.prototype, however, is special in that it has no previous prototype Object, or its `__proto__` points to null.

![](https://cdn.baiwumm.com/images/202402/v7q6frbw4o9lt359atc1mlwv3bpet44t.png)

The whole search process is along the `__proto__` attribute, step by step up to find, forming a chain-like structure, this structure, is the prototype chain. Therefore, the prototype chain is also called the implicit prototype chain.

It is for this reason that when we create objects, arrays, functions, and so on, we have some properties and methods that are stored on their prototypes, so they can be created directly to use those properties and methods.

## A function is also an object

Function in `js`, is also a kind of special object, so, can think of, does the function also have a `__proto__` property? The answer is yes, in that case, let's find the constructor of the function object in the same way as above.

In `js`, all functions can be regarded as instances of `Function()`, and `Person()` and `Object()` are functions, so their constructors are `Function()`. `Function()` is itself a Function, so `Function()` is also its own instance, which sounds weird and reasonable, but that's the way it is.

```js
console.log(Person.constructor === Function); // true
console.log(Object.constructor === Function); // true
console.log(Function.constructor === Function); // true
```

Now that we know the constructor of the Function, we know that the function `__proto__` refers to us, that is, `function.prototype`.

```js
console.log(Person.__proto__ === Function.prototype); // true
console.log(Object.__proto__ === Function.prototype); // true
console.log(Function.__proto__ === Function.prototype); // true
```

## Sum up

1. Constructors are functions that use the `new` keyword to create objects, and all functions are instances of `Function()`
2. A prototype Object is a public object that holds the public properties and methods of an instance object. All prototype objects are instances of Object()
3. The prototype chain, also known as the implicit prototype chain, is connected by the `__proto__` attribute, and the end of the prototype chain is `Object.prototype`
4. There are a few equations to keep in mind:

- By default, the prototype object of a constructor has a `constructor` property that points to the constructor itself

```js
function User() {}
let u = new User();
console.log(User.prototype.constructor === User); // true
```

- Instance objects default to a `__proto__` attribute, which points to the constructor's prototype object

```js
console.log(u.__proto__ === User.prototype); // true
```

- The instance object's `constructor` attribute, which points to the constructor itself

```js
console.log(u.constructor === User); //true
```
