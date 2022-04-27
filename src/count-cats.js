const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
  let counter = 0;

  backyard.map(function(elem) {
    return elem.map(function(item) {
      if (item === '^^') {
        counter++
      }
    });
  });
  
  return counter
}

countCats([ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ]);

module.exports = {
  countCats
};
