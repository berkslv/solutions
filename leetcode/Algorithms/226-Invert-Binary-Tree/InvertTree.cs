/*
    Source: https://leetcode.com/problems/invert-binary-tree
    Runtime: 81 ms, faster than 97.92% of C# online submissions for Invert Binary Tree.
    Memory Usage: 38.1 MB, less than 19.88% of C# online submissions for Invert Binary Tree.
    Author: berkslv
    Date: 16/06/2022
*/
using Algorithms.Utils;

namespace Algorithms
{
    public class Solution226
    {
        public TreeNode InvertTree(TreeNode root)
        {
            if (root == null)
            {
                return null;
            }

            InvertTree(root.left);
            InvertTree(root.right);

            var temp = root.right;
            root.right = root.left;
            root.left = temp;

            return root;
        }
    }
}
