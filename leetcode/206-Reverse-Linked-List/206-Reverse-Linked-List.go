package leetcode

import (
	"github.com/berkslv/algorithms/structures"
)

type ListNode = structures.ListNode

// Iterative
func reverseList(head *ListNode) *ListNode {

	var prev *ListNode
	for head != nil {
		next := head.Next
		head.Next = prev
		prev = head
		head = next
	}
	return prev
}

// Recursive
func reverseList_1(head *ListNode) *ListNode {
	var prev *ListNode
	var reversed *ListNode

	for head != nil {
		prev = head

		reversed = structures.NewListNode(prev.Val, reversed)

		head = head.Next
	}
	return reversed
}
