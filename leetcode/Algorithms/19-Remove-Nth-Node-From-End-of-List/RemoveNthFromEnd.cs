/*
    Source: https://leetcode.com/problems/roman-to-integer
	Runtime: 124 ms, faster than 34.62% of C# online submissions for Remove Nth Node From End of List.
	Memory Usage: 37.8 MB, less than 73.18% of C# online submissions for Remove Nth Node From End of List.
    Author: berkslv
    Date: 14/06/2022
*/
using Algorithms.Utils;

namespace Algorithms
{
    public class Solution019
    {
        public ListNode RemoveNthFromEnd(ListNode head, int n) {
            var dummy = new ListNode(0, head);
			var left = dummy;
			var right = head;

			while (n > 0 && right != null)
			{
				right = right.next;
				n--;
			}

			while (right != null)
			{
				left = left.next;
				right = right.next;
			}

			left.next = left.next.next;

			return dummy.next;
        }
    }
}
