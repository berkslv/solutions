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



class Stack {
    constructor(array = []) {
        this.topIndex = -1;

        if (array.length > 0) {
            this.array = [];
            for (let i = 0; i < array.length; i++) {
                const element = array[i];
                this.push(element);
            }
        } else {
            this.array = array;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.array.push(val);
        this.topIndex++;
    }

    /**
     * @return {number}
     */
    pop() {
        if (this.topIndex > -1) {
            this.topIndex--;
        }
        return this.array.pop();
    }

    /**
     * @return {number}
     */
    top() {
        console.log(this.topIndex);
        return this.array[this.topIndex];
    }

    /**
     * @return {number}
     */
    getMin() {

        let lowest = this.array[0];

        for (let i = 0; i < this.array.length; i++) {
            const element = this.array[i];

            if (lowest > element) {
                lowest = element;
            }
        }

        return lowest;
    }

    /**
     * @return {void}
     */
    print() {
        console.log(this.array);
    }
}





/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {


    let stack = new Stack(s);
    let map = {
        "}": "{",
        "]": "[",
        ")": "("
    };


    for (let i = 0; i < stack.array.length; i++) {


    }

    return true;

};


module.exports = {
    isValid
}