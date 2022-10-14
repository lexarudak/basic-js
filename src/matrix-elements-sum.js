const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const blockIndex = []
  let sum = 0
  matrix.forEach(arr => {
    arr.forEach((value, index) => {
      if (!(blockIndex.includes(index))){
        console.log(value);
        sum = sum + value}
        if (value === 0) {
          blockIndex.push(index)
        }
    })
  })
  return sum
}

module.exports = {
  getMatrixElementsSum
};

// console.log(getMatrixElementsSum([
// [0, 1, 1, 2],
// [0, 5, 0, 0],
// [2, 0, 3, 3]
// ]));
