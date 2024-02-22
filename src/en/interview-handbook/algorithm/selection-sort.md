---
title: Selection sort
---

# {{ $frontmatter.title }}

## Thought

1. First find the smallest (large) element in the unsorted sequence and store it at the start of the sorted sequence.
2. It then continues to find the smallest (large) element from the remaining unsorted elements and puts it at the end of the sorted sequence.
3. Repeat the second step until all elements are sorted.

## Analyze

- Space complexity：`O(1)`, is a `n situ` sorting algorithm.
- Time complexity：In either positive or reverse order, the selection sort traverses `n2/2` times to sort, so the best, worst, and average complexity is the same.
  - Best case：T(n) = O(n^2)。
  - Worst case：T(n) = O(n^2)。
  - Average case：T(n) = O(n^2)。
- Stability：The selection sort has to find the minimum value of the remaining unsorted element each time and switch places with the previous element, which destroys stability. Therefore, selection sorting is an `unstable` sorting algorithm.

## Concrete realization

```js
Array.prototype.selectionSort = function () {
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    // Minimum index
    let mIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[mIndex]) {
        mIndex = j;
      }
    }
    if (mIndex !== i) {
      [arr[i], arr[mIndex]] = [arr[mIndex], arr[i]];
    }
  }
};
```

## Test

```js
let arr = [3, 6, 12, 65, 23, 2];
arr.selectionSort();
console.log(arr);
```
