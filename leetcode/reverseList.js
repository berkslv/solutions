// https://leetcode.com/problems/reverse-linked-list/
// 
// Given the head of a singly linked list, reverse the list, and return the reversed list.
// 
// 
// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// 
// Example 2:
// Input: head = [1,2]
// Output: [2,1]
// 
// Example 3:
// Input: head = []
// Output: []


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {

    let prev = null;
    let reversed = null;

    while (head) {
        prev = head;

        reversed = new ListNode(prev.val, reversed);

        head = head.next;
    }

    return reversed;
};


// Runtime: 127 ms, faster than 5.21% of JavaScript online submissions for Reverse Linked List.
// Memory Usage: 44.9 MB, less than 6.95% of JavaScript online submissions for Reverse Linked List.

module.exports = {
    reverseList
}