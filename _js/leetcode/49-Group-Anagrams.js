// https://leetcode.com/problems/group-anagrams/
// 
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// 
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
//  typically using all the original letters exactly once.
//  
// 
// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
//
// Example 2:
// Input: strs = [""]
// Output: [[""]]
//
// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = new Map();

    for (const word of strs) {

        const key = generateKey(word);

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key).push(word);
    }

    return Array.from(map.values());
};

function generateKey(word) {
    return word.split('').sort().join('');
}

// Runtime: 198 ms, faster than 45.15% of JavaScript online submissions for Group Anagrams.
// Memory Usage: 54.3 MB, less than 35.74% of JavaScript online submissions for Group Anagrams.


module.exports = {
    groupAnagrams
}