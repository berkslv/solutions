/*
    Source: https://leetcode.com/problems/two-sum/
    Runtime: 242 ms, faster than 35.39% of C# online submissions for Two Sum.
    Memory Usage: 42.5 MB, less than 88.91% of C# online submissions for Two Sum.
    Author: berkslv
    Date: 14/06/2022
*/
namespace Algorithms
{
    public class Solution001
    {
        public int[] TwoSum(int[] nums, int target)
        {
            for (var i = 0; i < nums.Length; i++)
            {
                for (var j = nums.Length - 1; j > i; j--)
                {
                    if (i != j)
                    {
                        if (nums[i] + nums[j] == target)
                        {
                            return new int[] { i, j };
                        }
                    }
                }
            }
            return new int[] { };
        }
    }
}
