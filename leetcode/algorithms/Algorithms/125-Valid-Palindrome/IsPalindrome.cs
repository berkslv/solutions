/*
    Source: https://leetcode.com/problems/valid-palindrome
    Runtime: 84 ms, faster than 87.06% of C# online submissions for Valid Palindrome.
    Memory Usage: 39.9 MB, less than 48.04% of C# online submissions for Valid Palindrome.
    Author: berkslv
    Date: 15/06/2022
*/
public class Solution125 {
    public bool IsPalindrome(string s) 
    {
        for(int i = 0, j = s.Length - 1; i < j;)
        {
            var left = s[i];
            if(!Char.IsLetterOrDigit(left))
            {
                i++;
                continue;
            }
            
            var right = s[j];
            if(!Char.IsLetterOrDigit(right))
            {
                j--;
                continue;
            }
            
            if(Char.ToLower(left) != Char.ToLower(right))
            {
                return false;
            }
            
            i++;
            j--;
        }
        
        return true;
    }
}