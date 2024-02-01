---
title: 两数之和
---

# {{ $frontmatter.title }}

给定一个整数数组 `nums` 和一个整数目标值 `target`，请你在该数组中找出 和为目标值 `target` 的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

**示例 1**
::: info
输入：nums = [2,7,11,15], target = 9

输出：[0,1]

解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
:::

**示例 2**
::: info
输入：nums = [3,2,4], target = 6

输出：[1,2]
:::

**示例 3**
::: info
输入：nums = [3,3], target = 6

输出：[0,1]
:::

## 题解

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    let num2 = target - num1;
    if (map.has(num2)) {
      return [map.get(num2), i];
    } else {
      map.set(num1, i);
    }
  }
};
```
