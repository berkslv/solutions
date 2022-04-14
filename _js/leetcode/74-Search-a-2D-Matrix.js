// https://leetcode.com/problems/search-a-2d-matrix/
// 
// Write an efficient algorithm that searches for a value target in an m x n integer 
//  matrix matrix. This matrix has the following properties:
// 
// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
//  
// 
// Example 1:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
//
// Example 2:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

//------------------------------------------------ Hashmap solution
/**
 * Hashmap solution
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {

    let hashmap = {};

    for (let i = 0; i < matrix.length; i++) {
        const first = matrix[i];
        for (let j = 0; j < first.length; j++) {
            const second = matrix[i][j];
            hashmap[second] = true;
        }
    }

    if (hashmap[target] !== undefined) {
        return true
    } else {
        return false;
    }
};
// Runtime: 74 ms, faster than 64.19% of JavaScript online submissions for Search a 2D Matrix.
// Memory Usage: 42.9 MB, less than 11.05% of JavaScript online submissions for Search a 2D Matrix.


//------------------------------------------------ Linear search solution
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {

    for (let i = 0; i < matrix.length; i++) {
        const first = matrix[i];
        for (let j = 0; j < first.length; j++) {
            const second = matrix[i][j];
            if (second === target) {
                return true;
            }
        }
    }

    return false;
};
// Runtime: 67 ms, faster than 76.51% of JavaScript online submissions for Search a 2D Matrix.
// Memory Usage: 42.3 MB, less than 44.19% of JavaScript online submissions for Search a 2D Matrix.


//------------------------------------------------ Binary search solution
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {

    let left = 0;
    let right = nums.length - 1;

    let middle = null;
    while (left <= right) {
        middle = Math.floor((left + right) / 2);

        if (nums[middle] === target) {
            return true;
        } else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return false;
};

let searchRow = function (matrix, target) {
    let i = 0;
    for (i = 0; i < matrix.length; i++) {
        const element = matrix[i][0];
        if (element > target) {
            return i - 1;
        }
    }

    return i - 1;
}

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {

    let i = searchRow(matrix, target);

    if (i == -1) {
        return false;
    }

    return search(matrix[i], target);
};
// Runtime: 59 ms, faster than 93.28% of JavaScript online submissions for Search a 2D Matrix.
// Memory Usage: 42.1 MB, less than 65.51% of JavaScript online submissions for Search a 2D Matrix.


module.exports = {
    searchMatrix
}