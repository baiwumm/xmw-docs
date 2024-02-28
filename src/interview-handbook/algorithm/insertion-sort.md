---
title: 插入排序
---

# {{ $frontmatter.title }}

![](https://cdn.baiwumm.com/images/202402/lqdnwnecnwjqnfi1gjltawaqs4pqxyl1.gif)

## 思想

1. 从第一个元素开始，该元素可以认为已经被排序
2. 取出下一个元素，在已经排序的元素序列中从后向前扫描
3. 如果该元素（已排序）大于新元素，将该元素移到下一位置
4. 重复步骤 3，直到找到已排序的元素小于或者等于新元素的位置
5. 将新元素插入到该位置后
6. 重复步骤 2 ~ 5

## 分析

- 空间复杂度：`O(1)`，是一种 `原地` 排序算法。
- 时间复杂度：
  - 最佳情况：T(n) = O(n)。
  - 最差情况：T(n) = O(n^2)。
  - 平均情况：T(n) = O(n^2)。
- 稳定性：在插入排序中，对于值相同的元素，我们可以选择将后面出现的元素，插入到前面出现元素的后面，这样就可以保持原有的前后顺序不变，所以插入排序是 `稳定` 的排序算法。

## 具体实现

```js
Array.prototype.insertionSort = function () {
  // 获取当前的数组
  const arr = this;
  // 插入排序数组长度至少是2
  if (arr.length < 1) {
    return arr;
  }
  // 循环遍历，从第一位开始
  for (let i = 1; i < arr.length; i++) {
    // 获取数组第一位元素
    let temp = arr[i];
    // 获取当前索引
    let j = i;
    while (j > 0) {
      // 当前面的数小于后面的数则交换位置
      if (arr[j - 1] > temp) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      } else {
        // 如果条件不符合则跳出当前循环
        break;
      }
      // 递减
      j--;
    }
  }
};
```

## 测试

```js
let arr = [3, 6, 12, 65, 23, 2];
arr.insertionSort();
console.log(arr);
```
