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

    let s1 = [];
    let newl1 = l1;

    while (newl1 !== null) {
        s1.unshift(newl1.val.toString());
        newl1 = newl1.next;
    }

    var n1 = "";
    for (let i = 0; i < s1.length; i++) {
        const element = s1[i];
        n1 += element;
    }


    let s2 = [];
    let newl2 = l2;

    while (newl2 !== null) {
        s2.unshift(newl2.val.toString());
        newl2 = newl2.next;
    }

    var n2 = "";
    for (let i = 0; i < s2.length; i++) {
        const element = s2[i];
        n2 += element;
    }
    

    let numberAddition = BigInt(n1) + BigInt(n2);
    let addition = Array.from((numberAddition).toLocaleString('fullwide', {useGrouping:false}), Number);
    
    let result;

    for (let i = 0; i < addition.length; i++) {
        const element = addition[i];
        result = new ListNode(element, result);
    }

    return result
};

// Runtime: 3197 ms, faster than 5.01% of JavaScript online submissions for Add Two Numbers.
// Memory Usage: 56.2 MB, less than 5.06% of JavaScript online submissions for Add Two Numbers.

module.exports = {
    addTwoNumbers
}
