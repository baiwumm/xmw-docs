---
title: Sum of two numbers
---

# Sum of two numbers
Given an array of integers' nums' and an integer target value 'target', you find the two integers in the array that sum to the target value 'target' and return their array subscripts.

You can assume that each input will correspond to only one answer. However, the same element in the array cannot be repeated in the answer.

You can return the answers in any order.

**Example 1**
::: info
input：nums = [2,7,11,15], target = 9

output：[0,1]

explain：because nums[0] + nums[1] == 9 ，return [0, 1] 。
:::

**Example 2**
::: info
input：nums = [3,2,4], target = 6

output：[1,2]
:::

**Example 3**
::: info
input：nums = [3,3], target = 6

output：[0,1]
:::

## Problem solving
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map()
    for(let i = 0;i < nums.length;i++){
        let num1 = nums[i]
        let num2 = target - num1
        if(map.has(num2)){
            return [map.get(num2),i]
        }else{
            map.set(num1,i)
        }
    }
};
```