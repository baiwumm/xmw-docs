---
title: Longest common prefix
---

# {{ $frontmatter.title }}

Write a function to find the longest common prefix in an array of strings.

If no public prefix exists, return the empty string `""`.

**Example 1**
::: info
input：strs = ["flower","flow","flight"]

output："fl"
:::

**Example 2**
::: info
input：strs = ["dog","racecar","car"]

output：""

explain：The input does not have a public prefix.
:::

## Problem solving

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  let result = 0;
  while (
    strs.every(
      (item) => result < item.length && strs[0][result] === item[result]
    )
  ) {
    result++;
  }
  return strs[0].slice(0, result);
};
```
