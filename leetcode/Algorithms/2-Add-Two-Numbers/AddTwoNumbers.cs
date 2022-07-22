/*
    Source: https://leetcode.com/problems/add-two-numbers
    Runtime: 116 ms, faster than 62.82% of C# online submissions for Add Two Numbers.
    Memory Usage: 49.4 MB, less than 9.75% of C# online submissions for Add Two Numbers.
    Author: berkslv
    Date: 14/06/2022
*/
using Algorithms.Utils;

namespace Algorithms
{
    public class Solution002
    {
        public ListNode AddTwoNumbers(ListNode l1, ListNode l2)
        {
            var head = new ListNode(0);
            int n1 = 0;
            int n2 = 0;
            int carry = 0;
            var current = head;

            while (l1 != null || l2 != null || carry != 0)
            {

                if (l1 == null)
                {
                    n1 = 0;
                } else
                {
                    n1 = l1.val;
                    l1 = l1.next;
                }

                if (l2 == null)
                {
                    n2 = 0;
                } else
                {
                    n2 = l2.val;
                    l2 = l2.next;
                }

                current.next = new ListNode((n1 + n2 + carry) % 10);
                current = current.next;
                carry = (n1 + n2 + carry) / 10;
            }

            return head.next;
        }
    }
}
