// https://leetcode.com/problems/merge-two-sorted-lists/
//
// You are given the heads of two sorted linked lists list1 and list2.
// 
// Merge the two lists in a one sorted list. The list should be made by splicing 
//  together the nodes of the first two lists.
// 
// Return the head of the merged linked list.
// 
//  
// 
// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// 
// Example 2:
// Input: list1 = [], list2 = []
// Output: []
// 
// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function (list1, list2) {

    let result = [];

    while (list1 || list2) {
        if (!list1) {
            result.push(list2.val);
            list2 = list2.next;
            continue;
        } else if (!list2) {
            result.push(list1.val);
            list1 = list1.next;
            continue;
        }

        if (list1.val < list2.val) {
            result.push(list1.val);
            list1 = list1.next;
        } else {
            result.push(list2.val);
            list2 = list2.next;
        }
    }

    let list = null;

    for (let i = result.length - 1; i >= 0; i--) {
        const element = result[i];
        list = new ListNode(element, list);
    }

    return list;
};
// Runtime: 75 ms, faster than 79.52% of JavaScript online submissions for Merge Two Sorted Lists.
// Memory Usage: 44 MB, less than 82.42% of JavaScript online submissions for Merge Two Sorted Lists.


module.exports = {
    mergeTwoLists
}