/*
    Source: https://leetcode.com/problems/min-stack
    Runtime: 170 ms, faster than 62.26% of C# online submissions for Min Stack.
    Memory Usage: 46.6 MB, less than 80.41% of C# online submissions for Min Stack.
    Author: berkslv
    Date: 15/06/2022
*/
namespace Algorithms
{
    public class MinStack
    {
        private List<KeyValuePair<int, int>> data;

        public MinStack()
        {
            data = new List<KeyValuePair<int, int>>();
        }

        public void Push(int val)
        {
            var currentMinValue = val;
            if (data.Count > 0)
            {
                currentMinValue = Math.Min(currentMinValue, GetMin());
            }

            data.Add(new KeyValuePair<int, int>(val, currentMinValue));
        }

        public void Pop()
        {
            data.RemoveAt(data.Count - 1);
        }

        public int Top()
        {
            return data[data.Count - 1].Key;
        }

        public int GetMin()
        {
            return data[data.Count - 1].Value;
        }
    }
}
