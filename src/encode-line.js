const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let num = 1
  const newArr = str.split('')
  const answer = []
  newArr.forEach((val, ind, arr) => {
    if (val !== arr[ind + 1]){
      if (num === 1) {
        answer.push(val)
      } else {
        answer.push(num + val)
        num = 1
      }
    } else {
      num++
    }
  })

  return answer.join('')
}

module.exports = {
  encodeLine
};

// console.log(encodeLine('aaaatttt'));
// // 