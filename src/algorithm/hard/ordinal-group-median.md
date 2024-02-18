---
title: 寻找两个正序数组的中位数
---

# {{ $frontmatter.title }}

给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

算法的时间复杂度应该为 O(log (m+n)) 。

**示例 1**
::: info
输入：nums1 = [1,3], nums2 = [2]

输出：2.00000

解释：合并数组 = [1,2,3] ，中位数 2
:::

**示例 2**
::: info
输入：nums1 = [1,2], nums2 = [3,4]

输出：2.50000

解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
:::

## 题解

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
