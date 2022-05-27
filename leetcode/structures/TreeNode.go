package structures

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func NewTreeNode(val int, left *TreeNode, right *TreeNode) *TreeNode {
	var n TreeNode
	n.Val = val
	n.Left = left
	n.Right = right
	return &n
}
