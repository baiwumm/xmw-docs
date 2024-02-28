---
title: 归并排序
---

# {{ $frontmatter.title }}

![](https://cdn.baiwumm.com/images/202402/nfh0p4mjlusfavnbd5istkeophohmi0n.png)

## 思想

1. 排序一个数组，我们先把数组从中间分成前后两部分，然后对前后两部分分别排序，再将排好序的两部分合并在一起，这样整个数组就都有序了。
2. 归并排序采用的是分治思想。分治，顾名思义，就是分而治之，将一个大问题分解成小的子问题来解决。小的子问题解决了，大问题也就解决了。

## 分析

- 空间复杂度：`O(n)`，归并排序不是 `原地` 排序算法。
- 时间复杂度：从效率上看，归并排序可算是排序算法中的佼佼者。假设数组长度为 `n`，那么拆分数组共需 `logn` 步，又每步都是一个普通的合并子数组的过程，时间复杂度为 `O(n)`，故其综合时间复杂度为 `O(n log n)`。
  - 最佳情况：T(n) = O(n log n)。
  - 最差情况：T(n) = O(n log n)。
  - 平均情况：T(n) = O(n log n)。
- 稳定性：归并排序是 `稳定` 的排序方法。

## 具体实现

```js
Array.prototype.mergeSort = function () {
  // 获取当前数组
  const ctx = this;
  // 判断数组长度是否大于1
  if (ctx.length <= 1) {
    return ctx;
  }
  const recursiveArr = (arr) => {
    // 递归结束条件
    if (arr.length === 1) return arr;
    // 获取数组中间的索引
    const indexMid = arr.length >> 1;
    // 截取左右两边的数组
    const leftTemp = arr.slice(0, indexMid);
    const rightTemp = arr.slice(indexMid);
    // 对 左右两侧的数组进行递归，得到两个有序数组
    const orderLeft = recursiveArr(leftTemp);
    const orderRight = recursiveArr(rightTemp);
    // 定义一个空数组
    let result = [];
    // 遍历循环
    while (orderLeft.length || orderRight.length) {
      // 如果两个数组一直有数据，则把值小的出队
      if (orderLeft.length && orderRight.length) {
        // 值小的出队
        result.push(
          orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift()
        );
      } else if (orderLeft.length) {
        // 把左边的队友放入数组
        result.push(orderLeft.shift());
      } else {
        // 把右边的队友放入数组
        result.push(orderRight.shift());
      }
    }
    return result;
  };
  // 对当前数组进行递归处理
  const finalResult = recursiveArr(ctx);
  // 把当前结果放入原数组
  finalResult.forEach((element, index) => (ctx[index] = element));
};
```

## 测试

```js
let arr = [3, 6, 12, 65, 23, 2];
arr.mergeSort();
console.log(arr);
```
