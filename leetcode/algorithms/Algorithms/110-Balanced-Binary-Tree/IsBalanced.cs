/*
    Source: https://leetcode.com/problems/balanced-binary-tree
    Runtime: 170 ms, faster than 23.00% of C# online submissions for Balanced Binary Tree.
    Memory Usage: 41.3 MB, less than 51.40% of C# online submissions for Balanced Binary Tree.
    Author: berkslv
    Date: 15/06/2022
*/
using Algorithms.Utils;

namespace Algorithms
{
    public class Solution110
    {
        bool isBalanced = true;

        public bool IsBalanced(TreeNode root)
        {
            IsBalancedTree(root);
            return isBalanced;
        }

        int IsBalancedTree(TreeNode root)
        {
            if (root == null)
            {
                return 0;
            }

            var left = IsBalancedTree(root.left) + 1;
            var right = IsBalancedTree(root.right) + 1;

            if (Math.Abs(left - right) > 1)
            {
                isBalanced = false;
            }

            return Math.Max(left, right);
        }
    }
}
