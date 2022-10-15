const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const text = n.toString()
  const arr = []
  let i = 0
  while (i < text.length) {
    arr.push(Number(text.replace(text[i], '')))
    i++
  }
  
  return arr.sort((a, b) => a - b).pop()
}

module.exports = {
  deleteDigit
};

// deleteDigit(222219)