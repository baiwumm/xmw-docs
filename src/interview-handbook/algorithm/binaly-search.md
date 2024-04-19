---
title: 二分搜索
---

# {{ $frontmatter.title }}

![](https://cdn.baiwumm.com/images/202404/vam3ruw822fmcb4c96s8x0juqxvckgw5.gif)

## 思想

1. 从数组中的中间位置开始搜索，如果中间元素正好是目标值，则搜索结束
2. 如果目标值大于或者小于中间元素，则在大于或者小于中间元素的那一半数组中搜索
3. 数组必须是有序的，如不是则需要先进行排序

## 具体实现

```js
// 时间复杂度：O(log n)
// 空间复杂度：O(1)
Array.prototype.binalySearch = function (element) {
    // 获取当前数组
    const ctx = this
    // 获取最小索引
    let minIndex = 0
    // 获取最大索引
    let maxIndex = ctx.length - 1
    // 循环遍历
    while (minIndex <= maxIndex) {
        // 获取中间元素索引
        let midIndex = (minIndex + maxIndex) >> 1
        // 判断元素是否大于中间索引,如果大于就把最小索引往中间索引的下一个
        if (element > ctx[midIndex]) {
            // 则最小索引往前
            minIndex = midIndex + 1
            // 判断元素是否小于中间索引,如果大于就把最大索引往中间索引的前一个
        } else if (element < ctx[midIndex]) {
            maxIndex = midIndex - 1
        } else {
            // 如果中间的元素正式要查找的元素
            return midIndex
        }
    }
    // 如果都找不到，则返回-1
    return -1
}
```

## 测试

```js
const arr = [1, 2, 3, 4, 5, 6]
const index = arr.binalySearch(7)
console.log(index)
```