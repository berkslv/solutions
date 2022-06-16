/*
    Source: https://leetcode.com/problems/binary-tree-inorder-traversal
    Runtime: 174 ms, faster than 59.68% of C# online submissions for Binary Tree Inorder Traversal.
    Memory Usage: 40.6 MB, less than 86.81% of C# online submissions for Binary Tree Inorder Traversal.
    Author: berkslv
    Date: 15/06/2022
*/
using System.Collections.Generic;
using Algorithms.Utils;

namespace Algorithms
{
    public class Solution094
    {
        public IList<int> InorderTraversal(TreeNode root)
        {
            var result = new List<int>();
            Inorder(root, ref result);
            return result;
        }

        public void Inorder(TreeNode root, ref List<int> output)
        {
            if (root != null)
            {
                Inorder(root.left, ref output);
                output.Add(root.val);
                Inorder(root.right, ref output);
            }
        }
    }
}

/*
func inorderTraversal(root *TreeNode) []int {
	var result []int
	inorder(root, &result)
	return result
}

func inorder(root *TreeNode, output *[]int) {
	if root != nil {
		inorder(root.Left, output)
		*output = append(*output, root.Val)
		inorder(root.Right, output)
	}
}
*/
