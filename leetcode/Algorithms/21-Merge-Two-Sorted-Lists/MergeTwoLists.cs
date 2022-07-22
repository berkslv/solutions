/*
    Source: https://leetcode.com/problems/merge-two-sorted-lists/
    Runtime: 137 ms, faster than 24.10% of C# online submissions for Merge Two Sorted Lists.
    Memory Usage: 38.2 MB, less than 35.73% of C# online submissions for Merge Two Sorted Lists.
    Author: berkslv
    Date: 15/06/2022
*/
using Algorithms.Utils;

public class Solution021
{
    public ListNode MergeTwoLists(ListNode list1, ListNode list2)
    {
        if (list1 == null)
        {
            return list2;
        }
        if (list2 == null)
        {
            return list1;
        }
        var MergedHead = new ListNode(0);
        if (list1.val < list2.val)
        {
            MergedHead = list1;
            MergedHead.next = MergeTwoLists(list1.next, list2);
        }
        else
        {
            MergedHead = list2;
            MergedHead.next = MergeTwoLists(list1, list2.next);
        }
        return MergedHead;
    }
}
