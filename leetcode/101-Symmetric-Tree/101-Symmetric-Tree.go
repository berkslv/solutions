package leetcode

import (
	"github.com/berkslv/algorithms/structures"
)

type TreeNode = structures.TreeNode

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isSymmetric(root *TreeNode) bool {

	if root == nil {
		return true
	}

	return symmetric(root.Left, root.Right)
}

func symmetric(left *TreeNode, right *TreeNode) bool {

	if left == nil || right == nil {
		return left == right
	}

	if left.Val != right.Val {
		return false
	}

	return symmetric(left.Left, right.Right) && symmetric(left.Right, right.Left)
}