const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let answer = {}
  const arr = []
  const newArr = []


  domains.forEach(val => {
    arr.push(val.split('.').reverse())
  })
  
  console.log(arr);

   arr.forEach(value => {
     let a = []
      value.forEach((val, ind, ar) => {
    if (ind === 0){
      a.push('.' + val)
    } else {
      a.push(a[ind - 1] + '.' + val)
    }
  })
    newArr.push(...a)
  })

  console.log('newArr', newArr);
  newArr.forEach(value => {
    if (!answer[value]) {
      answer[value] = 1
    } else {
      answer[value]++
    }
  })
  return answer
}

module.exports = {
  getDNSStats
};

// console.log(getDNSStats(['epam.com', 'info.epam.com']));
