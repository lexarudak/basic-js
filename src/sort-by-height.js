const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const cleanArr = arr.filter(val => val !== -1)
  cleanArr.sort((a, b) => a - b).reverse()
  console.log(cleanArr);
  
  const answer = []
  arr.forEach(value => {
    if (value === -1) {
      answer.push(-1)
    } else {
      answer.push(cleanArr.pop())
    }
  })
  console.log(answer);
  
  return answer
}

module.exports = {
  sortByHeight
};

// const arr = [-1, 150, 190, 170, -1, -1, 160, 180]
// console.log(sortByHeight(arr));
