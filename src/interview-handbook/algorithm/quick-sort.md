---
title: 快速排序
---

# {{ $frontmatter.title }}

![](https://cdn.baiwumm.com/images/202404/d5uwme4vtcf912x3ytdfd6rl6subnlhj.gif)

## 思想

1. 先找到一个基准点（一般指数组的中部），然后数组被该基准点分为两部分，依次与该基准点数据比较，如果比它小，放左边；反之，放右边。
2. 左右分别用一个空数组去存储比较后的数据。
3. 最后递归执行上述操作，直到数组长度 <= 1;

## 分析

- 空间复杂度：因为 `partition()` 函数进行分区时，不需要很多额外的内存空间，是一种 `原地` 排序算法。
- 时间复杂度：
  - 最佳情况：T(n) = O(n log n)。
  - 最差情况：T(n) = O(n^2)。
  - 平均情况：T(n) = O(n log n)。
- 稳定性：和选择排序相似，快速排序每次交换的元素都有可能不是相邻的，因此它有可能打破原来值为相同的元素之间的顺序。因此，快速排序并不稳定。

## 具体实现
```js
// 时间复杂度 O(nlogN)
// 空间复杂度 O(1)
Array.prototype.quickSort = function () {
    // 获取当前数组
    const ctx = this
    // 判断数组长度，小于1的就不用排序了
    if (ctx.length <= 1) {
        return ctx
    }
    // 定义一个递归函数
    const recursive = arr => {
        // 如果数组长度小于1就不用排序
        if (arr.length <= 1) return arr
        // 获取一个基准元素
        const benchmark = arr[0]
        // 定义基准两侧的数组
        const leftB = []
        const rightB = []
        // for遍历循环
        for (let i = 1; i < arr.length; i++) {
            // 判断元素唯一基准的左右
            if (arr[i] < benchmark) {
                leftB.push(arr[i])
            } else {
                rightB.push(arr[i])
            }
        }
        // 递归调用两边的数组
        return [...recursive(leftB), benchmark, ...recursive(rightB)]
    }
    // 执行递归后的返回值
    const result = recursive(ctx)
    // 把当前结果放入原数组
    result.forEach((element, index) => ctx[index] = element)
}
```

## 测试

```js
let arr = [3, 6, 12, 65, 23, 2]
arr.quickSort()
console.log(arr)
```