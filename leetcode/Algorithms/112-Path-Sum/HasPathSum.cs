/*
    Source: https://leetcode.com/problems/path-sum
    Runtime: 208 ms, faster than 5.17% of C# online submissions for Path Sum.
    Memory Usage: 40.8 MB, less than 30.46% of C# online submissions for Path Sum.
    Author: berkslv
    Date: 15/06/2022
*/
using Algorithms.Utils;

namespace Algorithms
{
    public class Solution112
    {
        public bool HasPathSum(TreeNode root, int targetSum)
        {
            if (root == null)
            {
                return false;
            }

            if (targetSum - root.val == 0 && root.left == null && root.right == null)
            {
                return true;
            }

            return HasPathSum(root.left, targetSum - root.val) || HasPathSum(root.right, targetSum - root.val);
        }
    }
}
