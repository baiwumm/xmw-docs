---
title: Insertion sort
---

# {{ $frontmatter.title }}

## Thought

1. Start with the first element, which can be considered to have been sorted
2. Take the next element and scan it from back to front in the already sorted sequence of elements
3. If the element (sorted) is larger than the new element, move the element to the next position
4. Repeat Step 3 until you find a position where the sorted element is less than or equal to the new element
5. After inserting the new element into this position
6. Repeat Steps 2 to 5

## Analyze

- Space complexity：`O(1)`, is a `n situ` sorting algorithm.
- Time complexity：
  - Best case：T(n) = O(n)。
  - Worst case：T(n) = O(n^2)。
  - Average case：T(n) = O(n^2)。
- Stability：In the insertion sort, for the elements with the same value, we can choose to insert the elements that appear later into the back of the elements that appear earlier, so that the original order can be maintained, so the insertion sort is a `stable` sorting algorithm.

## Concrete realization

```js
Array.prototype.insertionSort = function () {
  // Gets the current array
  const arr = this;
  // Insert sort array length is at least 2
  if (arr.length < 1) {
    return arr;
  }
  // Loop through, starting with the first one
  for (let i = 1; i < arr.length; i++) {
    // Gets the first element of the array
    let temp = arr[i];
    // Get current index
    let j = i;
    while (j > 0) {
      // If the number of the current face is less than the number that follows, switch positions
      if (arr[j - 1] > temp) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      } else {
        // If the condition is not met, the current loop is exited
        break;
      }
      // Decrease progressively
      j--;
    }
  }
};
```

## Test

```js
let arr = [3, 6, 12, 65, 23, 2];
arr.insertionSort();
console.log(arr);
```
