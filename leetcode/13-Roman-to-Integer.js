// https://leetcode.com/problems/roman-to-integer/
//
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
//
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together.
//  12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
//
// Roman numerals are usually written largest to smallest from left to right.
// However, the numeral for four is not IIII. Instead, the number four is written as IV.
// Because the one is before the five we subtract it making four. The same principle applies
// to the number nine, which is written as IX. There are six instances where subtraction is used:
//
// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.
//
// Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.
//
// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let arr = s.split("");

  let sum = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    // IV : 4
    if (romans[arr[i]] === romans["V"]) {
      if (romans[arr[i - 1]] === romans["I"]) {
        sum -= 1 * 2;
      }
    }
    // IX : 4
    if (romans[arr[i]] === romans["X"]) {
      if (romans[arr[i - 1]] === romans["I"]) {
        sum -= 1 * 2;
      }
    }
    // XL : 40
    if (romans[arr[i]] === romans["L"]) {
      if (romans[arr[i - 1]] === romans["X"]) {
        sum -= 10 * 2;
      }
    }
    // XC : 90
    if (romans[arr[i]] === romans["C"]) {
      if (romans[arr[i - 1]] === romans["X"]) {
        sum -= 10 * 2;
      }
    }
    // CD : 400
    if (romans[arr[i]] === romans["D"]) {
      if (romans[arr[i - 1]] === romans["C"]) {
        sum -= 100 * 2;
      }
    }
    // CM : 900
    if (romans[arr[i]] === romans["M"]) {
      if (romans[arr[i - 1]] === romans["C"]) {
        sum -= 100 * 2;
      }
    }

    sum += romans[arr[i]];
  }

  return sum;
};

// Runtime: 148 ms, faster than 80.16% of JavaScript online submissions for Roman to Integer.
// Memory Usage: 47.5 MB, less than 18.15% of JavaScript online submissions for Roman to Integer.


module.exports = {
  romanToInt,
};
