---
title: Integer inversion
---

# {{ $frontmatter.title }}

Gives you a 32-bit signed integer x that returns the result of inverting the numeric part of x.

If the inverted integer exceeds the range of 32-bit signed integers, 0 is returned.

`Suppose the environment does not allow the storage of 64-bit integers (signed or unsigned).`

**Example 1**
::: info
input：x = 123

output：321
:::

**Example 2**
::: info
input：x = -123

output：-321
:::

**Example 3**
::: info
input：x = 120

output：21
:::

**Example 4**
::: info
input：x = 0

output：0
:::

## Problem solving

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
