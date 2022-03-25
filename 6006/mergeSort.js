
/**
 * Sub program for merge sort
 * @param {Array} arr1 
 * @param {Array} arr2 
 * @returns 
 */
const merge = (arr1, arr2) => {
  let sorted = [];

  // while there is length
  while (arr1.length && arr2.length) {
    // sort with comprassion
    if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
    else sorted.push(arr2.shift());
  }

  // concat two arrays
  return sorted.concat(arr1.slice().concat(arr2.slice()));
};

/**
 * Classic merge sort algorithm. Runs on O( n * log(n) )
 * @param {Array} arr 
 * @returns sorted array
 */
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  // gets middle of the array
  let mid = Math.floor(arr.length / 2);
  
  // takes left part of array
  let left = mergeSort(arr.slice(0, mid));
  
  // takes right part of array
  let right = mergeSort(arr.slice(mid));

  // call herself recursively
  return merge(left, right);
};

module.exports = {
  mergeSort,
};
