const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let value = n;

  const sumNumbers = (value) => {
    let numArr = value.toString().split("");

    let sum = numArr.reduce(function(a, b){
        return parseInt(a) + parseInt(b);
    }, 0);
    
    return sum;
  }

  while (String(value).length !== 1) {
    value = sumNumbers(value)
  }

  return value
}

module.exports = {
  getSumOfDigits
};
