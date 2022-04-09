// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
//
// Given the head of a linked list, remove the nth node from the end of the list and return its head.
// 
//  
// 
// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// 
// Example 2:
// Input: head = [1], n = 1
// Output: []
// 
// Example 3:
// Input: head = [1,2], n = 1
// Output: [1]



function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {

    let dummy = new ListNode(0, head);
    let left = dummy;
    let right = head;

    while (n > 0 && right) {
        right = right.next;
        n --;
    }

    console.log(right)

    while (right) {
        left = left.next;
        right = right.next;
    }

    left.next = left.next.next;

    return dummy.next;
};


// Runtime: 74 ms, faster than 68.92% of JavaScript online submissions for Remove Nth Node From End of List.
// Memory Usage: 43.6 MB, less than 22.63% of JavaScript online submissions for Remove Nth Node From End of List.


module.exports = {
    removeNthFromEnd,
    ListNode
}