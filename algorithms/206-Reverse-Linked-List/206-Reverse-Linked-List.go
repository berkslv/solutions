package algorithms

import (
	"fmt"

	"github.com/berkslv/algorithms/structures"
)

type ListNode = structures.ListNode

func reverseList_1(head *ListNode) *ListNode {

	var prev *ListNode
	for head != nil {
		next := head.Next
		head.Next = prev
		prev = head
		head = next
	}
	return prev
}

func reverseList(head *ListNode) *ListNode {
	var prev *ListNode
	var reversed *ListNode

	for head != nil {
		prev = head

		fmt.Println(prev)
		fmt.Println(reversed)
		fmt.Println("----")

		reversed = structures.NewListNode(prev.Val, reversed)

		head = head.Next
	}
	return reversed
}
