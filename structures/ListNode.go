package structures

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
