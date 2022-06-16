/*
    Source: https://leetcode.com/problems/binary-search
    Runtime: 202 ms, faster than 21.85% of C# online submissions for Binary Search.
    Memory Usage: 41.2 MB, less than 90.43% of C# online submissions for Binary Search.
    Author: berkslv
    Date: 16/06/2022
*/
namespace Algorithms
{
    public class Solution704
    {
        public int Search(int[] nums, int target)
        {
            int start = 0;
            int end = nums.Length - 1;
            int mid = 0;

            while (start <= end)
            {
                mid = (start + end) / 2;
                if (nums[mid] == target)
                {
                    return mid;
                }
                else if (nums[mid] < target)
                {
                    start = mid + 1;
                }
                else
                {
                    end = mid - 1;
                }
            }
            return -1;
        }
    }
}
