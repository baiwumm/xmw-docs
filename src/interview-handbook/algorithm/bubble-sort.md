---
title: 冒泡排序
---

# {{ $frontmatter.title }}

1. 依次比较相邻的两个元素，根据大小互换位置，保证每一次比较大的数都在最后
2. 重复 `n+1` 次，就可完成排序

```js
// 时间复杂度 O(n ^ 2) n为数组长度
// 空间复杂度 O(1)
Array.prototype.bubbleSort = function () {
  // 获取当前的数组
  const ctx = this
  for (let i = 0; i < ctx.length - 1; i++) {
      for (let j = 0; j < ctx.length - 1 - i; j++) {
          // 判断后面一个数是否大于前面的，如果是则交换位置
          if (ctx[j] > ctx[j + 1]) {
              [ctx[j], ctx[j + 1]] = [ctx[j + 1], ctx[j]]
          }
      }
  }
}
```

测试：
```js
let arr = [3, 6, 12, 65, 23, 2]
arr.bubbleSort()
console.log(arr)
```
