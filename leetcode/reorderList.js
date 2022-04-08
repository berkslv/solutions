// https://leetcode.com/problems/reorder-list/
// 
// You are given the head of a singly linked-list. The list can be represented as:
// 
// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:
// 
// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.
// 
//  
// 
// Example 1:
// Input: head = [1,2,3,4]
// Output: [1,4,2,3]
// 
// Example 2:
// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {

    let array = [];

    let loop = head;
    while (loop) {
        array.push(loop.val);
        loop = loop.next;
    }


    let sortedArray = [];
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        sortedArray.push(array[i]);
        sortedArray.push(array[array.length - 1 - i]);
    }

    if (array.length % 2 !== 0) {
        sortedArray.push(array[Math.floor(array.length / 2)])
    }


    for (let i = 0; i < sortedArray.length; i++) {
        head.val = sortedArray[i];
        head = head.next;
    }

};


// Runtime: 110 ms, faster than 73.26% of JavaScript online submissions for Reorder List.
// Memory Usage: 50.6 MB, less than 23.45% of JavaScript online submissions for Reorder List.

module.exports = {
    reorderList
}