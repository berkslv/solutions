// https://projecteuler.net/problem=1

// If we list all the natural numbers below 10 that are multiples 
// of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23



function sumOfMultiples(limit) {
    var i, sum = 0;
    for (i = 3; i < limit; i ++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

module.exports = {
  sumOfMultiples,
};
