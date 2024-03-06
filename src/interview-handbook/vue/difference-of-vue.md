---
title: Vue3 和 Vue2 的区别
---

# {{ $frontmatter.title }}

## Vue3 框架的优点特点

1. 首次渲染更快
2. `diff` 算法更快
3. 内存占用更少
4. 打包体积更小
5. 更好的 `Typescript` 支持
6. `Composition API` 组合

## 生命周期

对于生命周期来说，整体上变化不大，只是大部分生命周期钩子名称上 + `on`，功能上是类似的。不过有一点需要注意，`Vue3` 在组合式 `Composition API` 中使用生命周期钩子时需要先引入，而` Vue2` 在选项 `Options API` 中可以直接调用生命周期钩子，如下所示：
| Vue2 | Vue3 | 说明 |
| :-------------: | :-----------: | :----: |
| beforeCreate | setup | 组件创建之前，执行初始化任务 |
| created | setup | 组件创建完成，访问数据、获取接口数据 |
| beforeMount | onBeforeMount | 组件挂载之前 |
| mounted | onMounted | 组件挂载完成，DOM 已创建，访问数据或 DOM 元素，访问子组件 |
| beforeUpdate | onBeforeUpdate | 未更新，获取更新前所有状态 |
| updated | onUpdated | 获取更新后所有状态 |
| beforeDestroy | onBeforeUnmount | 组件销毁之前 |
| destroyed | onUnmounted | 组件销毁之后 |

::: tip
`setup` 是围绕 `beforeCreate` 和 `created` 生命周期钩子运行的，所以不需要显式地去定义。
:::

## Composition API

- `Vue2` 是 `Options API`：一个逻辑会散乱在文件不同位置（`data`、`props`、`computed`、`watch`、生命周期钩子等），导致代码的可读性变差。当需要修改某个逻辑时，需要上下来回跳转文件位置。
- `Vue3` 是 `Composition API`：可将同一逻辑的内容写到一起，增强了代码的可读性、内聚性，其还提供了较为完美的逻辑复用性方案。所有逻辑在 `setup` 函数中，使用 `ref`、`watch` 等函数组织代码

![](https://cdn.baiwumm.com/images/202403/9vxs3d8c59cv8dg7jvkykf5pwy37df0r.jpg)

## setup 函数

`setup` 函数是组合式 `API` 的入口函数，默认导出配置选项，`setup` 函数声明，返回模板需要数据与函数：

- `setup` 函数是 `Vue3` 特有的选项，作为组合式 `API` 的起点
- 从组件生命周期看，它在 `beforeCreate` 之前执行
- 函数中 `this` 不是组件实例，是 `undefined`
- 如果数据或者函数在模板中使用，需要在 `setup` 返回
- 今后在 `vue3` 的项目中几乎用不到 `this` , 所有的东西通过函数获取。

## 响应式原理

### 原理

1. `Vue2` 响应式原理是利用 `es5` 的 `Object.defineProperty()` 对数据进行劫持结合发布订阅模式来实现
2. `Vue3` 响应式原理是利用 `es6` 的 `proxy` 对数据代理，通过 `reactive()` 函数给每一个对象都包一层 `proxy`，通过 `proxy` 监听属性的变化，从而实现对数据的监控

![](https://cdn.baiwumm.com/images/202403/e526bc2pssmbz1x03eijttfufpestjaa.png)

### Object.defineProperty 的缺陷

```js
var obj = { _x: 1 };
Object.defineProperty(obj, "x", {
  set: function (x) {
    console.log("watch");
    this._x = x;
  },
  get: function () {
    return this._x;
  },
});
obj.x = 11; // watch
console.log(obj.x); // 11
```

1. 对象新增、删除属性没有响应式
2. 数组新增、删除元素没有响应式
3. 通过下标修改某个元素没有响应式
4. 通过 `.length` 改变数组长度没有响应式
5. 只有实例创建时 `data` 中有的数据实例创建后才是响应式的，给已创建好的 `vue` 实例 `data` 对象中添加属性时，数据虽然会更新，但视图不会更新，不具有响应式

### Proxy 优势

```js
var target = { a: 1 };
var proxy = new Proxy(target, {
  set: function (target, key, value, receiver) {
    console.log("watch");
    return Reflect.set(target, key, value, receiver);
  },
  get: function (target, key, receiver) {
    return target[key];
  },
});
proxy.a = 11; // watch
console.log(target); // { a: 11 }
```

1. `Proxy` 性能整体上优于 `Object.defineProperty`
2. `Vue3`支持更多数据类型的劫持：`Vue2` 只支持 `Object`、`Array`，`Vue3` 支持 `Object`、`Array`、`Map`、`WeakMap`、`Set`、`WeakSet`）
3. `Vue3` 支持更多时机来进行依赖收集和触发通知：`Vue2` 只在 `get` 时进行依赖收集，`Vue3` 在 `get/has/iterate` 时进行依赖收集；`Vue2` 只在 `set` 时触发通知，`Vue3` 在 `set/add/delete/clear` 时触发通知），所以 `Vue2` 中的响应式缺陷 `Vue3` 可以实现
4. `Vue3` 做到了**精准数据**的数据劫持：`Vue2` 会把整个 `data` 进行递归数据劫持，而 `Vue3` 只有在用到某个对象时，才进行数据劫持，所以响应式更快并且占内存更小
5. `Vue3` 的依赖收集器更容易维护：`Vue3` 监听和操作的是原生数组，`Vue2` 是通过重写的方法实现对数组的监控

## reactive 函数和 ref 函数

1. `reactive` 函数：通常使用它复杂类型的响应式数据

- 从 `vue` 中导入 `reactive` 函数
- 在 `setup` 函数中，使用 `reactive` 函数，传入一个普通对象，返回一个响应式数据对象
- 最后 `setup` 函数返回一个对象，包含该响应式对象即可，模板中可使用

2. ref 函数： 使用它定义响应式数据，不限类型

- 从 `vue` 中导入 `ref` 函数
- 在 `setup` 函数中，使用 `ref` 函数，传入普通数据，返回一个响应式数据
- 最后 `setup` 函数返回一个对象，包含该响应式数据即可
- 注意：使用 `ref` 创建的数据，`js` 中需要 `.value` ，`template` 中可省略

3. 如何抉择

- `reactive` 可以转换对象成为响应式数据对象，但是不支持简单数据类型。
- `ref` 可以转换简单数据类型为响应式数据对象，也支持复杂数据类型，但是操作的时候需要 `.value`
- 如果能确定数据是对象且字段名称也确定，可使用 `reactive` 转成响应式数据，其他一概使用 `ref`
- 在定义响应式数据的函数选择上，遵循：尽量使用 `ref` 函数支持所有场景，确定字段的对象使用 `reactive` 可以省去 `.value`

## TypeScript 的支持

`Vue3` 借鉴了 `React Hook` 实现了更自由的编程方式，提出了 `Composition API`，`Composition API` 不需要通过指定一长串选项来定义组件，而是允许用户像编写函数一样自由地表达、组合和重用有状态的组件逻辑，同时提供出色的 `TypeScript`支持。

## 打包体积变化

`Vue2` 官方说明运行时打包 `23k`，但这只是没安装依赖的时候，随着依赖包和框架特性的增多，有时候不必要的，未使用的代码文件都被打包了进去，所以后期项目大了，打包文件会特别多还很大。

在 `Vue3` 中，通过将大多数全局 `API` 和内部帮助程序移动到 `JavaScript` 的 `module.exports` 属性上实现这一点，这允许现代模式下的 `module bundler` 能够静态地分析模块依赖关系，并删除与未使用的`module.exports` 属性相关的代码，模板编译器还生成了对 `Tree Shaking` 摇树优化友好的代码，只有在模板中实际使用某个特性时，该代码才导入该特性的帮助程序，尽管增加了许多新特性，但 `Vue3` 被压缩后的基线大小约为 `10KB`，不到 `Vue2` 的一半。

## 其它小变化

1. `Fragment（碎片）`：`template` 支持多个根节点。
2. `Teleport（传送门）`：`Teleport` 是一种能够将我们的模板移动到 `DOM` 中 `Vue app` 之外的其他位置的技术
3. 更好的 `Tree-Shaking` 支持：`Vue 3` 通过使用 `ES` 模块来实现更好的 `Tree-Shaking` 支持，从而减小了最终打包文件的大小。
4. `Suspense` (悬念)： 为处理异步组件和延迟加载提供了一种更简洁和直观的方式，通过使用 `<Suspense>` 组件和 `v-slot`，我们可以更方便地管理加载状态、占位内容和错误处理
5. 重构了虚拟 `DOM`：在编译时会将事件缓存、将 `slot` 编译为 `lazy` 函数、保存静态节点直接复用(静态提升)、以及添加静态标记、`Diff` 算法使用 最长递增子序列 优化了对比流程，使得虚拟 `DOM` 生成速度大幅度提升
6. 支持在 `<style></style>` 里使用 `v-bind`，给 `CSS` 绑定 `JS` 变量(`color: v-bind(str)`)
