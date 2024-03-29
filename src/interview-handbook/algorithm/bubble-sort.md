---
title: 冒泡排序
---

# {{ $frontmatter.title }}

![](https://cdn.baiwumm.com/images/202402/ysp1crw5eg9t5ruraq59gbrnqgd4ua5b.gif)

## 思想

1. 冒泡排序只会操作相邻的两个数据。
2. 每次冒泡操作都会对相邻的两个元素进行比较，看是否满足大小关系要求。如果不满足就让它俩互换。
3. 一次冒泡会让至少一个元素移动到它应该在的位置，重复 `n` 次，就完成了 `n` 个数据的排序工作。

## 分析

- 空间复杂度：`O(1)`，是一种 `原地` 排序算法。
- 时间复杂度：
  - 最佳情况：T(n) = O(n)。
  - 最差情况：T(n) = O(n^2)。
  - 平均情况：T(n) = O(n^2)。
- 稳定性：在冒泡排序中，只有交换才可以改变两个元素的前后顺序。 为了保证冒泡排序算法的稳定性，当有相邻的两个元素大小相等的时候，我们不做交换，相同大小的数据在排序前后不会改变顺序。 所以冒泡排序是 `稳定` 的排序算法。

## 具体实现

```js
Array.prototype.bubbleSort = function () {
  // 获取当前的数组
  const ctx = this;
  for (let i = 0; i < ctx.length - 1; i++) {
    for (let j = 0; j < ctx.length - 1 - i; j++) {
      // 判断后面一个数是否大于前面的，如果是则交换位置
      if (ctx[j] > ctx[j + 1]) {
        [ctx[j], ctx[j + 1]] = [ctx[j + 1], ctx[j]];
      }
    }
  }
};
```

## 测试

```js
let arr = [3, 6, 12, 65, 23, 2];
arr.bubbleSort();
console.log(arr);
```
