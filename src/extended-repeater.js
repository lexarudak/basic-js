const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const opt = {
    repeatTimes: 0,
    separator: '+',
    addition: '',
    additionRepeatTimes: 0,
    additionSeparator: '|'
  }
  if (options.repeatTimes) {
    opt.repeatTimes = options.repeatTimes
  }
  if ('separator' in options) {
    opt.separator = `${options.separator}`
  }
  if ('addition' in options) {
    opt.addition = `${options.addition}`
  }
  if (options.additionRepeatTimes) {
    opt.additionRepeatTimes = options.additionRepeatTimes
  }
  if ('additionSeparator' in options) {
    opt.additionSeparator = `${options.additionSeparator}`
  }



  let myStr = `${str}`

  'PLUS00PLUS00PLUS'
  let addPart = opt.addition
  const addPartArr = []

  if (opt.additionRepeatTimes > 0) {
    let i = 0
    while (i < opt.additionRepeatTimes) {
    addPartArr.push(addPart)
    i++
  }
  addPart = addPartArr.join(`${opt.additionSeparator}`)
  }
  

  let myNewStr = myStr + addPart
  let answer = myNewStr

  const strArr = []
  if (opt.repeatTimes > 0) {
    let y = 0 
    while (y < opt.repeatTimes) {
      strArr.push(myNewStr)
      y++
    }
    answer = strArr.join(`${opt.separator}`)
  }


  return answer
}

module.exports = {
  repeater
};

// 'truefalse!!!false??? truefalse!!!false??? truefalse!!!false'
// console.log(repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' }));
