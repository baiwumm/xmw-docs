---
title: 选择排序
---

# {{ $frontmatter.title }}

![](https://cdn.baiwumm.com/images/202402/ansl243gstz6pr4zllfldy46hiq2nsu8.gif)

## 思想

1. 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置。
2. 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
3. 重复第二步，直到所有元素均排序完毕。

## 分析

- 空间复杂度：`O(1)`，是一种 `原地` 排序算法。
- 时间复杂度：无论是正序还是逆序，选择排序都会遍历 `n2 / 2` 次来排序，所以，最佳、最差和平均的复杂度是一样的。
  - 最佳情况：T(n) = O(n^2)。
  - 最差情况：T(n) = O(n^2)。
  - 平均情况：T(n) = O(n^2)。
- 稳定性：选择排序每次都要找剩余未排序元素中的最小值，并和前面的元素交换位置，这样破坏了稳定性。所以，选择排序是一种 `不稳定` 的排序算法。

## 具体实现

```js
Array.prototype.selectionSort = function () {
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    // 最小值索引
    let mIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[mIndex]) {
        mIndex = j;
      }
    }
    if (mIndex !== i) {
      [arr[i], arr[mIndex]] = [arr[mIndex], arr[i]];
    }
  }
};
```

## 测试

```js
let arr = [3, 6, 12, 65, 23, 2];
arr.selectionSort();
console.log(arr);
```
