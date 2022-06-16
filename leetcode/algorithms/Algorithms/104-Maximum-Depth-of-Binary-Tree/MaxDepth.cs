/*
    Source: https://leetcode.com/problems/maximum-depth-of-binary-tree
    Runtime: 135 ms, faster than 30.65% of C# online submissions for Maximum Depth of Binary Tree.
    Memory Usage: 38.3 MB, less than 28.54% of C# online submissions for Maximum Depth of Binary Tree.
    Author: berkslv
    Date: 15/06/2022
*/
using Algorithms.Utils;

namespace Algorithms
{
    public class Solution104
    {
        public int MaxDepth(TreeNode root)
        {
            if (root == null)
            {
                return 0;
            }

            return MaxDepth(MaxDepth(root.left), MaxDepth(root.right)) + 1;
        }

        public int MaxDepth(int a, int b)
        {
            if (a > b)
            {
                return a;
            }

            return b;
        }
    }
}
