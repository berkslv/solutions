/*
    Source: https://leetcode.com/problems/symmetric-tree
    Runtime: 152 ms, faster than 27.28% of C# online submissions for Symmetric Tree.
    Memory Usage: 39.5 MB, less than 38.16% of C# online submissions for Symmetric Tree.
    Author: berkslv
    Date: 15/06/2022
*/
using Algorithms.Utils;

namespace Algorithms
{
    public class Solution101
    {
        public bool IsSymmetric(TreeNode root)
        {
            if (root == null)
            {
                return true;
            }

            return IsSymmetric(root.left, root.right);
        }

        public bool IsSymmetric(TreeNode left, TreeNode right)
        {
            if (left == null || right == null)
            {
                return left == right;
            }

            if (left.val != right.val)
            {
                return false;
            }

            return IsSymmetric(left.left, right.right) &&
            IsSymmetric(left.right, right.left);
        }
    }
}
