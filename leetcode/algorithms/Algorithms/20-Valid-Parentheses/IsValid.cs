/*
    Source: https://leetcode.com/problems/roman-to-integer
    Runtime: 102 ms, faster than 47.82% of C# online submissions for Valid Parentheses.
    Memory Usage: 36.5 MB, less than 77.23% of C# online submissions for Valid Parentheses.
    Author: berkslv
    Date: 14/06/2022
*/
using System.Collections.Generic;

namespace Algorithms
{
    public class Solution020
    {
        public bool IsValid(string s)
        {

            if (s.Length < 2 || s.Length % 2 != 0)
            {
                return false;
            }

            var left = "([{";
            var right = ")]}";
            var stack = new Stack<char>();

            foreach (var c in s)
            {
                if (left.IndexOf(c) != -1)
                {
                    stack.Push(c);
                }
                else
                {
                    if (stack.Count == 0 || stack.Pop() != left[right.IndexOf(c)])
                    {
                        return false;
                    }
                }
            }

            return stack.Count == 0;

        }
    }
}
