

/**
 * Classic insertion sort algorithm. Runs on O(n^2)
 * @param {Array} arr
 * @returns {Array}
 */
let insertionSort = function (arr) {
  for (let j = 2; j < arr.length; j++) {
    let key = arr[j];
    let i = j - 1;
    while (i > 0 && arr[i] > key) {
      arr[i + 1] = arr[i];
      i = i - 1;
    }
    arr[i + 1] = key;
  }

  return arr;
};

module.exports = {
  insertionSort,
};
