/*
    Source: https://leetcode.com/problems/reverse-integer
    Runtime: 40 ms, faster than 32.22% of C# online submissions for Reverse Integer.
    Memory Usage: 25.5 MB, less than 64.97% of C# online submissions for Reverse Integer.
    Author: berkslv
    Date: 14/06/2022
*/
namespace Algorithms
{
    public class Solution007
    {
        public static int Reverse(int x)
        {
            if (x <= int.MinValue || x >= int.MaxValue)
            {
                return 0;
            }

            var integer = Math.Abs(x);
            var result = 0;
            
            while (integer != 0)
            {
                if (result > (int.MaxValue - integer % 10) / 10)
                {
                    return 0;
                }
            
                result = result * 10 + integer % 10;
                integer /= 10;
            
            }
            
            return x > 0 ? result : -result;
        }
    }
}
