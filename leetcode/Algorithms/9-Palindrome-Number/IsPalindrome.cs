/*
    Source: https://leetcode.com/problems/palindrome-number
    Runtime: 88 ms, faster than 15.83% of C# online submissions for Palindrome Number.
    Memory Usage: 28.4 MB, less than 63.01% of C# online submissions for Palindrome Number.
    Author: berkslv
    Date: 14/06/2022
*/
namespace Algorithms
{
    public class Solution009
    {
        public bool IsPalindrome(int x)
        {
            int reversed = 0;
            int remainder = 0;
            int original = x;

            while (x != 0)
            {
                remainder = x % 10;
                reversed = reversed * 10 + remainder;
                x /= 10;
            }

            if (original == reversed)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
