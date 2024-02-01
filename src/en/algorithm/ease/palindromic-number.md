---
title: Palindromic number
---

# {{ $frontmatter.title }}

Give you an integer `x`, if `x` is a palindromic integer, return `true`; Otherwise, return `false`.

Palindromes are integers that read the same in positive order (from left to right) and reverse order (from right to left).

For example, `121` is a palindrome, while `123` is not.

**Example 1**
::: info
input：x = 121

output：true
:::

**Example 2**
::: info
input：x = -121

output：false

explain：Read from left to right, it is -121. Read from right to left as 121-. So it's not a palindromic number.
:::

**Example 3**
::: info
input：x = 10

output：false

explain：Read from right to left, it is 01. So it's not a palindromic number.
:::

## Problem solving

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
