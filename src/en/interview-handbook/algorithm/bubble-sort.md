---
title: Bubble sort
---

# {{ $frontmatter.title }}

## thought

1. Bubble sort only operates on two adjacent pieces of data.
2. Each bubbling operation compares two adjacent elements to see if the size relationship requirements are met. If you're not satisfied, let them swap.
3. A bubble will make at least one element move to the position it should be in, repeat `n` times, and complete the sorting of `n` data.

## Analyze

- Space complexity：`O(1)`, is a `n situ` sorting algorithm.
- Time complexity：
  - Best case：T(n) = O(n)。
  - Worst case：T(n) = O(n^2)。
  - Average case：T(n) = O(n^2)。
- Stability：In bubble sort, only an exchange can change the order of two elements. In order to ensure the stability of the bubble sorting algorithm, when there are two adjacent elements of the same size, we do not exchange, the same size of the data before and after the sorting will not change the order. So bubble sort is a `stable` sort algorithm.

## Concrete realization

```js
Array.prototype.bubbleSort = function () {
  // Gets the current array
  const ctx = this;
  for (let i = 0; i < ctx.length - 1; i++) {
    for (let j = 0; j < ctx.length - 1 - i; j++) {
      // Determine whether the following number is greater than the previous one, and if so, switch positions
      if (ctx[j] > ctx[j + 1]) {
        [ctx[j], ctx[j + 1]] = [ctx[j + 1], ctx[j]];
      }
    }
  }
};
```

## Test

```js
let arr = [3, 6, 12, 65, 23, 2];
arr.bubbleSort();
console.log(arr);
```
