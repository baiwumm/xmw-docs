---
title: 最长公共前缀
---

# {{ $frontmatter.title }}

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 `""`。

**示例 1**
::: info
输入：strs = ["flower","flow","flight"]

输出："fl"
:::

**示例 2**
::: info
输入：strs = ["dog","racecar","car"]

输出：""

解释：输入不存在公共前缀。
:::

## 题解

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
