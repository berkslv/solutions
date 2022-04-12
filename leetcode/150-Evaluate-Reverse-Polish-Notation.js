// https://leetcode.com/problems/evaluate-reverse-polish-notation/
//
// Evaluate the value of an arithmetic expression in Reverse Polish Notation.
// 
// Valid operators are +, -, *, and /. Each operand may be an integer or another expression.
// 
// Note that division between two integers should truncate toward zero.
// 
// It is guaranteed that the given RPN expression is always valid. That means the
//  expression would always evaluate to a result, and there will not be any division by zero operation.
// 
// 
// Example 1:
// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9
//
// Example 2:
// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6
//
// Example 3:
// Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// Output: 22
// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {

    let stack = [];

    let operators = {
        "+":"+",
        "-":"-",
        "*":"*",
        "/":"/"
    }

    for (let i = 0; i < tokens.length; i++) {
        const element = tokens[i];
        if (operators[element] === undefined) {
            // operand
            stack.push(element);
        } else {
            // operator
            let a = stack.pop();
            let b = stack.pop();
            let result = eval(a,b,element);
            stack.push(result);
        }
    }

    
    return stack.pop();

};


let eval = function (operand1, operand2, operator) {
    let result = null;

    operand1 = parseInt(operand1);
    operand2 = parseInt(operand2);

    switch (operator) {
        case "+":
            result = operand2 + operand1;
            break;
        case "-":
            result = operand2 - operand1;
            break;
        case "*":
            result = operand2 * operand1;
            break;
        case "/":
            result = Math.trunc(operand2 / operand1);
            break;
        default:
            result = undefined;
            break;
    }

    return String(result);
}

// Runtime: 96 ms, faster than 59.06% of JavaScript online submissions for Evaluate Reverse Polish Notation.
// Memory Usage: 44.8 MB, less than 69.21% of JavaScript online submissions for Evaluate Reverse Polish Notation.


module.exports = {
    evalRPN
}