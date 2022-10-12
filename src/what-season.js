const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
// const [
//                 winter,
//                 spring,
//                 summer,
//                 autumn,
//             ] = [
//                     new Date(1900, 0, 22, 23, 45, 11, 500),
//                     new Date(1354, 4, 17, 11, 27, 4, 321),
//                     new Date(1, 6, 13, 23, 45, 11, 500),
//                     new Date(22, 8, 22, 3, 0, 11, 500),
//                 ];


// const fakeDate = {
//                 toString() {
//                     return Date.prototype.toString.call(new Date());
//                 },
//                 [Symbol.toStringTag]: 'Date'
//             };

//             Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));


function getSeason(date) {

  if (arguments.length === 0) {
    return 'Unable to determine the time of year!'
  }
  try {
    date.getTime()
  } catch {
    throw new Error('Invalid date!') 
  }
  
  
  if (!(Date.prototype.getTime.call(date))) {
    throw new Error('Invalid date!') 
  }
  if (Date.parse(date).toFixed() === NaN.toFixed()) {
    throw new Error('Invalid date!') 
  }
  if (date.getMonth() < 2 || date.getMonth() === 11) {
    return 'winter'
  } 
  if (date.getMonth() >= 2 && date.getMonth() < 5) {
    return 'spring'
  } 
    if (date.getMonth() >= 5 && date.getMonth() < 8) {
    return 'summer'
  } 
   if (date.getMonth() >= 8 && date.getMonth() < 11) {
    return 'autumn'
  } 
}

module.exports = {
  
  getSeason
};


// console.log(getSeason(fakeDate));
