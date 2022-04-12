// https://leetcode.com/problems/add-two-numbers/
//
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
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
let addTwoNumbers = function (l1, l2) {

    let result = null;

    while (l1 || l2) {

        let addition = l1.val + l2.val;
        
        if (addition >= 10) {
            addition = addition - 10;
            l1.next.val++;
        }

        result = new ListNode(addition, result);

        l1 = l1.next;
        l2 = l2.next;
    }


    return result
};

// Runtime: 3197 ms, faster than 5.01% of JavaScript online submissions for Add Two Numbers.
// Memory Usage: 56.2 MB, less than 5.06% of JavaScript online submissions for Add Two Numbers.

module.exports = {
    addTwoNumbers
    , ListNode
}
