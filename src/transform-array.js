const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!") 
  }

  const newArr  = arr.map(value => {
    return value
  })
  const chars = ['--discard-next', '--discard-prev', '--double-next', '--double-prev', 'ignore', undefined]

  let answer = []
  newArr.forEach((value, index, arr) => {
  
        if (!chars.includes(value)) {
          answer.push(value)
        } else {
          if (value === '--discard-next') {
            if ( arr[index + 1]) {
              arr[index + 1] = 'ignore'
            }
          }
          if (value === '--discard-prev') {
            if (answer.length > 0) {
              if (arr[index - 1] && !chars.includes(arr[index - 1])) {
              answer.pop()
            }
          }
          }
          if (value === '--double-next') {
            if (arr[index + 1]) {
              answer.push(arr[index + 1])
            }
            
          }
          if (value === '--double-prev') {
            if (arr[index - 1] && !chars.includes(arr[index - 1])) {
              answer.push(arr[index - 1])
            }
            
          }
        }
  }) 
  return answer
}

module.exports = {
  transform
};

console.log(transform( [ undefined, 1, 2, 3 ]));
