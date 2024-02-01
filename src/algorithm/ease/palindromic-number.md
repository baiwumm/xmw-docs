---
title: 回文数
---

# {{ $frontmatter.title }}

给你一个整数 `x` ，如果 `x` 是一个回文整数，返回 `true` ；否则，返回 `false` 。

回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

例如，`121` 是回文，而 `123` 不是。

**示例 1**
::: info
输入：x = 121

输出：true
:::

**示例 2**
::: info
输入：x = -121

输出：false

解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
:::

**示例 3**
::: info
输入：x = 10

输出：false

从右向左读, 为 01 。因此它不是一个回文数。
:::

## 题解

```js
/**
 * @param {number} x
 * @return {boolean}
 */
// 一行代码
const isPalindrome = (x) =>
  x < 0 ? false : Number(x.toString().split("").reverse().join("")) === x;

// 双指针
const isPalindrome = (x) => {
  x = x.toString();
  let left = 0,
    right = x.length - 1;
  while (left <= 10) {
    if (x[left] !== x[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
```
