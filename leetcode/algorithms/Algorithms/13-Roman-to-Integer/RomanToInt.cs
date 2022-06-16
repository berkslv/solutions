/*
    Source: https://leetcode.com/problems/roman-to-integer
    Runtime: 136 ms, faster than 14.63% of C# online submissions for Roman to Integer.
    Memory Usage: 37 MB, less than 43.13% of C# online submissions for Roman to Integer.
    Author: berkslv
    Date: 14/06/2022
*/
using System.Collections.Generic;

namespace Algorithms
{
    public class Solution013
    {
        public static int RomanToInt(string s)
        {
            Dictionary<char, int> dict =
                new Dictionary<char, int> {
                    { 'M', 1000 },
                    { 'D', 500 },
                    { 'C', 100 },
                    { 'L', 50 },
                    { 'X', 10 },
                    { 'V', 5 },
                    { 'I', 1 }
                };
            int i = s.Length - 1;
            int ret = dict[s[i--]];
            while (i >= 0)
            {
                if (dict[s[i + 1]] > dict[s[i]])
                    ret -= dict[s[i--]];
                else
                    ret += dict[s[i--]];
            }
            return ret;
        }
    }
}
