// https://leetcode.com/problems/min-stack/
// 
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
// 
// Implement the MinStack class:
// 
// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
//  
// 
// Example 1:
// 
// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]
// 
// Output
// [null,null,null,null,-3,null,0,-2]
// 
// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2


var MinStack = function () {
    this.array = [];
    this.topIndex = -1;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.array.push(val);
    this.topIndex++;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.array.pop();
    if (this.topIndex > -1) {
        this.topIndex--;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    console.log(this.topIndex)
    return this.array[this.topIndex]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {

    let lowest = this.array[0];

    for (let i = 0; i < this.array.length; i++) {
        const element = this.array[i];

        if (lowest > element) {
            lowest = element;
        }
    }

    return lowest;
};


/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


// Runtime: 212 ms, faster than 30.04 % of JavaScript online submissions for Min Stack.
// Memory Usage: 50.7 MB, less than 12.47 % of JavaScript online submissions for Min Stack.



module.exports = {
    MinStack
}