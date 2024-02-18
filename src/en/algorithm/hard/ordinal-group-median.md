---
title: Find the median of two groups of positive Ordinal Numbers
---

# {{ $frontmatter.title }}

Given two positively ordered (from smallest to largest) arrays nums1 and nums2 of sizes m and n, respectively. Find and return the median of the two ordinal groups.

The time complexity of the algorithm should be O(log (m+n)).

**Example 1**
::: info
input：nums1 = [1,3], nums2 = [2]

output：2.00000

explain：Merge array = [1,2,3], median 2
:::

**Example 2**
::: info
input：nums1 = [1,2], nums2 = [3,4]

output：2.50000

explain：Merge array = [1,2,3,4] ，median (2 + 3) / 2 = 2.5
:::

## Problem solving

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  // 合并排序数组
  const result = [...nums1, ...nums2].sort((a, b) => a - b);
  // 获取数组长度
  const len = result.length;
  // 根据长度的奇偶性
  return len % 2 === 0
    ? (result[len / 2 - 1] + result[len / 2]) / 2
    : result[Math.floor(len / 2)];
};
```
