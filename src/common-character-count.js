const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let newS1 = s1.split('')
  const newS2 = s2.split('')
  let count = 0
  console.log(newS1);
  newS2.forEach(value => {
    if (newS1.includes(value)) {
      console.log(newS1.indexOf(value));
      newS1.splice(newS1.indexOf(value), 1)
      console.log(newS1);
      
      count++
    }
  })
  return count
}

module.exports = {
  getCommonCharacterCount
};

// console.log(getCommonCharacterCount('aabcc', 'adcaa'));
