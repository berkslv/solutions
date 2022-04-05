// https://leetcode.com/problems/contains-duplicate/
//
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
//
//
//
// Example 1:
// Input: nums = [1,2,3,1]
// Output: true
//
// Example 2:
// Input: nums = [1,2,3,4]
// Output: false
//
// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
//

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let arr = [];

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];

        if (arr[element] == undefined) {
            arr[element] = 0;
        } else {
            arr[element] ++;
        }

        if (arr[element] > 0) {
            return true;
        }
    }

    return false;
};

// Runtime: 189 ms, faster than 25.69% of JavaScript online submissions for Contains Duplicate.
// Memory Usage: 51.8 MB, less than 16.59% of JavaScript online submissions for Contains Duplicate.

module.exports = {
    containsDuplicate
}
