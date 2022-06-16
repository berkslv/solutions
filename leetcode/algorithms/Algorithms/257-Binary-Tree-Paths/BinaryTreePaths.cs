/*
    Source: https://leetcode.com/problems/binary-tree-paths/
    Runtime: 251 ms, faster than 18.48% of C# online submissions for Binary Tree Paths.
    Memory Usage: 42.7 MB, less than 93.75% of C# online submissions for Binary Tree Paths.
    Author: berkslv
    Date: 16/06/2022
*/
using Algorithms.Utils;

namespace Algorithms
{
    public class Solution257
    {
        public IList<string> BinaryTreePaths(TreeNode root)
        {
            if (root == null) return new List<string>();
            var left = BinaryTreePaths(root.left);
            var right = BinaryTreePaths(root.right);
            var res = new List<string>();
            res.AddRange (left);
            res.AddRange (right);
            if (left.Count == 0 && right.Count == 0)
            {
                res.Add(root.val.ToString());
            }
            else
            {
                for (var i = 0; i < res.Count; i++)
                {
                    var str = root.val + "->" + res[i];
                    Console.WriteLine (str);
                    res[i] = str;
                }
            }

            return res;
        }
    }
}
