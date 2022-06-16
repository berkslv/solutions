/*
    Source: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted
    Runtime: 262 ms, faster than 21.47% of C# online submissions for Two Sum II - Input Array Is Sorted.
    Memory Usage: 44.7 MB, less than 75.08% of C# online submissions for Two Sum II - Input Array Is Sorted.
    Author: berkslv
    Date: 15/06/2022
*/
namespace Algorithms
{
    public class Solution167
    {
        public int[] TwoSum(int[] numbers, int target)
        {
            int i = 0;
            int j = numbers.Length - 1;

            while (i < j)
            {
                if (numbers[i] + numbers[j] == target)
                {
                    return new int[] { i + 1, j + 1 };
                }
                else if (numbers[i] + numbers[j] > target)
                {
                    j--;
                }
                else
                {
                    i++;
                }
            }

            return new int[] { };
        }
    }
}
