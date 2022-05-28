/*
- Source: https://leetcode.com/problems/merge-two-sorted-lists/
- Runtime: 4 ms, faster than 40.79% of Go online submissions for Merge Two Sorted Lists.
- Memory Usage: 2.7 MB, less than 11.16% of Go online submissions for Merge Two Sorted Lists.
*/
package algorithms

import (
	s "github.com/berkslv/solutions/structures"
)

type ListNode = s.ListNode

func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {

	var result = make([]int, 0)

	for list1 != nil || list2 != nil {
		if list1 == nil {
			result = append(result, list2.Val)
			list2 = list2.Next
			continue
		} else if list2 == nil {
			result = append(result, list1.Val)
			list1 = list1.Next
			continue
		}

		if list1.Val < list2.Val {
			result = append(result, list1.Val)
			list1 = list1.Next
		} else {
			result = append(result, list2.Val)
			list2 = list2.Next
		}
	}

	var list *ListNode

	for i := len(result) - 1; i >= 0; i-- {
		list = s.NewListNode(result[i], list)
	}

	return list

}
