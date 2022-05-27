package structures

import (
	"fmt"
)

type ListNode struct {
	Val  int
	Next *ListNode
}

func NewListNode(val int, next *ListNode) *ListNode {
	var n ListNode
	n.Next = next
	n.Val = val
	return &n
}

func PrintList(list *ListNode) {

	for list != nil {
		fmt.Println(list.Val)
		list = list.Next
	}
}
