const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {

  if (members === undefined || members === null) {
    return false
  }
  if (members.constructor !== Array) {
    return false
  }
  let answer = []
  members.forEach(value => {
    if (typeof value === 'string'){
      const trim = value.trim()
     answer.push(trim[0].toUpperCase())
    }
  })
  const newAnswer  = answer.sort()
  return newAnswer.join('')

}

module.exports = {
  createDreamTeam
};

