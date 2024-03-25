---
title: 为什么调用 setState 而不是直接改变 state
---

# {{ $frontmatter.title }}

在 `React` 中，通过调用 `setState()` 方法来更新组件的状态是推荐的做法，而直接修改 `state` 属性是不被建议的。

1. **异步更新**：`setState()` 方法是异步执行的，`React` 会对多次连续的 `setState()` 调用进行合并和优化，从而提高性能。如果直接修改 `state` 属性，可能会导致不可预料的结果。
2. **批量更新**：当使用 `setState()` 方法时，`React` 会将多次状态更新合并为单个更新，最终只触发一次重新渲染。这样可以减少不必要的重渲染，提高性能。
3. **状态合并**：`setState()` 方法可以接受一个对象或一个函数作为参数。如果传递一个对象，它会与当前状态进行浅合并。如果传递一个函数，则可以获取到先前的状态，并返回一个新的状态对象。这种方式可以确保状态的正确合并，防止出现意外的数据丢失或覆盖。
4. **触发生命周期方法**：通过 `setState()` 方法更新状态，会触发组件的生命周期方法，例如 `componentDidUpdate()` ，从而可以在更新完成后执行其他逻辑操作。

总之，直接修改 `state` 属性可能会导致不可预测的行为和性能问题。使用 `setState()` 方法可以保证异步更新、批量更新、状态合并以及触发生命周期方法，从而更好地管理组件的状态和更新。