---
title: Class component life cycle
---
# Class component life cycle

## Life cycle before React v16.0
### Mount phase
1. `constructor`
2. `componentWillMount`(Component to render)
3. `render`(Rendering component)
4. `componentDidMount`(Component rendering complete)

### Renewal phase
There are two cases: one is the `state` update, the other is the `props` update
1. `componentWillReceiveProps`(Component props change)
2. `shouldComponentUpdate`(Component render or not)
3. `componentWillUpdate`(Component to be updated)
4. `render`(Rendering component)
5. `componentDidUpdate`(Component update complete)

### Unloading phase
1. `componentWillUnmount`(Component to be unloaded)

## Life cycle of React v16.0
::: tip
1. Several `will` related life cycles were removed
2. Added two life cycles `getDerivedStateFromProp` and `getSnapshotBeforeUpdate`
:::

### Mount phase
1. `constructor`
2. `getDerivedStateFromProps`(Derived props)
3. `render`(Rendering component)
4. `componentDidMount`(Component rendering complete)

### Renewal phase
1. `getDerivedStateFromProps`(Derived props)
2. `shouldComponentUpdate`(Component render or not)
3. `render`(Rendering component)
4. `getSnapshotBeforeUpdate`(Get a snapshot)
5. `componentDidUpdate`(Component update complete)

### Unloading phase
1. `componentWillUnmount`(Component to be unloaded)

## getDerivedStateFromProps
`getDerivedStateFromProps` first of all, it is a static method, the method parameters respectively under a `props`, on a `state`, this life cycle function is to replace `componentWillReceiveProps`, The main function is to listen for props and then modify the current component's state
```js
// If the listening props return a non-null value, the return value is treated as the new state otherwise nothing is done
static getDerivedStateFromProps(nextProps, prevState) {
  const { type } = nextProps;

  // Return nuyll: Nothing is done with state
  if (type === prevState.type) {
    return null;
  }

  // Return a specific reference to update the state
  return { type }
}
```

## getSnapshotBeforeUpdate
The `getSnapshotBeforeUpdate` life cycle will be called after `render` before `DOM` changes, and the return value of this life cycle will be passed as the third argument of `componentDidUpdate`, which of course is not usually required. However, it is especially useful when you need to manually retain `DOM` information during re-rendering
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
Most developers use `componentWillUpdate` to cooperate with `componentDidUpdate` to obtain the view state before and after rendering, and conduct necessary processing, but with the arrival of mechanisms such as `React` asynchronous rendering, The rendering process can be broken up multiple times and can be paused or even retraced. As a result, `componentWillUpdate` and `componentDidUpdate` may be executed at intervals long enough for the user to interactively change the state of the current component. This can lead to `BUG` that are hard to track
1. So we added the `getSnapshotBeforeUpdate` lifecycle to solve this problem and replace `componentWillUpdate`. Because the `getSnapshotBeforeUpdate` method is called after `componentWillUpdate` (if it exists) and before React actually changes the DOM, it gets the component state information more reliably
2. In addition to this, `getSnapshotBeforeUpdate` has one very obvious benefit: The result of the call is passed to `componentDidUpdate` as the third argument to avoid wasting memory by storing temporary state data on the component instance when `componentWillUpdate` and `componentDidUpdate` are used together
3. At the same time, the data returned by `getSnapshotBeforeUpdate` is destroyed after `componentDidUpdate` is used, which is more efficient
:::