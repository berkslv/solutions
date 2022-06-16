/*
    Source: https://leetcode.com/problems/valid-anagram
    Runtime: 92 ms, faster than 74.41% of C# online submissions for Valid Anagram.
    Memory Usage: 39.8 MB, less than 25.59% of C# online submissions for Valid Anagram.
    Author: berkslv
    Date: 16/06/2022
*/
namespace Algorithms
{
    public class Solution242
    {
        public bool IsAnagram(string s, string t)
        {
            //Put all letters of first word into a dictionary
            Dictionary<char, int> lettersFirstWord =
                new Dictionary<char, int>();

            foreach (var c in s)
            {
                if (lettersFirstWord.ContainsKey(c))
                {
                    lettersFirstWord[c] = lettersFirstWord[c] + 1;
                }
                else
                {
                    lettersFirstWord.Add(c, 1);
                }
            }

            //Remove letters one by one from second word
            foreach (var c in t)
            {
                if (!lettersFirstWord.ContainsKey(c))
                {
                    return false;
                }
                else
                {
                    lettersFirstWord[c] = lettersFirstWord[c] - 1;
                    if (lettersFirstWord[c] == 0)
                    {
                        lettersFirstWord.Remove (c);
                    }
                }
            }

            //Return if count == 0, and never tried to remove something that didn't exist
            return lettersFirstWord.Count == 0;
        }
    }
}
