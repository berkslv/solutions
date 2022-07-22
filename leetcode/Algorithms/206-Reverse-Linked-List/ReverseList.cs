/*
    Source: https://leetcode.com/problems/reverse-linked-list
    Runtime: 164 ms, faster than 6.61% of C# online submissions for Reverse Linked List.
    Memory Usage: 37.8 MB, less than 64.69% of C# online submissions for Reverse Linked List.
    Author: berkslv
    Date: 15/06/2022
*/
using Algorithms.Utils;

namespace Algorithms
{
    public class Solution206
    {
        public ListNode ReverseList(ListNode head)
        {
            ListNode newHead = null;
            while (head != null)
            {
                var next = head.next;
                head.next = newHead;
                newHead = head;
                head = next;
            }
            return newHead;
        }
    }
}
