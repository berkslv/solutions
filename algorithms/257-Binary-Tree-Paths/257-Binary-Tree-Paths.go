package algorithms

import (
	"strconv"

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
func binaryTreePaths(root *TreeNode) []string {

	result := []string{}

	if root == nil {
		return result
	}

	if root.Left == nil && root.Right == nil {
		return []string{strconv.Itoa(root.Val)}
	}

	left := binaryTreePaths(root.Left)

	for i := 0; i < len(left); i++ {
		result = append(result, strconv.Itoa(root.Val)+"->"+left[i])
	}

	right := binaryTreePaths(root.Right)

	for i := 0; i < len(right); i++ {
		result = append(result, strconv.Itoa(root.Val)+"->"+right[i])
	}

	return result
}
