// https://leetcode.com/problems/delete-node-in-a-linked-list/
// 
// Write a function to delete a node in a singly-linked list. You will not be 
//  given access to the head of the list, instead you will be given access 
//  to the node to be deleted directly.
// 
// It is guaranteed that the node to be deleted is not a tail node in the list.
// 
//  
// 
// Example 1:
// Input: head = [4,5,1,9], node = 5
// Output: [4,1,9]
// Explanation: You are given the second node with value 5, the linked list 
//  should become 4 -> 1 -> 9 after calling your function.
// 
// Example 2:
// Input: head = [4,5,1,9], node = 1
// Output: [4,5,9]
// Explanation: You are given the third node with value 1, the linked 
//  list should become 4 -> 5 -> 9 after calling your function.


/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};


// Runtime: 85 ms, faster than 64.62% of JavaScript online submissions for Delete Node in a Linked List.
// Memory Usage: 44 MB, less than 90.63% of JavaScript online submissions for Delete Node in a Linked List.

module.exports = {
    deleteNode,
}