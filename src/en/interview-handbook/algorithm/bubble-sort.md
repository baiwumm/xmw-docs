---
title: Bubble sort
---

# {{ $frontmatter.title }}

1. Compare the two adjacent elements in turn, switching positions according to size, so that each larger number comes last
2. Repeat `n+1` times to complete the sorting

```js
// Time complexity O(n ^ 2) n is the length of the array
// Space complexity O(1)
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

Test：

```js
let arr = [3, 6, 12, 65, 23, 2];
arr.bubbleSort();
console.log(arr);
```
