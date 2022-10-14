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
  
  let answer = 0
  function calc (sum) {
    let newArr = sum.toString().split('')
  newArr = newArr.map(val => {
    return Number(val)
  })
  const summa = newArr.reduce((acc, val) => {
    return acc + val
  }, 0)
  answer = summa
  if (answer.toString().length > 1) {
    calc(answer)
  }
  
  }
  calc(n)
  
  console.log(answer);
  
  return answer
}

module.exports = {
  getSumOfDigits
};

// getSumOfDigits(91)