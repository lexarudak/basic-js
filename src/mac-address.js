const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const arr = n.split('-')
  const posible = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
  if ((arr.length !== 6)) {
    return false
  }
  console.log(arr);
  let answer = true
  arr.forEach(element => {
    if (element.length !== 2) {
      answer = false
    }
    if (!(posible.includes(element[0]) || !(posible.includes(element[1])))) {
      answer = false
      
    }
    
  });
  
  return answer
}
module.exports = {
  isMAC48Address
};

// console.log(isMAC48Address('Z1-1B-63-84-45-E6'));
