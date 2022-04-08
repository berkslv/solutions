// https://leetcode.com/problems/daily-temperatures/
//
// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.
// 
//  
// Example 1:
// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
//
// Example 2:
// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]
//
// Example 3:
// Input: temperatures = [30,60,90]
// Output: [1,1,0]

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {

    let result = [];

    for (let i = 0; i < temperatures.length; i++) {
        for (let j = i; j < temperatures.length; j++) {

            if (temperatures[i] < temperatures[j]) {
                result.push(j - i);
                break;
            }

            if (j === temperatures.length - 1) {
                result.push(0);
            }
        }
    }

    return result;
};

// O(n^2) solution with two pointer
// Runtime: 1907 ms, faster than 15.41% of JavaScript online submissions for Daily Temperatures.
// Memory Usage: 66.1 MB, less than 29.88% of JavaScript online submissions for Daily Temperatures.

module.exports = {
    dailyTemperatures
}