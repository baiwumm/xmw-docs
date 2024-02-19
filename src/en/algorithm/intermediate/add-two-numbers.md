---
title: Add two numbers together
---

# {{ $frontmatter.title }}

You are given two non-empty lists, representing two non-negative integers. Each digit is stored in reverse order, and only one digit can be stored per node.

You add the two numbers and return a linked list representing the sum in the same form.

You can assume that neither of these numbers will start with 0, except for the number 0.

**Example 1**
![](https://cdn.baiwumm.com/images/202402/f8nzrehu7cscwqg7kuddcprl9hyvblh3.jpg)
::: info
input：l1 = [2,4,3], l2 = [5,6,4]

output：[7,0,8]

explain：342 + 465 = 807.
:::

**Example 2**
::: info
input：l1 = [0], l2 = [0]

output：[0]
:::

**Example 3**
::: info
input：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]

output：[8,9,9,9,0,0,0,1]
:::

## Problem solving

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let addOne = 0;
  let sum = new ListNode("0");
  let result = sum;
  while (addOne || l1 || l2) {
    let val1 = l1 !== null ? l1.val : 0;
    let val2 = l2 !== null ? l2.val : 0;
    const r1 = val1 + val2 + addOne;
    addOne = r1 >= 10 ? 1 : 0;
    sum.next = new ListNode(r1 % 10);
    sum = sum.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  return result.next;
};
```
