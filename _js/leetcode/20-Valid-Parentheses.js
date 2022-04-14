// https://leetcode.com/problems/valid-parentheses/
// 
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if 
//  the input string is valid.
// 
// An input string is valid if:
//  - Open brackets must be closed by the same type of brackets.
//  - Open brackets must be closed in the correct order.
//  
// 
// Example 1:
// Input: s = "()"
// Output: true
// 
// Example 2:
// Input: s = "()[]{}"
// Output: true
// 
// Example 3:
// Input: s = "(]"
// Output: false


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    let arr = Array.from(s);

    const map = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    let stack = [];

    for (let i = 0; i < arr.length; i++) {
        const currChar = arr[i]
        const lastChar = stack[stack.length - 1]
        const delChar = map[currChar]
    
        if (delChar) {
            if (delChar === lastChar) {
                stack.pop()
            } else {
                return false
            }
        } else {
            stack.push(currChar)
        }
    }

    return !stack.length;
};

// Runtime: 60 ms, faster than 94.28% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 42.2 MB, less than 69.42% of JavaScript online submissions for Valid Parentheses.

module.exports = {
    isValid
}