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
  const arr2 = []
  domains.forEach(val => {
    arr.push(val.split('.').reverse())
  })
  console.log(arr);

  return answer
}

module.exports = {
  getDNSStats
};

console.log(getDNSStats(['epam.com', 'info.epam.com']));
