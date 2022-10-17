const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor () {
    this.count = 1
    this.toShow = 0
  }
  calculateDepth(arr) {

    let isArr = arr.filter(val => Array.isArray(val))

    if (isArr.length > 0) {
        this.toShow = 0
        this.count++
    let newArr = []  

    isArr.forEach(isArrItem => {
      isArrItem.forEach(itemInside => {
      newArr.push(itemInside)
          })
        })
      this.calculateDepth(newArr)
      } else {
        console.log('to final count', this.count);
        this.toShow = this.count
        this.count = 1
    }
    return this.toShow
  }
}

// const depthCalc = new DepthCalculator()
// depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]])


module.exports = {
  DepthCalculator
};


