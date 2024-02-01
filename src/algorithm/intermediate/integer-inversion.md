---
title: 整数反转
---

# {{ $frontmatter.title }}

给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围 ，就返回 0。

`假设环境不允许存储 64 位整数（有符号或无符号）。`

**示例 1**
::: info
输入：x = 123

输出：321
:::

**示例 2**
::: info
输入：x = -123

输出：-321
:::

**示例 3**
::: info
输入：x = 120

输出：21
:::

**示例 4**
::: info
输入：x = 0

输出：0
:::

## 题解

```js
/**
 * @param {number} x
 * @return {number}
 */
const reserve = (x) => {
  const result = Number(
    `${x > 0 ? "" : "-"}${parseInt(x.toString().split("").reverse().join(""))}`
  );
  return result >= -Math.pow(2, 31) && result <= Math.pow(2, 31) ? result : 0;
};
```
