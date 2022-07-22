/*
    Source: https://leetcode.com/problems/contains-duplicate
    Runtime: 194 ms, faster than 83.12% of C# online submissions for Contains Duplicate.
    Memory Usage: 52.5 MB, less than 17.47% of C# online submissions for Contains Duplicate.
    Author: berkslv
    Date: 15/06/2022
*/
namespace Algorithms
{
    public class Solution217
    {
        public bool ContainsDuplicate(int[] nums)
        {
            var secondary = new HashSet<int>();
            int counter = 0;

            for (int i = 0; i < nums.Length; i++)
            {
                if (secondary.Add(nums[i]))
                {
                    counter++;
                }
            }

            if (counter == nums.Length)
            {
                return false;
            }

            return true;
        }
    }
}
