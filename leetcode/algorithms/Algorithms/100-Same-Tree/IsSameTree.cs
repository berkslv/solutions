/*
    Source: https://leetcode.com/problems/same-tree
    Runtime: 94 ms, faster than 95.18% of C# online submissions for Same Tree.
    Memory Usage: 39.8 MB, less than 19.16% of C# online submissions for Same Tree.
    Author: berkslv
    Date: 15/06/2022
*/
using Algorithms.Utils;

namespace Algorithms
{
    public class Solution100
    {
        public bool IsSameTree(TreeNode p, TreeNode q)
        {
            if (p == null && q == null)
            {
                return true;
            }

            if (p == null || q == null)
            {
                return false;
            }

            if (p.val != q.val)
            {
                return false;
            }

            return IsSameTree(p.right, q.right) && IsSameTree(p.left, q.left);
        }
    }
}
