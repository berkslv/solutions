/*
    Source: https://leetcode.com/problems/top-k-frequent-elements
    Runtime: 193 ms, faster than 60.92% of C# online submissions for Top K Frequent Elements.
    Memory Usage: 46 MB, less than 24.48% of C# online submissions for Top K Frequent Elements.
    Author: berkslv
    Date: 16/06/2022
*/
namespace Algorithms
{
    public class Solution347
    {
        public int[] TopKFrequent(int[] nums, int k)
        {
            Dictionary<int, int> dic = new Dictionary<int, int>();
            List<int> list = new List<int>();

            for (int i = 0; i < nums.Length; i++)
            {
                if (!dic.ContainsKey(nums[i]))
                {
                    dic[nums[i]] = 1;
                }
                else
                {
                    dic[nums[i]] = dic[nums[i]] + 1;
                }
            }

            for (int i = 0; i < k; i++)
            {
                int keyOfMaxValue =
                    dic.Aggregate((x, y) => x.Value > y.Value ? x : y).Key;

                list.Add (keyOfMaxValue);
                dic.Remove (keyOfMaxValue);
            }

            return list.ToArray();
        }
    }
}
