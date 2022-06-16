/*
    Source: https://leetcode.com/problems/reorder-list
    Runtime: 108 ms, faster than 72.10% of C# online submissions for Reorder List.
    Memory Usage: 41.4 MB, less than 48.39% of C# online submissions for Reorder List.
    Author: berkslv
    Date: 15/06/2022
*/
using Algorithms.Utils;

namespace Algorithms
{
    public class Solution143
    {
        public void ReorderList(ListNode head)
        {
            ListNode listNode1 = head;
            ListNode listNode2 = head;
            List<int> list = new List<int>();

            while (listNode1 != null)
            {
                list.Add(listNode1.val);
                listNode1 = listNode1.next;
            }

            int left = 0;
            int right = list.Count - 1;

            while (left <= right)
            {
                listNode2.val = list[left];
                listNode2 = listNode2.next;
                
                if (left != right)
                {
                    listNode2.val = list[right];
                    listNode2 = listNode2.next;
                }

                left++;
                right--;
            }
        }
    }
}
