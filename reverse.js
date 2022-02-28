// https://leetcode.com/problems/reverse-integer/
// 
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// 
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
// 
//  
// Example 1:
// Input: x = 123
// Output: 321
//
// Example 2:
// Input: x = -123
// Output: -321
//
// Example 3:
// Input: x = 120
// Output: 21



/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {

    var reversed = parseInt(String(Math.abs(x)).split('').reverse().join(''));

    if (x < 0) {
        reversed = - reversed;
    }

    if (reversed < Math.pow(2,31)-1 && reversed > -Math.pow(2,31)) {
        return reversed
    }

    return 0;
};

// Runtime: 64 ms, faster than 99.25% of JavaScript online submissions for Reverse Integer.
// Memory Usage: 43.9 MB, less than 34.36% of JavaScript online submissions for Reverse Integer.

module.exports = {
  reverse,
};
