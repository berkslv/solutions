// in array, position b is peak iff b >= a && b >= c
// one array may be contains multiple peeks.

/**
 * @param {Array} arr
 * @returns {Array}
 */
let peakFinding1D = function (arr) {
  let peaks = [];
  
  for (let i = 0; i < arr.length; i++) {
    let a, b, c;

    if (i > 0) {
      a = arr[i - 1];
    }
    if (i < arr.length) {
      c = arr[i + 1];
    }
    b = arr[i];

    if (b >= a && b >= c) {
        peaks.push(b);
    }
  }

  return peaks;
};

module.exports = {
  peakFinding1D,
};
