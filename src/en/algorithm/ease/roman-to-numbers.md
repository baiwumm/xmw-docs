---
title: Roman numerals to whole numbers
---

# {{ $frontmatter.title }}

Roman numerals contain the following seven characters: I, V, X, L, C, D, and M.

| character | Numerical value |
| :--: | :--: |
|  I   |  1   |
|  V   |  5   |
|  X   |  10  |
|  L   |  50  |
|  C   | 100  |
|  D   | 500  |
|  M   | 1000 |

For example, the Roman numeral 2 is written as II, which is two parallel ones. 12 is written as XII, which is X + II. 27 As XXVII, it is XX + V + II.

Usually, the smaller number in Roman numerals is to the right of the larger number. But there are exceptions, for example, 4 is not written as IIII, but as IV. The number 1 is to the left of the number 5, and the number represented is equal to the number 4 resulting from the reduction of the large number 5 by the number 1. Similarly, the number 9 is represented as IX. This particular rule only applies in the following six cases:

- I can be placed to the left of V (5) and X (10) to represent 4 and 9。
- X can be placed to the left of L (50) and C (100) to represent 40 and 90。
- C can be placed to the left of D (500) and M (1000) to represent 400 and 900。


16/5000
Given a Roman numeral, convert it to an integer

**Example 1**
::: info
input：s = "III"

output：3
:::

**Example 2**
::: info
input：s = "IV"

output：4
:::

**Example 3**
::: info
input：s = "IX"

output：9
:::

**Example 4**
::: info
input：s = "LVIII"

output：58

explain：L = 50, V= 5, III = 3.
:::

**Example 5**
::: info
input：s = "MCMXCIV"

output：1994

explain：M = 1000, CM = 900, XC = 90, IV = 4.
:::

## Problem solving

```js
/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  const h = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  return s.split("").reduce((p, c, i, a) => {
    const lNum = h[a[i - 1]],
      nNum = h[a[i + 1]],
      cNum = h[c];
    if (i === s.length - 1) {
      return (p += cNum > lNum ? 0 : cNum);
    }
    if (cNum > lNum && cNum > nNum) {
      return (p += 0);
    }
    return cNum < nNum ? (p += nNum - cNum) : (p += cNum);
  }, 0);
};
```
