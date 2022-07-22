/*
    Source: https://leetcode.com/problems/group-anagrams
    Runtime: 290 ms, faster than 33.72% of C# online submissions for Group Anagrams.
    Memory Usage: 50.3 MB, less than 65.23% of C# online submissions for Group Anagrams.
    Author: berkslv
    Date: 15/06/2022
*/
using System;
using System.Collections.Generic;

public class Solution049
{
    public IList<IList<string>> GroupAnagrams(string[] strs)
    {
        var res = new List<IList<String>>();
        
        if (strs == null || strs.Length == 0) return res;
        
        var map = new Dictionary<String, List<String>>();
        
        for (int i = 0; i < strs.Length; i++)
        {
            char[] charArr = strs[i].ToCharArray();
            Array.Sort(charArr);
            var str = new String(charArr);
            if (map.ContainsKey(str))
            {
                map[str].Add(strs[i]);
            }
            else
            {
                var list = new List<String>();
                list.Add(strs[i]);
                map.Add (str, list);
            }
        }
        
        foreach (var iter in map.Values)
        {
            var item = (List<String>) iter;
            if (item.Count > 0) res.Add(item);
        }
        
        return res;
    }
}
