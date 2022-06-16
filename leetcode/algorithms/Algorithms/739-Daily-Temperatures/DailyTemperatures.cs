/*
    Source: https://leetcode.com/problems/daily-temperatures
    Runtime: 647 ms, faster than 19.11% of C# online submissions for Daily Temperatures.
    Memory Usage: 49.4 MB, less than 81.24% of C# online submissions for Daily Temperatures.
    Author: berkslv
    Date: 16/06/2022
*/
namespace Algorithms
{
    public class Solution
    {
        public int[] DailyTemperatures(int[] temperatures)
        {
            var stack = new Stack<int>();
            var res = new int[temperatures.Length];

            for (int i = 0; i < temperatures.Length; i++)
            {
                while (stack.Count > 0 &&
                    temperatures[i] > temperatures[stack.Peek()]
                )
                {
                    var prevI = stack.Pop();
                    res[prevI] = i - prevI;
                }
                stack.Push (i);
            }

            return res;
        }
    }
}
