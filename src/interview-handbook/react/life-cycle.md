---
title: 类组件生命周期
---

# {{ $frontmatter.title }}

![](https://cdn.baiwumm.com/images/202403/biao6mmcxn7lv6u8j2dvqnabxy9tevbq.jpg)

## React v16.0 前的生命周期

### 挂载阶段

1. `constructor`(构造函数)
2. `componentWillMount`(组件将要渲染)
3. `render`(渲染组件)
4. `componentDidMount`(组件渲染完成)

### 更新阶段

分两种情况一种是 `state` 更新、一种是 `props` 更新

1. `componentWillReceiveProps`(组件 `props` 变更)
2. `shouldComponentUpdate`(组件是否渲染)
3. `componentWillUpdate`(组件将要更新)
4. `render`(渲染组件)
5. `componentDidUpdate`(组件更新完成)

### 卸载阶段

1. `componentWillUnmount`(组件将要卸载)

## React v16.0 后的生命周期

::: tip

1. 删除了几个 `will` 相关的生命周期
2. 新增了两个生命周期 `getDerivedStateFromProps`、`getSnapshotBeforeUpdate`
   :::

### 挂载阶段

1. `constructor`(构造函数)
2. `getDerivedStateFromProps`(派生 `props`)
3. `render`(渲染组件)
4. `componentDidMount`(组件渲染完成)

### 更新阶段

1. `getDerivedStateFromProps`(派生 `props`)
2. `shouldComponentUpdate`(组件是否渲染)
3. `render`(渲染组件)
4. `getSnapshotBeforeUpdate`(获取快照)
5. `componentDidUpdate`(组件更新完成)

### 卸载阶段

1. `componentWillUnmount`(组件将要卸载)

## getDerivedStateFromProps

`getDerivedStateFromProps` 首先它是 静态 方法, 方法参数分别下一个 `props`、上一个 `state`, 这个生命周期函数是为了替代 `componentWillReceiveProps` 而存在的, 主要作用就是监听 `props` 然后修改当前组件的 `state`

```js
// 监听 props 如果返回非空值, 则将返回值作为新的 state 否则不进行任何处理
static getDerivedStateFromProps(nextProps, prevState) {
  const { type } = nextProps;

  // 返回 nuyll: 对于 state 不进行任何操作
  if (type === prevState.type) {
    return null;
  }

  // 返回具体指则更新 state
  return { type }
}
```

## getSnapshotBeforeUpdate

`getSnapshotBeforeUpdate` 生命周期将在 `render` 之后 `DOM` 变更之前被调用, 此生命周期的返回值将作为 `componentDidUpdate` 的第三个参数进行传递, 当然通常不需要此生命周期, 但在重新渲染期间需要手动保留 `DOM` 信息时就特别有用

```js
getSnapshotBeforeUpdate(prevProps, prevState){
  console.log(5);
  return 999;
}

componentDidUpdate(prevProps, prevState, snapshot) {
  console.log(6, snapshot);
}
```

::: tip
大多数开发者使用 `componentWillUpdate` 的场景是配合 `componentDidUpdate`, 分别获取 渲染 前后的视图状态, 进行必要的处理, 但随着 `React` 异步渲染 等机制的到来, 渲染 过程可以被分割成多次完成, 还可以被 暂停 甚至 回溯, 这导致 `componentWillUpdate` 和 `componentDidUpdate` 执行前后可能会间隔很长时间, 足够使用户进行交互操作更改当前组件的状态, 这样可能会导致难以追踪的 `BUG`

1. 所以就新增了 `getSnapshotBeforeUpdate` 生命周期, 目的就是就是为了解决上述问题并取代 `componentWillUpdate`, 因为 `getSnapshotBeforeUpdate` 方法是在 `componentWillUpdate` 后(如果存在的话), 在 `React` 真正更改 `DOM` 前调用的, 它获取到组件状态信息会更加可靠
2. 除此之外, `getSnapshotBeforeUpdate` 还有一个十分明显的好处: 它调用的结果会作为第三个参数传入 `componentDidUpdate` 避免了 `componentWillUpdate` 和 `componentDidUpdate` 配合使用时将组件临时的状态数据存在组件实例上浪费内存
3. 同时 `getSnapshotBeforeUpdate` 返回的数据在 `componentDidUpdate` 中用完即被销毁, 效率更高
   :::
